import main_page from '../../pages/main_page'

Given('a user on twitch page', () => {
    main_page.visitTwitch()
})

Given('non registered user on home page', () => {
    main_page.checkHomePage()
    main_page.clickOnAChannel()
})

Given('a registered user on home page', () => {
    main_page.checkHomePage()
    main_page.loginOnTwitch()
    main_page.clickOnAChannel()
})

Given('non registered user on a search result page', () => {
    main_page.searchChannel()
})

When('the user tries to follow a channel', () => {
    main_page.followAChannel()
})


Then('the login popup is shown at screen', () => {
    main_page.checkSignUpPopUp()
})



