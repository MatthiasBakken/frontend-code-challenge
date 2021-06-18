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
    cy.visit( 'http://localhost:3000/' );
    const AppDiv = () => cy.get( `div[class="App"]` );
    AppDiv()
      .should( 'exist' );
    AppDiv()
      .should( 'be.visible' );
  })



//   it( 'HEADER-LOGGED-OUT: all benign elements do/dont exist', () => {
//     headerContainerDiv()
//       .should( 'exist' );
//     headerLogoH1()
//       .should( 'exist' );
//     headerLogoH1().should( ( $h1 ) => {
//       expect( $h1.get( 0 ).innerText ).to.eq( 'LOGIN' );
//     } );
//     headerLogoH1().should( ( $h1 ) => {
//       expect( $h1.get( 0 ).innerText ).to.not.eq( 'SETTINGS' );
//     } );
//     headerLogoH1().should( ( $h1 ) => {
//       expect( $h1.get( 0 ).innerText ).to.not.eq( 'PLANTS' );
//     } );
//     headerLogoH1().should( ( $h1 ) => {
//       expect( $h1.get( 0 ).innerText ).to.not.eq( 'ADD A PLANT' );
//     } );
//     headerLogoH1().should( ( $h1 ) => {
//       expect( $h1.get( 0 ).innerText ).to.not.eq( 'EDIT YOUR PLANT' );
//     } );
//     headerLogoH1().should( ( $h1 ) => {
//       expect( $h1.get( 0 ).innerText ).to.not.eq( 'CREATE ACCOUNT' );
//     } );
//     headerLogoH1().should( ( $h1 ) => {
//       expect( $h1.get( 0 ).innerText ).to.not.eq( 'HOME' );
//     } );
//     headerSettingsIcon()
//       .should( 'not.exist' );
//     headerSettingsIconLbl()
//       .should( 'not.exist' );
//     headerLogoutIconLbl()
//       .should( 'not.exist' );
//   } );
  
//   it( 'HEADER-LOGGED-OUT: all buttons and links do/dont exist', () => {
//     headerSettingsLink()
//       .should( 'exist' );
//     headerLogoutLink()
//       .should( 'not.exist' );
//   } );
  

//   /********* MENU-LOGGED-OUT *** MENU-LOGGED-OUT *** MENU-LOGGED-OUT *********/

//   // Menu: Benign elements
//   const menuContainerDiv = () => cy.get( `div[class="menu-container"]` );
//   const menuIconLabel = () => cy.get( `label[class="sidebarIconToggle"]` );
//   const menuIconDiv1 = () => cy.get( `div[class="spinner diagonal part-1"]` );
//   const menuIconDiv2 = () => cy.get( `div[class="spinner horizontal"]` );
//   const menuIconDiv3 = () => cy.get( `div[class="spinner diagonal part-2"]` );
//   const menuSidebarDiv = () => cy.get( `div[id="sidebarMenu"]` );
//   const menuSidebarInnerUl = () => cy.get( `ul[class="sidebarMenuInner"]` );
//   const menuTitleLi = () => cy.get( `li[class="menu-title"]` );
//   const menuOptionHome = () => cy.get( `li[class="menu-home"]` );
//   const menuOptionPlants = () => cy.get( `li[class="menu-plants"]` );
//   const menuOptionCreate = () => cy.get( `li[class="menu-create"]` );
//   const menuOptionSettings = () => cy.get( `li[class="menu-settings"]` );
//   const menuOptionLogout = () => cy.get( `li[class="menu-logout"]` );

//   // Menu: Buttons/Links
//   const menuOpenIcon = () => cy.get( `input[class="openSidebarMenu"]` );
//   const menuLinkHome = () => cy.get( `a[href="/home"]` );
//   const menuLinkPlants = () => cy.get( `a[href="/plants"]` );
//   const menuLinkCreate = () => cy.get( `a[href="/create-plant"]` );
//   const menuLinkSettings = () => cy.get( `a[href="/settings"]` );
//   const menuLinkLogout = () => cy.get( `li[class="menu-logout"]` );

