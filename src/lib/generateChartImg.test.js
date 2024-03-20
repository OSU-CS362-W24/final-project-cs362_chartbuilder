var generateChartImg = require('./generateChartImg')
var generateQuickChartReQ =  require('./generateChartImg')

test("generateChartImg passes if algorithm functions correctly, and is defined", function(){
    data = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["line",data,"Forward","Back","Identity-test","Orange"]
    results = generateChartImg(testData)
    expect(results).toBeDefined()
})
test("generateQuickChartReQ(origin)passes if algorithm functions correctly, and is defined", function(){
    data = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["line",data,"Forward","Back","Identity-test","Orange"]
    results = generateQuickChartReQ(testData)
    expect(results).toBeDefined()
})
//defintion tests
test("generateQuickChartReQ(line) returns an object if algorithm functions correctly with a line", function(){
    data = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["line",data,"Forward","Back","Identity-test","Orange"]
    results = generateQuickChartReQ(testData)
    expect(results).toBeInstanceOf(Object)
})
test("generateQuickChartReQ(line) returns an object if algorithm functions correctly with a line", function(){
    data = [ { x: 6, y: 8},{ x: 3, y: 3},{ x: 6, y: 9},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["line",data,"Forward","Back","Identity-test","Orange"]
    results = generateQuickChartReQ(testData)
    expect(results).toBeInstanceOf(Object)
})
test("generateQuickChartReQ(scatter) returns an object if algorithm functions correctly with a scatter", function(){
    data = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["scatter",data,"Forward","Back","Identity-test","Orange"]
    results = generateQuickChartReQ(testData)
    expect(results).toBeInstanceOf(Object)
})
//generateQuickChartReQs tests
//
test("generateQuickChartReQ(bar) returns an object if algorithm functions correctly with a bar", function(){
    data = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["scatter",data,"Forward","Back","Identity-test","Orange"]
    results = generateQuickChartReQ(testData)
    expect(results).toBeInstanceOf(Object)
})
test("generateChartImg runs and returns a js promise if it is given a line", function(){
    data1 = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["line",data1,"Forward","Back","Identity-test","Orange"]
    results = generateChartImg(testData)
    expect(results).toBeInstanceOf(Promise)
})
test("generateChartImg runs and returns a js promise if it is given a scatter", function(){
    data2 = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["scatter",data2,"Forward","Back","Identity-test","Orange"]
    results = generateChartImg(testData)
    expect(results).toBeInstanceOf(Promise)
})
test("generateChartImg runs and returns a js promise if it is given a bar", function(){
    data = [ { x: 2, y: 7},{ x: 4, y: 4},{ x: 1, y: 10},{ x: 5, y: 9},{ x: 1, y: 5}]
    testData = ["bar",data,"Forward","Back","Identity-test","Orange"]
    results = generateChartImg(testData)
    expect(results).toBeInstanceOf(Promise)
})

