var generateChartImg = require('./generateChartImg')
var generateQuickChartReQ =  require('./generateChartImg')

test("generateChartImg returns a true statement if algorithm functions correctly", function(){
    data = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["line",data,"Forward","Back","Identity-test","Orange"]
    results = generateChartImg(testData)
    expect(results).toBeDefined()
})
test("generateQuickChartReQ(origin) returns a true statement if algorithm functions correctly", function(){
    data = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["line",data,"Forward","Back","Identity-test","Orange"]
    results = generateQuickChartReQ(testData)
    expect(results).toBeDefined()
})
test("generateQuickChartReQ(line) returns a true statement if algorithm functions correctly with a line", function(){
    data = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["line",data,"Forward","Back","Identity-test","Orange"]
    results = generateQuickChartReQ(testData)
    expect(results).toBeInstanceOf(Object)
})
test("generateQuickChartReQ(scatter) returns a true statement if algorithm functions correctly with a scatter", function(){
    data = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["scatter",data,"Forward","Back","Identity-test","Orange"]
    results = generateQuickChartReQ(testData)
    expect(results).toBeInstanceOf(Object)
})
test("generateQuickChartReQ(bar) returns a true statement if algorithm functions correctly with a bar", function(){
    data = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["scatter",data,"Forward","Back","Identity-test","Orange"]
    results = generateQuickChartReQ(testData)
    expect(results).toBeInstanceOf(Object)
})
test("generateChartImg runs if it is given a line", function(){
    data1 = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["line",data1,"Forward","Back","Identity-test","Orange"]
    results = generateChartImg(testData)
    expect(results).toBeInstanceOf(Promise)
})
test("generateChartImg runs if it is given a scatter", function(){
    data2 = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["scatter",data2,"Forward","Back","Identity-test","Orange"]
    results = generateChartImg(testData)
    expect(results).toBeInstanceOf(Promise)
})
test("generateChartImg runs if it is given a bar", function(){
    data = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["bar",data,"Forward","Back","Identity-test","Orange"]
    results = generateChartImg(testData)
    expect(results).toBeInstanceOf(Promise)
})

