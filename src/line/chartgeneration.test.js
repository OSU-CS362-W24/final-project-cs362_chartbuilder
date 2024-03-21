/**
 * @jest-environment jsdom
 */

const fs = require("fs")
const domTesting = require('@testing-library/dom')
require('@testing-library/jest-dom')
const userEvent = require("@testing-library/user-event").default

function initDomFromFiles(htmlPath,jsPath){
   const html = fs.readFileSync(htmlPath, 'utf8')
   document.open()
   document.write(html)
   document.close()
   jest.isolateModules(function() {
      require(jsPath) 
   })
}

test ("Given correct values the program outputs correctly", async function(){
    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`)

    //Setting input variables
    const chart_Title = domTesting.getByLabelText(document, "Chart title");
    const x_Label = domTesting.getByLabelText(document, "X label");
    const y_Label = domTesting.getByLabelText(document, "Y label");
    const chart_Color = domTesting.getByLabelText(document, "Chart color");
    const add_Values_Btn = domTesting.getByText(document, "+");

    const clear_Chart_Btn = domTesting.getByText(document, "Clear chart data");

    //Clicking the plus button 6 times to add 12 fields as per example video
    for (let i=0; i<5; i++){
        await userEvent.click(add_Values_Btn);
    }
    const value_Fields = domTesting.queryAllByRole(document, 'spinbutton'); //Must be declared AFTER we generate them to get accurate number

    //Filling all input fields (and color button) with values
    await userEvent.type(chart_Title, 'Bots vs Bugs');
    await userEvent.type(x_Label, "Bots");
    await userEvent.type(y_Label, "Bugs");
    chart_Color.value = '#000000';

    for (let i=0; i<12; i++){
        await userEvent.type(value_Fields[i], "1");
    }

    //Checking that all fields on the screen are populated
    expect(chart_Title.value).toBe("Bots vs Bugs");
    expect(x_Label.value).toBe("Bots");
    expect(y_Label.value).toBe("Bugs");
    expect(chart_Color.value).toBe("#000000")

    expect(value_Fields).toHaveLength(12);
    for (let i=0; i<12; i++){
        expect(value_Fields[i].value).toBe("1");
    }
})