//   it( 'MENU-LOGGED-OUT: all benign elements do/dont exist', () => {
//     menuContainerDiv()
//       .should( 'exist' );
//     menuIconLabel()
//       .should( 'exist' );
//     menuIconDiv1()
//       .should( 'exist' );
//     menuIconDiv2()
//       .should( 'exist' );
//     menuIconDiv3()
//       .should( 'exist' );
//     menuSidebarDiv()
//       .should( 'exist' );
//     menuSidebarInnerUl()
//       .should( 'exist' );
//     menuTitleLi().should( ( $li ) => {
//       expect( $li.get( 0 ).innerText ).to.eq( 'PLANTS\nMENU OPTIONS' );
//     } );
//     menuOptionHome().should( ( $li ) => {
//       expect( $li.get( 0 ).innerText ).to.eq( 'HOME' );
//     } );
//     menuOptionPlants().should( ( $li ) => {
//       expect( $li.get( 0 ).innerText ).to.eq( 'PLANTS' );
//     } );
//     menuOptionCreate().should( ( $li ) => {
//       expect( $li.get( 0 ).innerText ).to.eq( 'CREATE PLANT' );
//     } );
//     menuOptionSettings().should( ( $li ) => {
//       expect( $li.get( 0 ).innerText ).to.eq( 'SETTINGS' );
//     } );
//     menuOptionLogout().should( ( $li ) => {
//       expect( $li.get( 0 ).innerText ).to.eq( 'LOGOUT' );
//     } );
//   } );

//   it( 'MENU-LOGGED-OUT: all buttons/links do/dont exist', () => {
//     menuOpenIcon()
//       .should( 'exist' );
//     menuLinkHome()
//       .should( 'exist' );
//     menuLinkPlants()
//       .should( 'exist' );
//     menuLinkCreate()
//       .should( 'exist' );
//     menuLinkSettings()
//       .should( 'exist' );
//     menuLinkLogout()
//       .should( 'exist' );
//   } );


//   /********* LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *** LOGIN *********/

//   // Login: Benign elements
//   const loginContainerDiv = () => cy.get( `div[class="login-container"]` );
//   const loginFormContainerDiv = () => cy.get( `div[class="form-container"]` );
//   const loginForm = () => cy.get( `form[class="login_form"]` );
//   const loginUsernameLabel = () => cy.get( 'label' ).contains( `Username: ` );
//   const loginPasswordLabel = () => cy.get( 'label' ).contains( `Password: ` );
//   const loginCreateAccountDiv = () => cy.get( `div[class="create-account-link-container"]` );
//   const loginCreateAccountPar = () => cy.get( `p[class="create-account-link"]` );
//   const loginCreateAccountSpan = () => cy.get( `span[class="click_here"]` );
//   const loginErrorDivs = () => cy.get( `div[class="error-div"]` );

//   // Login: inputs
//   const loginUsernameInput = () => cy.get( `input[name="username"]` );
//   const loginPasswordInput = () => cy.get( `input[name="password"]` );

//   // Login: Buttons/Links
//   const loginSubmitButton = () => cy.get( `button[class="login_button"]` );
//   const loginCreateAccountLink = () => cy.get( `a[href="/signup"]` );

//   it( 'LOGIN: all benign elements do/dont exist (error elements checked during input tests)', () => {
//     loginContainerDiv()
//       .should( 'exist' );
//     loginFormContainerDiv()
//       .should( 'exist' );
//     loginForm()
//       .should( 'exist' );
//     loginUsernameLabel()
//       .should( 'exist' );
//     loginPasswordLabel()
//       .should( 'exist' );
//     loginCreateAccountDiv()
//       .should( 'exist' );
//     loginCreateAccountPar()
//       .should( 'exist' );
//     loginErrorDivs()
//       .should( 'not.exist' );
//     loginCreateAccountSpan()
//       .should( 'exist' );
//   } );

//   it( 'LOGIN: all inputs, buttons and links do/dont exist', () => {
//     loginUsernameInput()
//       .should( 'exist' );
//     loginPasswordInput()
//       .should( 'exist' );
//     loginSubmitButton()
//       .should( 'exist' );
//     loginSubmitButton()
//       .should( 'be.disabled' );
//     loginCreateAccountLink()
//       .should( 'exist' );
//   } );
// } );

// describe( 'WATER MY PLANTS: CREATE ACCOUNT', () => {
//   beforeEach( () => {
//     cy.visit( 'http://localhost:3000/' );

//     const loginCreateAccountSpan = () => cy.get( `span[class="click_here"]` );
//     loginCreateAccountSpan().click();
//   } );

//   /********* CREATE-ACCOUNT *** CREATE-ACCOUNT *** CREATE-ACCOUNT *********/
  
//   // Create: Benign elements
//   const createContainerDiv = () => cy.get( `div[class="create-container"]` );
//   const createFormContDiv = () => cy.get( `div[class="form-container"]` );
//   const createSignupForm = () => cy.get( `form[class="signup_form"]` );
//   const createUsernameLabel = () => cy.get( `label` ).contains( 'Username: ' );
//   const createPhoneNumberLabel = () => cy.get( `label` ).contains( 'Phone Number: ' );
//   const createPasswordLabel = () => cy.get( `label` ).contains( 'Password: ' );
//   const createButtonContSpan = () => cy.get( `span[class="button-container"]` );

