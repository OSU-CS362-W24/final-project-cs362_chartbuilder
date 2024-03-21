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

   const addValButton = domTesting.getByRole(document, "button", { name: "+" })

   const valueInputsBefore = domTesting.queryAllByRole(document, 'spinbutton')
   expect(valueInputsBefore).toHaveLength(2)

   // Act: 
   const user = userEvent.setup()
   await user.click(addValButton)

   // Assert:
   const valueInputsAfter = domTesting.queryAllByRole(document, 'spinbutton')
   expect(valueInputsAfter).toHaveLength(4)
})

test('clicking the "add values" button adds input boxes for multiple button clicks', async function() {
   // Arrange:
   initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`)

   const addValButton = domTesting.getByRole(document, "button", { name: "+" })

   // Act: 
   const user = userEvent.setup()
   await user.click(addValButton)
   await user.click(addValButton)
   await user.click(addValButton)
   await user.click(addValButton)

   // Assert:
   const valueInputsAfter = domTesting.queryAllByRole(document, 'spinbutton')
   expect(valueInputsAfter).toHaveLength(10)
})

test('clicking the "add values" button does not impact data the user input', async function() {
   // Arrange:
   initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`)

   const addValButton = domTesting.getByRole(document, "button", { name: "+" })

   // Act: 
   const user = userEvent.setup()
   await user.click(addValButton)

   const valueInputs = domTesting.queryAllByRole(document, 'spinbutton')
   await user.type(valueInputs[0], '1')
   await user.type(valueInputs[1], '2')

   await user.click(addValButton)

   // Assert:
   const valueInputsAfter = domTesting.queryAllByRole(document, 'spinbutton')
   expect(valueInputsAfter[0]).toHaveValue(1)
   expect(valueInputsAfter[1]).toHaveValue(2)
})
