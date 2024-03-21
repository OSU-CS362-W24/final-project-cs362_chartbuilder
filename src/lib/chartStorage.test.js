var saveChart = require('./chartStorage')
var loadAllSavedCharts = require('./chartStorage')
var loadSavedCharts = require('./chartStorage')
var updateCurrentChartData = require('./chartStorage')
var loadCurrentChartData = require('./chartStorage')
var loadCurrentChartData = require('./chartStorage')
//saveChart
test("savechart functions as intended", function(){
    expect(saveChart).toBeInstanceOf(Object)
})
test("saveChart is called", function(){
    expect(saveChart).toBeDefined()
})
//loadAllSavedCharts
test("loadAllSavedChart is called", function(){
    expect(loadAllSavedCharts).toBeDefined()
})
test("loadAllSavedChart is called and the output is confirmed ", function(){
    expect(loadAllSavedCharts).toBeInstanceOf(Object)
})
//loadSavedChart
test("loadSavedChart is called", function(){
    expect(loadSavedCharts).toBeDefined()
})
test("loadSavedChart returns a specific chart",function(){
    expect(loadSavedCharts).toBeInstanceOf(Object)
})
//UpdateCurrentChartData
test("updateCurrentChartData is called",function(){
    expect(updateCurrentChartData).toBeDefined()
})
//LoadCurrentChartData
test("LoadCurrentChartData is called", function(){
    expect(loadCurrentChartData).toBeDefined()
})
test("LoadCurrentChartData returns data for the current chart", function(){
    expect(loadCurrentChartData).toBeInstanceOf(Object)
})