//   // Create: Inputs
//   const createUsernameInput = () => cy.get( `input[name="username"]` );
//   const createPhoneNumberInput = () => cy.get( `input[name="phoneNumber"]` );
//   const createPasswordInput = () => cy.get( `input[name="password"]` );

//   // Create: Buttons/Links
//   const createSignupButton = () => cy.get( `button[class="signup_button"]` );

//   it( `CREATE: all benign elements do/dont exist`, () => {
//     createContainerDiv()
//       .should( 'not.exist' );
//     createFormContDiv()
//       .should( 'exist' );
//     createSignupForm()
//       .should( 'exist' );
//     createUsernameLabel()
//       .should( 'exist' );
//     createPhoneNumberLabel()
//       .should( 'exist' );
//     createPasswordLabel()
//       .should( 'exist' );
//     createButtonContSpan()
//       .should( 'exist' );
//   } );

//   it( `CREATE: all inputs, buttons and links do/dont exist`, () => {
//     createUsernameInput()
//       .should( 'exist' );
//     createPhoneNumberInput()
//       .should( 'exist' );
//     createPasswordInput()
//       .should( 'exist' );
//     createSignupButton()
//       .should( 'exist' );
//   })

//   it( `CREATE: create a new user account`, () => {
//     createUsernameInput()
//       .type( `${createName}`, { delay: 50 } );
//     createPhoneNumberInput()
//       .type( `${createNumber}`, { delay: 50 } );
//     createPasswordInput()
//       .type( `${createPassword}`, { delay: 50 } );
//     createSignupButton()
//       .click();
//     cy.wait( 4000 );
//   } );
// } );


// /********* CREATE-ACCOUNT-HOME *** CREATE-ACCOUNT-HOME *** CREATE-ACCOUNT-HOME *** CREATE-ACCOUNT-HOME *********/

// describe( 'WATER MY PLANTS: ACCOUNT CREATED - HOME', () => {
//   beforeEach( () => {
//   } );

//   // HOME: Benign elements
//   const homePageContainerDiv = () => cy.get( `div[class="container"]` );
//   const homePageTitleH1 = () => cy.get( `h1[testid="home-title"]` );
//   const homeContentContainerDiv = () => cy.get( `div[testid="home-container"]` );
//   const homeLoginWithMessageDiv = () => cy.get( `div[testid="login-with-message"]` );
//   const homeLoginWithoutMsgDiv = () => cy.get( `div[testid="login-without-message"]` );
//   const homeLoginMessagePar = () => cy.get( `p[testid="login-message"]` );
//   const homeGetStartedMessagePar = () => cy.get( `p[testid="get-started-message"]` );
//   const homeImageContainerDiv = () => cy.get( `div[class="plant-img-container"]` );
//   const homeImageImg = () => cy.get( `img[alt="plant_picture"]` );

//   // HOME: Buttons/Links
//   const homeCreatePlantLinkAnchor = () => cy.get( `a[testid="create-plant-link"]` );

//   // HOME: Other buttons/links for testing needs
//   const headerLogoutIcon = () => cy.get( `svg[class="log-icon"]` );

//   it( `HOME: benign elements do/dont exist`, () => {
//     cy.wait( 2000 );
//     homePageContainerDiv()
//       .should( 'exist' );
//     homePageTitleH1()
//       .should( 'exist' );
//     homePageTitleH1()
//       .contains( "Water My Plants" );
//     homeContentContainerDiv()
//       .should( 'exist' );
//     homeLoginWithMessageDiv()
//       .should( 'not.exist' );
//     homeLoginWithoutMsgDiv()
//       .should( 'exist' );
//     homeLoginMessagePar()
//       .should( 'not.exist' );
//     homeGetStartedMessagePar()
//       .should( 'exist' );
//     homeGetStartedMessagePar()
//       .contains( 'Get started by creating a plant' );
//     homeImageContainerDiv()
//       .should( 'exist' );
//     homeImageImg()
//       .should( 'exist' );
//   } );

//   it( `HOME: links do/dont exist`, () => {
//     homeCreatePlantLinkAnchor()
//       .should( 'exist' );
//     homeCreatePlantLinkAnchor()
//       .contains( 'creating a plant' );
//   } );

//   it( `HOME: logout`, () => {
//     headerLogoutIcon()
//       .click();
//     cy.wait( 2000 );
//   } );
// } );


// /********* LOGGING-IN-HOME *** LOGGING-IN-HOME *** LOGGING-IN-HOME *** LOGGING-IN-HOME *********/

// describe( 'WATER MY PLANTS: LOGGING IN - HOME', () => {
//   beforeEach( () => {
//   } );

