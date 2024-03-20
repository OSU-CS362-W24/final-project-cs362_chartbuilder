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

test("sortPoints() returns a reference to the original array passed into it", function(){
   // Arrange
   testData = [
      { x: 3, y: 6},
      { x: 5, y: 10},
      { x: 8, y: 8},
      { x: 2, y: 1},
      { x: 1, y: 2}
   ]

   // Act 
   resultData = sortPoints(testData)

   // Assert
   expect(resultData[1].x).toBeGreaterThan(resultData[0].x)
   expect(resultData[2].x).toBeGreaterThan(resultData[1].x)
   expect(resultData[3].x).toBeGreaterThan(resultData[2].x)
   expect(resultData[4].x).toBeGreaterThan(resultData[3].x)
})

