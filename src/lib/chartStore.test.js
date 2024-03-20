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
test("currentchart is called", function(){
    expect(loadCurrentChartData).toBeDefined()
})