//   // HOME: Benign elements
//   const homePageContainerDiv = () => cy.get( `div[class="container"]` );
//   const homePageTitleH1 = () => cy.get( `h1[testid="home-title"]` );
//   const homeContentContainerDiv = () => cy.get( `div[testid="home-container"]` );
//   const homeLoginWithMessageDiv = () => cy.get( `div[testid="login-with-message"]` );
//   const homeLoginWithoutMsgDiv = () => cy.get( `div[testid="login-without-message"]` );
//   const homeLoginMessagePar = () => cy.get( `p[testid="login-message"]` );
//   const homeGetStartedMessagePar = () => cy.get( `p[testid="get-started-message"]` );
//   const homeImageContainerDiv = () => cy.get( `div[class="plant-img-container"]` );
//   const homeImageImg = () => cy.get( `img[alt="plant_picture"]` );

//   // HOME: Buttons/Links
//   const homeCreatePlantLinkAnchor = () => cy.get( `a[testid="create-plant-link"]` );

//   it( `HOME: logging in`, () => {
//     const loginUsernameInput = () => cy.get( `input[name="username"]` );
//     loginUsernameInput()
//       .type( `${createName}`, { delay: 50 } );
//     const loginPasswordInput = () => cy.get( `input[name="password"]` );
//     loginPasswordInput()
//       .type( `${createPassword}`, { delay: 50 } );
//     const loginSubmitButton = () => cy.get( `button[class="login_button"]` );
//     loginSubmitButton()
//       .click();
//     cy.wait( 3000 );
//   })

//   it( `HOME: benign elements do/dont exist`, () => {
//     cy.wait( 2000 );
//     homePageContainerDiv()
//       .should( 'exist' );
//     homePageTitleH1()
//       .should( 'exist' );
//     homePageTitleH1()
//       .contains( "Water My Plants" );
//     homeContentContainerDiv()
//       .should( 'exist' );
//     homeLoginWithMessageDiv()
//       .should( 'exist' );
//     homeLoginWithoutMsgDiv()
//       .should( 'not.exist' );
//     homeLoginMessagePar()
//       .should( 'exist' );
//     homeGetStartedMessagePar()
//       .should( 'not.exist' );
//     homeImageContainerDiv()
//       .should( 'exist' );
//     homeImageImg()
//       .should( 'exist' );
//   } );

//   it( `HOME: links do/dont exist`, () => {
//     homeCreatePlantLinkAnchor()
//       .should( 'not.exist' );
//   })
// })


// /********* SETTINGS *** SETTINGS *** SETTINGS *** SETTINGS *** SETTINGS *** SETTINGS *********/

// describe( 'WATER MY PLANTS: SETTINGS', () => {
//   beforeEach( () => {
//   } );

//   it( `SETTINGS: clicks into settings from HOME`, () => {
//     const settingsIcon = () => cy.get( `svg[class="set-icon"]` );
//     settingsIcon()
//       .click();
//     cy.wait( 1000 );
//   } );

//   // SETTINGS: Benign elements
//   const settingsContentContainerDiv = () => cy.get( `div[class="settings-container"]` );
//   const settingsFormsContainerDiv = () => cy.get( `div[class="settings-forms-container"]` );
//   const settingsFormsForm1 = () => cy.get( `form[testid="form1"]` );
//   const settingsFormsForm2 = () => cy.get( `form[testid="form2"]` );
//   const settingsPasswordLabel = () => cy.get( `label[class="update_pass"]` );
//   const settingsPhoneNumberLabel = () => cy.get( `label[class="update_phone"]` );
//   const settingsPasswordErrorDiv = () => cy.get( `div[testid="error-div-password"]` );
//   const settingsPhoneNumErrorDiv = () => cy.get( `div[testid="error-div-phoneNumber"]` );
//   const settingsPasswordSpan = () => cy.get( `span[testid="settings-password-span"]` );
//   const settingsPhoneNumSpan = () => cy.get( `span[testid="settings-phoneNumber-span"]` );

//   // SETTINGS: Inputs
//   const settingsPasswordInput = () => cy.get( `input[name="password"]` );
//   const settingsPhoneNumberInput = () => cy.get( `input[name="phoneNumber"]` );

//   // SETTINGS: Buttons/Links
//   const settingsPassSubBtn = () => cy.get( `button[testid="settings-password-submit"]` );
//   const settingsPhnNumSubBtn = () => cy.get( `button[testid="settings-phoneNumber-submit"]` );

