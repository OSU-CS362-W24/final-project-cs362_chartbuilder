var generateChartImg = require('./generateChartImg')
var generateQuickChartReQ =  require('./generateChartImg')

//Calling and rewriting the fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        blob: () => Promise.resolve(new Blob()), //Waits for input to create a new blob url
    })
);


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

describe ('Check input type for all 3 chart types', () => {

    beforeEach(() => { //resets the mock URL and thus all data inside of chart. Prevents errors
        jest.clearAllMocks();
    });

    test ('should return Quickchart URL with type: Bar and all valid inputs', async() => { //async tells us that we're waiting for test to generate a graph
        //Input data for function. Taken from quickcharts API documentation page
         type = 'bar';
         data4 = {
            labels: [2012, 2013, 2014, 2015, 2016],
            datasets: [{
                label: 'Users',
                data: [120, 60, 50, 180, 120]
            }]
        };
         xLabel = 'Year';
         yLabel = 'Users';
         title = 'Years_to_People_bar';
         color = '#3366FF';

        await generateChartImg(type, data4, xLabel, yLabel, title, color); //Data must be mocked above or I get errors

         URLOutput = JSON.parse(fetch.mock.calls[0][1].body); //grabs URL from fetch starting on the first line of the output data. Returns as a callable string for out tests

        //Assertations. These outputs are the path of the return variable in the original funciton
        expect(URLOutput.chart.type).toBe(type);
        expect(URLOutput.chart.data.datasets[0].data).toEqual(data4);
        expect(URLOutput.chart.options.scales.x.title.text).toBe(xLabel);
        expect(URLOutput.chart.options.scales.y.title.text).toBe(yLabel);
        expect(URLOutput.chart.options.plugins.title.text).toBe(title);
        expect(URLOutput.chart.options.datasets.bar.backgroundColor).toBe(color);
    })

    test ('should return Quickchart URL with type: Line and all valid inputs', async() => { //async tells us that we're waiting for test to generate a graph
        //Input data for function. Taken from quickcharts API documentation page
         type = 'line';
         data5 = {
            labels: [2012, 2013, 2014, 2015, 2016],
            datasets: [{
                label: 'Users',
                data: [120, 60, 50, 180, 120]
            }]
        };
         xLabel = 'Year';
         yLabel = 'Users';
         title = 'Years_to_people_line';
         color = '#3366FF';

        await generateChartImg(type, data5, xLabel, yLabel, title, color); //Data must be mocked above or I get errors

        URLOutput = await JSON.parse(fetch.mock.calls[0][1].body); //grabs URL from fetch starting on the first line of the output data. Returns as a callable string for out tests

        //Assertations. These outputs are the path of the return variable in the original funciton
        expect(URLOutput.chart.type).toBe(type);
        expect(URLOutput.chart.data.datasets[0].data).toEqual(data5);
        expect(URLOutput.chart.options.scales.x.title.text).toBe(xLabel);
        expect(URLOutput.chart.options.scales.y.title.text).toBe(yLabel);
        expect(URLOutput.chart.options.plugins.title.text).toBe(title);
        expect(URLOutput.chart.options.datasets.line.borderColor).toBe(color);
        expect(URLOutput.chart.options.datasets.line.borderWidth).toBe(2);
    })

    test ('should return Quickchart URL with type: Scatter and all valid inputs', async() => { //async tells us that we're waiting for test to generate a graph
        //Input data for function. Taken from quickcharts API documentation page
         type = 'scatter';
         data6 = {
            labels: [2012, 2013, 2014, 2015, 2016],
            datasets: [{
                label: 'Users',
                data: [120, 60, 50, 180, 120]
            }]
        };
         xLabel = 'Year';
         yLabel = 'Users';
         title = 'null';
         color = '#3366FF';

        await generateChartImg(type, data6, xLabel, yLabel, title, color); //Data must be mocked above or I get errors

        URLOutput = await JSON.parse(fetch.mock.calls[0][1].body); //grabs URL from fetch starting on the first line of the output data. Returns as a callable string for out tests

        //Assertations. These outputs are the path of the return variable in the original funciton
        expect(URLOutput.chart.type).toBe(type);
        expect(URLOutput.chart.data.datasets[0].data).toEqual(data6);
        expect(URLOutput.chart.options.scales.x.title.text).toBe(xLabel);
        expect(URLOutput.chart.options.scales.y.title.text).toBe(yLabel);
        expect(URLOutput.chart.options.plugins.title.text).toBe(title);
        expect(URLOutput.chart.options.title).toBeUndefined();
        expect(URLOutput.chart.options.datasets.scatter.backgroundColor).toBe(color);
        expect(URLOutput.chart.options.datasets.scatter.borderColor).toBe(color);
        expect(URLOutput.chart.options.datasets.scatter.borderWidth).toBe(1);
        
    })
})