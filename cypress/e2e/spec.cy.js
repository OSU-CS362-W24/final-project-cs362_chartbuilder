function setup_LineChart(){
  //Create and populate a line chart
    cy.findByText("Line").click()
    cy.findByLabelText('Chart title').type('Cats vs. Dogs');
    cy.findByLabelText('X label').type('Cats');
    cy.findByLabelText('Y label').type('Dogs');
  
    //create buttons with + button and populate them with data as per video
    for (let i = 0; i < 4; i++) {
      cy.findByRole("button", {name: "+"}).click();
    }
  
      //Populate variables section of graph with numbers. Done in a very icky way because they're auto-generated buttons with no discernable label
      //Would absolutely go better in a loop but I couldn't find a pattern in the y-value nums
      cy.get(`:nth-child(${4}) > .x-value-input`).type(1);
      cy.get(`:nth-child(${5}) > .y-value-input`).type(3);
      cy.get(`:nth-child(${6}) > .x-value-input`).type(2);
      cy.get(`:nth-child(${7}) > .y-value-input`).type(7);
      cy.get(`:nth-child(${8}) > .x-value-input`).type(3);
      cy.get(`:nth-child(${9}) > .y-value-input`).type(15);
      cy.get(`:nth-child(${10}) > .x-value-input`).type(4);
      cy.get(`:nth-child(${11}) > .y-value-input`).type(25);
      cy.get(`:nth-child(${12}) > .x-value-input`).type(5);
      cy.get(`:nth-child(${13}) > .y-value-input`).type(40);
  
    cy.findByRole("button", {name: "Generate chart"}).click();
  }
  
  
  function setup_ScatterChart(){
    cy.findByText("Scatter").click()
    cy.findByLabelText('Chart title').type('Age vs. Height');
    cy.findByLabelText('X label').type('Age');
    cy.findByLabelText('Y label').type('Height');
  
    //create buttons with + button and populate them with data as per video
    for (let i = 0; i < 4; i++) {
    cy.findByRole("button", {name: "+"}).click();
    }
  
    //Populate variables section of graph with numbers. Done in a very icky way because they're auto-generated buttons w    ith no discernable label
    //Would absolutely go better in a loop but I couldn't find a pattern in the y-value nums
    cy.get(`:nth-child(${4}) > .x-value-input`).type(1);
    cy.get(`:nth-child(${5}) > .y-value-input`).type(3);
    cy.get(`:nth-child(${6}) > .x-value-input`).type(2);
    cy.get(`:nth-child(${7}) > .y-value-input`).type(7);
    cy.get(`:nth-child(${8}) > .x-value-input`).type(3);
    cy.get(`:nth-child(${9}) > .y-value-input`).type(15);
    cy.get(`:nth-child(${10}) > .x-value-input`).type(4);
    cy.get(`:nth-child(${11}) > .y-value-input`).type(25);
    cy.get(`:nth-child(${12}) > .x-value-input`).type(5);
    cy.get(`:nth-child(${13}) > .y-value-input`).type(40);
  
    // Generates the chart and checks it exists on the scatter plot page
    cy.findByRole("button", {name: "Generate chart"}).click();
  }
  
  
  describe('Chart Generation Tests', () => {
    
    it('Generate chart', () => {
      cy.visit('/')
      setup_LineChart()
  
      cy.get('img', {name: 'chart-img'}).should('exist'); //As per finalproject.pdf I'm only asserting that we have the image
    })
  
  
    it('Check persistence of chart data on new page', () => {
      cy.visit('/')
      setup_LineChart()
  
      cy.findByText("Scatter").click()
      cy.findByRole("button", {name: "Generate chart"}).click();
  
      cy.get('img', {name: 'chart-img'}).should('exist'); //Website won't build images if there isn't data present
      cy.findByLabelText('Chart title').should('have.value', 'Cats vs. Dogs'); //These check the persistence of labels. I did not test every single x and y value because that would look messy and I don't feel like it would accomplish more
      cy.findByLabelText('X label').should('have.value', 'Cats');
      cy.findByLabelText('Y label').should('have.value', 'Dogs');
    })
  
  
    it('Check that a chart can be saved to the gallery', () => {
        cy.visit('/')
        setup_ScatterChart()
  
        cy.get('img', {name: 'chart-img'}).should('exist')
  
        // Saves the chart to gallery
        cy.findByRole("button", {name: "Save chart"}).click();
  
        // Navigates to the Gallery page
        cy.findByRole("link", {name: "Gallery"}).click();
  
        // Checks that the chart image exists on the Gallery page
        cy.get('img', {name: 'chart-img'}).should('exist'); //Website won't build images if there isn't data present 
    })
  })