//   it( `SETTINGS: benign elements do/dont exist`, () => {
//     settingsContentContainerDiv()
//       .should( 'exist' );
//     settingsFormsContainerDiv()
//       .should( 'exist' );
//     settingsFormsForm1()
//       .should( 'exist' );
//     settingsFormsForm2()
//       .should( 'exist' );
//     settingsPasswordLabel()
//       .should( 'exist' );
//     settingsPasswordLabel()
//       .contains( 'Update Password' );
//     settingsPhoneNumberLabel()
//       .should( 'exist' );
//     settingsPhoneNumberLabel()
//       .contains( 'Update Phone Number' );
//     settingsPasswordErrorDiv()
//       .should( 'not.exist' );
//     settingsPasswordInput()
//       .focus()
//       .blur();
//     settingsPasswordErrorDiv()
//       .should( 'exist' );
//     settingsPasswordErrorDiv()
//       .contains( 'Some value is required to update your password' );
//     settingsPhoneNumErrorDiv()
//       .should( 'not.exist' );
//     settingsPhoneNumberInput()
//       .focus()
//       .blur();
//     settingsPhoneNumErrorDiv()
//       .contains( 'Must enter a valid number if you plan to update' );
//     settingsPasswordSpan()
//       .should( 'exist' );
//     settingsPhoneNumSpan()
//       .should( 'exist' );
//   } );

//   it( `SETTINGS: inputs and buttons/links do/dont exist`, () => {
//     settingsPasswordInput()
//       .should( 'exist' );
//     settingsPhoneNumberInput()
//       .should( 'exist' );
//     settingsPassSubBtn()
//       .should( 'exist' );
//     settingsPhnNumSubBtn()
//       .should( 'exist' );
//   } );

//   it( `SETTINGS: change phone number & password`, () => {
//     settingsPasswordInput()
//       .type( `${faker.hacker.adjective()}${faker.hacker.noun()}`, { delay: 50 } );
//     settingsPassSubBtn()
//       .click();
//     cy.wait( 1000 );
//     settingsPhoneNumberInput()
//       .type( `${faker.phone.phoneNumber( '###-###-####' )}`, { delay: 50 } );
//     settingsPhnNumSubBtn()
//       .click();
//     cy.wait( 1000 );
//   } );

//   it( `SETTINGS: clicks menu icon and routes to create plant`, () => {
//     const menuIconLabel = () => cy.get( `label[class="sidebarIconToggle"]` );
//     menuIconLabel()
//       .click();
//     cy.wait( 2000 );
//     const menuCreatePlantLi = () => cy.get( `li[class="menu-create"]` );
//     menuCreatePlantLi()
//       .click();
//     cy.wait( 2000 );
//     menuIconLabel()
//       .click();
//   } );
// } );


// /********* CREATE-PLANT *** CREATE-PLANT *** CREATE-PLANT *** CREATE-PLANT *** CREATE-PLANT *** CREATE-PLANT *********/

// describe( 'WATER MY PLANTS: CREATE PLANT', () => {
//   beforeEach( () => {
//   } );

//   // CREATE-PLANT: Benign elements
//   const createContainerDiv = () => cy.get( `div[testid="create-container"]` );
//   const createForm = () => cy.get( `form[class="add_plant_form"]` );
//   const createTitleH2 = () => cy.get( `h2[testid="create-title"]` );
  

//   // CREATE-PLANT: Inputs
//   const createNicknameInput = () => cy.get( `input[name="nickname"]` );
//   const createSpeciesInput = () => cy.get( `input[name="species"]` );
//   const createH2oFreqInput = () => cy.get( `input[name="h2o_frequency"]` );
//   const createImageInput = () => cy.get( `input[name="image"]` );

//   // CREATE-PLANT: Buttons/Links
//   const createSubmitBtn = () => cy.get( `button[class="add_plant_button"]` );

//   it( `CREATE: benign elements do/dont exist`, () => {
//     createContainerDiv()
//       .should( 'exist' );
//     createForm()
//       .should( 'exist' );
//     createTitleH2()
//       .should( 'exist' );
//   } );

//   it( `CREATE: inputs and buttons/links do/dont exist`, () => {
//     createNicknameInput()
//       .should( 'exist' );
//     createSpeciesInput()
//       .should( 'exist' );
//     createH2oFreqInput()
//       .should( 'exist' );
//     createImageInput()
//       .should( 'exist' );
//     createSubmitBtn()
//       .should( 'exist' );
//     createSubmitBtn()
//       .should( 'be.disabled' );
//   } );
  
//   it( `CREATE: create a new plant`, () => {
//     createNicknameInput()
//       .type( `${faker.hacker.adjective()} ${faker.hacker.noun()}`, { delay: 50 } );
//     createSpeciesInput()
//       .type( `${faker.lorem.word()} ${faker.lorem.word()}`, { delay: 50 } );
//     createH2oFreqInput()
//       .type( 2, { delay: 50 } );
//     createImageInput()
//       .type( `https://picsum.photos/500/500`, { delay: 50 } );
//     createSubmitBtn()
//       .should( 'be.enabled' );
//     createSubmitBtn()
//       .click();
//   } );

