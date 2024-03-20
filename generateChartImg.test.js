//https://jestjs.io/docs/asynchronous for anyone else who wants it

 generateChartImg = require('./src/lib/generateChartImg.js');


//Calling and rewriting the fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        blob: () => Promise.resolve(new Blob()), //Waits for input to create a new blob url
    })
);


describe ('Check input type for all 3 chart types', () => {

    beforeEach(() => { //resets the mock URL and thus all data inside of chart. Prevents errors
        jest.clearAllMocks();
    });

    test ('should return Quickchart URL with type: Bar and all valid inputs', async() => { //async tells us that we're waiting for test to generate a graph
        //Input data for function. Taken from quickcharts API documentation page
         type = 'bar';
         data = {
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

        await generateChartImg(type, data, xLabel, yLabel, title, color); //Data must be mocked above or I get errors

         URLOutput = JSON.parse(fetch.mock.calls[0][1].body); //grabs URL from fetch starting on the first line of the output data. Returns as a callable string for out tests

        //Assertations. These outputs are the path of the return variable in the original funciton
        expect(URLOutput.chart.type).toBe(type);
        expect(URLOutput.chart.data.datasets[0].data).toEqual(data);
        expect(URLOutput.chart.options.scales.x.title.text).toBe(xLabel);
        expect(URLOutput.chart.options.scales.y.title.text).toBe(yLabel);
        expect(URLOutput.chart.options.plugins.title.text).toBe(title);
        expect(URLOutput.chart.options.datasets.bar.backgroundColor).toBe(color);
    })

    test ('should return Quickchart URL with type: Line and all valid inputs', async() => { //async tells us that we're waiting for test to generate a graph
        //Input data for function. Taken from quickcharts API documentation page
         type = 'line';
         data = {
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

        await generateChartImg(type, data, xLabel, yLabel, title, color); //Data must be mocked above or I get errors

        URLOutput = await JSON.parse(fetch.mock.calls[0][1].body); //grabs URL from fetch starting on the first line of the output data. Returns as a callable string for out tests

        //Assertations. These outputs are the path of the return variable in the original funciton
        expect(URLOutput.chart.type).toBe(type);
        expect(URLOutput.chart.data.datasets[0].data).toEqual(data);
        expect(URLOutput.chart.options.scales.x.title.text).toBe(xLabel);
        expect(URLOutput.chart.options.scales.y.title.text).toBe(yLabel);
        expect(URLOutput.chart.options.plugins.title.text).toBe(title);
        expect(URLOutput.chart.options.datasets.line.borderColor).toBe(color);
        expect(URLOutput.chart.options.datasets.line.borderWidth).toBe(2);
    })

    test ('should return Quickchart URL with type: Scatter and all valid inputs', async() => { //async tells us that we're waiting for test to generate a graph
        //Input data for function. Taken from quickcharts API documentation page
         type = 'scatter';
         data = {
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

        await generateChartImg(type, data, xLabel, yLabel, title, color); //Data must be mocked above or I get errors

        URLOutput = await JSON.parse(fetch.mock.calls[0][1].body); //grabs URL from fetch starting on the first line of the output data. Returns as a callable string for out tests

        //Assertations. These outputs are the path of the return variable in the original funciton
        expect(URLOutput.chart.type).toBe(type);
        expect(URLOutput.chart.data.datasets[0].data).toEqual(data);
        expect(URLOutput.chart.options.scales.x.title.text).toBe(xLabel);
        expect(URLOutput.chart.options.scales.y.title.text).toBe(yLabel);
        expect(URLOutput.chart.options.plugins.title.text).toBe(title);
        expect(URLOutput.chart.options.title).toBeUndefined();
        expect(URLOutput.chart.options.datasets.scatter.backgroundColor).toBe(color);
        expect(URLOutput.chart.options.datasets.scatter.borderColor).toBe(color);
        expect(URLOutput.chart.options.datasets.scatter.borderWidth).toBe(1);
        
    })
})