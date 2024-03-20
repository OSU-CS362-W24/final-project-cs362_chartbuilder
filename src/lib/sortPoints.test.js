var sortPoints = require('./sortPoints')

test("sortPoints() returns a reference to the original array passed into it", function(){
   // Arrange
   testData = [
      { x: 2, y: 1},
      { x: 1, y: 2}
   ]

   // Act 
   resultData = sortPoints(testData)

   // Assert
   expect(resultData).toBe(testData)
})