//   it( `CREATE: logs out, logs in and routes to plants`, () => {
//     const headerLogoutIcon = () => cy.get( `svg[class="log-icon"]` );
//     headerLogoutIcon()
//       .click();
//     cy.visit( 'http://localhost:3000/login' );
//     const loginUsernameInput = () => cy.get( `input[name="username"]` );
//     loginUsernameInput()
//       .type( `lksdfjssdesfs`, { delay: 50 } );
//     const loginPasswordInput = () => cy.get( `input[name="password"]` );
//     loginPasswordInput()
//       .type( `sldfk244dswE`, { delay: 50 } );
//     const loginSubmitButton = () => cy.get( `button[class="login_button"]` );
//     loginSubmitButton()
//       .click();
//     cy.wait( 2000 );
//     const menuOpenIconLabel = () => cy.get( `label[class="sidebarIconToggle"]` );
//     const menuLinkPlants = () => cy.get( `a[href="/plants"]` );
//     cy.wait( 2000 );
//     menuOpenIconLabel()
//       .click();
//     cy.wait( 1000 );
//     menuLinkPlants()
//       .click();
//     cy.wait( 4000 );
//   } );
// } );


// /********* PLANTS *** PLANTS *** PLANTS *** PLANTS *** PLANTS *** PLANTS *********/

// describe( 'WATER MY PLANTS: PLANTS', () => {
//   beforeEach( () => {
//   } );

//   // PLANTS: Benign elements
//   const plantsContainerDiv = () => cy.get( `div[class="plants-container"]` );
//   const plantsContentDiv = () => cy.get( `div[class="plants"]` );
//   const plantsWrapperDiv = () => cy.get( `div[class="plants-wrapper"]` );
//   const plantsBoxDiv = () => cy.get( `div[class="plant_box"]` );
//   const plantsPlantDiv = () => cy.get( `div[class="myplant"]` );
//   const plantsImageImg = () => cy.get( `img[testid="plant-img"]` );
//   const plantsDataDiv = () => cy.get( `div[class="plant_data"]` );
//   const plantsDataContainerDiv = () => cy.get( `div[testid="plant-data-container"]` );
//   const plantsNicknameSpan = () => cy.get( `span[class="nickname"]` );
//   const plantsNicknameLabel = () => cy.get( `label[testid="plant-nickname-label"]` );
//   const plantsNicknamePar = () => cy.get( `p[testid="plant-nickname-par"]` );
//   const plantsSpeciesSpan = () => cy.get( `span[class="species"]` );
//   const plantsSpeciesLabel = () => cy.get( `label[testid="plant-species-label"]` );
//   const plantsSpeciesPar = () => cy.get( `p[testid="plant-species-par"]` );
//   const plantsH2oSpan = () => cy.get( `span[class="h2o-frequency"]` );
//   const plantsH2oLabel = () => cy.get( `label[testid="plant-h2o-label"]` );
//   const plantsH2oPar = () => cy.get( `p[testid="plant-h2o-par"]` );
//   const plantsBtnsContDiv = () => cy.get( `div[class="edit_delete_buttons"]` );


//   // PLANTS: Buttons/Links
//   const plantsImgLink = () => cy.get( `a[testid="plant-img-link"]` );
//   const plantsEditBtn = () => cy.get( `button[testid="plant-edit-button"]` );
//   const plantsDeleteBtn = () => cy.get( `button[testid="plant-delete-button"]` );
//   const plantsEditLinkAnchor = () => cy.get( `a[testid="plant-edit-link"]` );

//   it( `PLANTS: Benign elements do/dont exist`, () => {
//     plantsContainerDiv()
//       .should( 'exist' );
//     plantsContentDiv()
//       .should( 'exist' );
//     plantsWrapperDiv()
//       .should( 'exist' );
//     plantsBoxDiv()
//       .should( 'exist' );
//     plantsPlantDiv()
//       .should( 'exist' );
//     plantsImageImg()
//       .should( 'exist' );
//     plantsDataDiv()
//       .should( 'exist' );
//     plantsDataContainerDiv()
//       .should( 'exist' );
//     plantsNicknameSpan()
//       .should( 'exist' );
//     plantsNicknameLabel()
//       .should( 'exist' );
//     plantsNicknamePar()
//       .should( 'exist' );
//     plantsSpeciesSpan()
//       .should( 'exist' );
//     plantsSpeciesLabel()
//       .should( 'exist' );
//     plantsSpeciesPar()
//       .should( 'exist' );
//     plantsH2oSpan()
//       .should( 'exist' );
//     plantsH2oLabel()
//       .should( 'exist' );
//     plantsH2oPar()
//       .should( 'exist' );
//     plantsBtnsContDiv()
//       .should( 'exist' );
//   } );

