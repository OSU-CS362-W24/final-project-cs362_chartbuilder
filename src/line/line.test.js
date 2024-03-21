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

test('clicking the "add values" button adds input boxes for each click', async function() {
   // Arrange:
   initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`)

   const addValButton = domTesting.getByRole(document, "button", { name: "+" })

   const user = userEvent.setup()
   await user.click(addValButton)
})
