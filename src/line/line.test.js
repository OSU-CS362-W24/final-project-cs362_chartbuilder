/**
 * @jest-environment jsdom
 */

const fs = require("fs")
const domTesting = require('@testing-library/dom')
require('@testing-library/jest-dom')
const userEvent = require("@testing-library/user-event").default

function initDomFromFiles(htmlPath, jsPath){
   const html = fs.readFileSync(htmlPath, 'utf8')
   document.open()
   document.write(html)
   document.close()
   jest.isolateModules(function() {
      require(jsPath) 
   })
}

test('clicking the "add values" button adds 2 input boxes when clicked', async function() {
   // Arrange:
   initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`)

   // Finds the '+' button 
   const addValButton = domTesting.getByRole(document, "button", { name: "+" })

   // Checks that there are only 2 number input fields before button is pressed
   const valueInputsBefore = domTesting.queryAllByRole(document, 'spinbutton')
   expect(valueInputsBefore).toHaveLength(2)

   // Act: 
   const user = userEvent.setup()
   // Click the '+' button once, adding two number input field
   await user.click(addValButton)

   // Assert:
   const valueInputsAfter = domTesting.queryAllByRole(document, 'spinbutton')
   // Asserts that there should be four number input fields
   expect(valueInputsAfter).toHaveLength(4)
})

test('clicking the "add values" button adds input boxes for multiple button clicks', async function() {
   // Arrange:
   initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`)

   // Finds the '+' button 
   const addValButton = domTesting.getByRole(document, "button", { name: "+" })

   // Act: 
   const user = userEvent.setup()
   // User clicks the '+' button four times, adding eight number input fields
   await user.click(addValButton)
   await user.click(addValButton)
   await user.click(addValButton)
   await user.click(addValButton)

   // Assert:
   // Asserts that there should be ten number input fields
   const valueInputsAfter = domTesting.queryAllByRole(document, 'spinbutton')
   expect(valueInputsAfter).toHaveLength(10)
})

test('clicking the "add values" button does not impact data the user input', async function() {
   // Arrange:
   initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`)

   // Finds the '+' button 
   const addValButton = domTesting.getByRole(document, "button", { name: "+" })

   // Act: 
   const user = userEvent.setup()
   // User clicks the '+' button once, adding two number input fields
   await user.click(addValButton)

   // Finds all number inputs
   const valueInputs = domTesting.queryAllByRole(document, 'spinbutton')
   // Types '1' into the first number input 
   await user.type(valueInputs[0], '1')
   // Types '1' into the second number input 
   await user.type(valueInputs[1], '2')

   await user.click(addValButton)

   // Assert:
   // Asserts that the values entered by the user were not impacted
   const valueInputsAfter = domTesting.queryAllByRole(document, 'spinbutton')
   expect(valueInputsAfter[0]).toHaveValue(1)
   expect(valueInputsAfter[1]).toHaveValue(2)
})