//   it( `PLANTS: Buttons/Links do/dont exist`, () => {
//     plantsImgLink()
//       .should( 'exist' );
//     plantsEditBtn()
//       .should( 'exist' );
//     plantsEditBtn()
//       .should( 'be.enabled' );
//     plantsEditBtn()
//       .contains( 'Edit' );
//     plantsDeleteBtn()
//       .should( 'exist' );
//     plantsDeleteBtn()
//       .should( 'be.enabled' );
//     plantsDeleteBtn()
//       .contains( 'Delete' );
//     plantsEditLinkAnchor()
//       .should( 'exist' );
//   } );

//   it( `PLANTS: logout, login, route to plants and click plant`, () => {
//     localStorage.clear();
//     cy.visit( 'http://localhost:3000/' );
//     const loginUsernameInput = () => cy.get( `input[name="username"]` );
//     loginUsernameInput()
//       .type( `lksdfjssdesfs`, { delay: 50 } );
//     const loginPasswordInput = () => cy.get( `input[name="password"]` );
//     loginPasswordInput()
//       .type( `sldfk244dswE`, { delay: 50 } );
//     const loginSubmitButton = () => cy.get( `button[class="login_button"]` );
//     loginSubmitButton()
//       .click();
//     cy.wait( 2000 );
//     const menuOpenIconLabel = () => cy.get( `label[class="sidebarIconToggle"]` );
//     const menuLinkPlants = () => cy.get( `a[href="/plants"]` );
//     cy.wait( 2000 );
//     menuOpenIconLabel()
//       .click();
//     cy.wait( 1000 );
//     menuLinkPlants()
//       .click();
//     cy.wait( 3000 );
//     const plantImageImg = () => cy.get( `img[testid="plant-img"]` );
//     plantImageImg()
//       .first()
//       .click();
//     cy.wait( 2000 );
//   } );
// } );


// /********* PLANT-PAGE *** PLANT-PAGE *** PLANT-PAGE *** PLANT-PAGE *** PLANT-PAGE *** PLANT-PAGE *********/

// describe( `WATER MY PLANTS: PLANT-PAGE`, () => {
//   beforeEach( () => {
//   } );
  
//   // PLANT-PAGE: Benign elements
//   const plantPageContainerDiv = () => cy.get( `div[class="plant-page-container"]` );
//   const plantBoxDiv = () => cy.get( `div[class="plant_box"]` );
//   const plantDiv = () => cy.get( `div[class="myplant"]` );
//   const plantImageContDiv = () => cy.get( `div[testid="plant-img-container"]` );
//   const plantImageImg = () => cy.get( `img[testid="plant-image"]` );
//   const plantDataDiv = () => cy.get( `div[testid="plant-data"]` );
//   const plantNicknameSpan = () => cy.get( `span[testid="plant-nickname-span"]` );
//   const plantNicknameLabel = () => cy.get( `label[testid="plant-nickname-label"]` );
//   const plantNicknamePar = () => cy.get( `p[testid="plant-nickname-par"]` );
//   const plantSpeciesSpan = () => cy.get( `span[testid="plant-species-span"]` );
//   const plantSpeciesLabel = () => cy.get( `label[testid="plant-species-label"]` );
//   const plantSpeciesPar = () => cy.get( `p[testid="plant-species-par"]` );
//   const plantH2oSpan = () => cy.get( `span[testid="plant-h2o-span"]` );
//   const planth2oLabel = () => cy.get( `label[testid="plant-h2o-label"]` );
//   const planth2oPar = () => cy.get( `p[testid="plant-h2o-par"]` );
//   const plantBtnsContDiv = () => cy.get( `div[testid="plant-btns-container"]` );

//   // PLANT-PAGE: Buttons/Links
//   const plantEditBtnAnchor = () => cy.get( `a[testid="plant-edit-btn-link"]` );
//   const plantEditButton = () => cy.get( `button[testid="plant-edit-btn"]` );
//   const plantDeleteBtn = () => cy.get( `button[testid="plant-delete-btn"]` );

