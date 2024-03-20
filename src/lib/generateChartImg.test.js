var generateChartImg = require('./generateChartImg')
var generateQuickChartReQ =  require('./generateChartImg')

// test("generateChartImg returns a true statement if algorithm functions correctly", function(){
//     data = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
//     testData = ["line",data,"Forward","Back","Identity-test","Orange"]
//     results = generateChartImg(testData)
//     expect(results).toBe(testData)
// })
test("generateQuickChartReQ returns a true statement if algorithm functions correctly", function(){
    data = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["line",data,"Forward","Back","Identity-test","Orange"]
    results = generateQuickChartReQ(testData)
    expect(results).toBeDefined()
})

// test("generateChartImg runs if it is given a line", function(){
//     data1 = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
//     testData = ["line",data1,"Forward","Back","Identity-test","Orange"]
//     results = generateChartImg(testData)
//     expect(results).toBe(testData)
// })
// test("generateChartImg runs if it is given a scatter", function(){
//     data2 = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
//     testData = ["scatter",data2,"Forward","Back","Identity-test","Orange"]
//     results = generateChartImg(testData)
//     expect(results).toBe(testData)
// })
// test("generateChartImg runs if it is given a bar", function(){
//     data = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
//     testData = ["bar",data,"Forward","Back","Identity-test","Orange"]
//     results = generateChartImg(testData)
//     expect(results).toBe(testData)
// })

