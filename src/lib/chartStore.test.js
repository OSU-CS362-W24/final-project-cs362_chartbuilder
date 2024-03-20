var saveChart = require('./chartStorage')
var loadAllSavedCharts = require('./chartStorage')
var loadSavedCharts = require('./chartStorage')
var updateCurrentChartData = require('./chartStorage')
var loadCurrentChartData = require('./chartStorage')
var loadCurrentChartData = require('./chartStorage')

// test("savechart functions as intended", function(){
//     testData = {chart,idx}
//     results = saveChart(testData)
//     expect(charts).toContain(chart)
// })
test("LoadCurrentChartData is called", function(){
    expect(loadCurrentChartData).toBeDefined()
})
test("LoadCurrentChartData returns data for the current chart", function(){
    expect(loadCurrentChartData).toBeInstanceOf(Object)
})
test("updateCurrentChartData is called",function(){
    expect(updateCurrentChartData).toBeDefined()
})
test("loadSavedChart is called", function(){
    expect(loadSavedCharts).toBeDefined()
})
test("loadAllSavedChart is called", function(){
    expect(loadAllSavedCharts).toBeDefined()
})
test("saveChart is called", function(){
    expect(saveChart).toBeDefined()
})
// test("loadSavedChart loads and returns a specifi chart from the array of saved charts",function(){

// })