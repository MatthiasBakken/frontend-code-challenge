// write tests here
import faker from 'faker';


const createPrice = faker.commerce.price(undefined, 499);
const createAmount = faker.finance.amount(undefined, 100);

describe( 'Frontend Challenge', () => {
  beforeEach( () => {
  } );
  
  it( 'sanity checks', () => {
    cy.visit( 'http://localhost:3000/' );
    localStorage.clear();
    expect( 10 ).to.equal( 10 );
    expect( 1 + 2 ).to.equal( 3 );
    expect( {} ).to.eql( {} );
    expect( 1 + 2 ).to.equal( 4 - 1 );
  } );

  /********* APP Renders without errors *** APP Renders without errors *** APP Renders without errors *********/

  it( 'App renders without errors', () => {
    const AppDiv = () => cy.get( `div[class="App"]` );
    AppDiv()
      .should( 'exist' );
    AppDiv()
      .should( 'be.visible' );
  } );


  /********* Form Renders and Functions Correctly *** Form Renders and Functions Correctly *********/
  
  // Form: Benign elements
  const formContainerDiv = () => cy.get( `div[class="form__container"]` );
  const form = () => cy.get( `form[class="form__form"]` );

  // Form: inputs
  const buyOrSellSelector = () => cy.get( `select[name="side"]` );
  const buyOption = () => cy.get( `option[value="buy"]` );
  const sellOption = () => cy.get( `option[value="sell"]` );
  const priceInput = () => cy.get( `input[name="price"]` );
  const amountInput = () => cy.get( `input[name="amount"]` );

  // Form: Buttons/Links
  const formSubmitButton = () => cy.get( `button[class="form__button"]` );
  
  it( 'Form: all benign elements do/dont exist', () => {
    formContainerDiv()
      .should( 'exist' );
    form()
      .should( 'exist' );
  } );

  it( 'Form: all inputs, buttons and links do/dont exist', () => {
    buyOrSellSelector()
      .should( 'exist' );
    buyOption()
      .should( 'exist' );
    sellOption()
      .should( 'exist' );
    priceInput()
      .should( 'exist' );
    amountInput()
      .should( 'exist' );
    formSubmitButton()
      .should( 'exist' );
    formSubmitButton()
      .should( 'be.disabled' );
  } );
  
  it( `Form: Select Sell, Enter Price & Amount and Submit`, () => {
    buyOrSellSelector()
      .select( "sell" );
    priceInput()
      .type( `${createPrice}`, { delay: 50 } );
    amountInput()
      .type( `${createAmount}`, { delay: 50 } );
    formSubmitButton()
      .click();
  } );

} );