//   it( `PLANT-PAGE: Benign elements do/dont exist`, () => {
//     plantPageContainerDiv()
//       .should( 'exist' );
//     plantBoxDiv()
//       .should( 'exist' );
//     plantDiv()
//       .should( 'exist' );
//     plantImageContDiv()
//       .should( 'exist' );
//     plantImageImg()
//       .should( 'exist' );
//     plantDataDiv()
//       .should( 'exist' );
//     plantNicknameSpan()
//       .should( 'exist' );
//     plantNicknameLabel()
//       .should( 'exist' );
//     plantNicknameLabel()
//       .contains( 'Nickname: ' );
//     plantNicknamePar()
//       .should( 'exist' );
//     plantSpeciesSpan()
//       .should( 'exist' );
//     plantSpeciesLabel()
//       .should( 'exist' );
//     plantSpeciesLabel()
//       .contains( 'Species: ' );
//     plantSpeciesPar()
//       .should( 'exist' );
//     plantH2oSpan()
//       .should( 'exist' );
//     planth2oLabel()
//       .should( 'exist' );
//     planth2oLabel()
//       .contains('H2o Frequency: ')
//     planth2oPar()
//       .should( 'exist' );
//     plantBtnsContDiv()
//       .should( 'exist' );
//   } );

//   it( `PLANT-PAGE: Buttons/Links do/dont exist`, () => {
//     plantEditBtnAnchor()
//       .should( 'exist' );
//     plantEditButton()
//       .should( 'exist' );
//     plantEditButton()
//       .contains( 'Edit' );
//     plantDeleteBtn()
//       .should( 'exist' );
//     plantDeleteBtn()
//       .contains( 'Delete' );
//   } );

//   it( `PLANTS: logout, login, route to plants and click plant`, () => {
//     localStorage.clear();
//     cy.visit( 'http://localhost:3000/' );
//     const loginUsernameInput = () => cy.get( `input[name="username"]` );
//     loginUsernameInput()
//       .type( `lksdfjssdesfs`, { delay: 50 } );
//     const loginPasswordInput = () => cy.get( `input[name="password"]` );
//     loginPasswordInput()
//       .type( `sldfk244dswE`, { delay: 50 } );
//     const loginSubmitButton = () => cy.get( `button[class="login_button"]` );
//     loginSubmitButton()
//       .click();
//     cy.wait( 2000 );
//     const menuOpenIconLabel = () => cy.get( `label[class="sidebarIconToggle"]` );
//     const menuLinkPlants = () => cy.get( `a[href="/plants"]` );
//     cy.wait( 2000 );
//     menuOpenIconLabel()
//       .click();
//     cy.wait( 1000 );
//     menuLinkPlants()
//       .click();
//     cy.wait( 3000 );
//     const plantImageImg = () => cy.get( `img[testid="plant-img"]` );
//     plantImageImg()
//       .first()
//       .click();
//     cy.wait( 2000 );
//     plantEditButton()
//       .click();
//   } );
// } );


// /********* EDIT-PLANT *** EDIT-PLANT *** EDIT-PLANT *** EDIT-PLANT *** EDIT-PLANT *** EDIT-PLANT *********/

// describe( `WATER MY PLANTS: EDIT-PLANT`, () => {
//   beforeEach( () => {
//     cy.wait( 3000 );
//   } );

//   // EDIT-PLANT: Benign elements
//   const editPlantContDiv = () => cy.get( `div[class="edit-plant-container"]` );
//   const editPlantForm = () => cy.get( `form[testid="edit-plant-form"]` );
//   const editPlantTitleH2 = () => cy.get( `h2[testid="edit-plant-title"]` );

//   // EDIT-PLANT: Inputs
//   const editNicknameInput = () => cy.get( `input[name="nickname"]` );
//   const editSpeciesInput = () => cy.get( `input[name="species"]` );
//   const editH2oInput = () => cy.get( `input[name="h2o_frequency"]` );
//   const editImageImg = () => cy.get( `img[name="image"]` );

//   // EDIT-PLANT: Buttons/Links
//   const editPlantSubBtn = () => cy.get( `button[testid="edit-plant-submit"]` );

//   it( `EDIT-PLANT: check if elements exist and fill and submit edited plant`, () => {
//     editPlantContDiv()
//       .should( 'exist' );
//     editPlantForm()
//       .should( 'exist' );
//     editPlantTitleH2()
//       .should( 'exist' );
//     editPlantTitleH2()
//       .contains( 'Edit Your Plant' );
//     editNicknameInput()
//       .clear();
//     editNicknameInput()
//       .type( `${faker.hacker.adjective()} ${faker.hacker.noun()}`, { delay: 50 } );
//     editSpeciesInput()
//       .clear();
//     editSpeciesInput()
//       .type( `${faker.lorem.word()} ${faker.lorem.word()}`, { delay: 50 } );
//     editH2oInput()
//       .clear();
//     editH2oInput()
//       .type( 2, { delay: 50 } );
//     editImageImg()
//       .should( 'exist' );
//     editPlantSubBtn()
//       .click();
//   } );
} );