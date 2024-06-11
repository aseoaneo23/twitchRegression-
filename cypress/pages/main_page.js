import { main_constants, login } from "../constants";
import xpath from 'cypress-xpath'

class MainPage {
    properties = {
        getRejectCoockiesButton: () => cy.xpath(main_constants.REJECT_COOKIES_BTN),
        getChannel: () => cy.xpath(main_constants.RANDOM_CHANNEL_LINK).first(),
        getFollowButton: () => cy.get(main_constants.FOLLOW_BTN),
        getSignUpHeader: () => cy.get(main_constants.SIGNUP_H3),
        getSearchBar: () => cy.xpath(main_constants.SEARCH_INPUT),
        getSearchBtn: () => cy.xpath(main_constants.SEARCH_BTN),
        getChannelResult: () => cy.xpath(main_constants.CHANNEL_RESULT),
        getLoginBtn: () => cy.get('.cQZlhV > :nth-child(1) > .ScCoreButton-sc-ocjdkq-0'),
        getUsernameInput: () => cy.get(login.USERNAME_INPUT),
        getPasswordInput: () => cy.get(login.PASSWORD_INPUT),
        getSubmitButton: () => cy.xpath(login.SUBMIT_BTN),
        validUsername : login.VALID_USER,
        validPassword : login.VALID_PASSWORD, 
    }

    visitTwitch = () => {
        cy.visit('/')
        this.properties.getRejectCoockiesButton().click()
    }

    checkHomePage = () => cy.url().should('eq', main_constants.HOME_URL)

    clickOnAChannel = () => {
        this.properties.getChannel().click()
        cy.wait(3000)
    }

    followAChannel = () => {
        this.properties.getFollowButton().scrollIntoView().click()
    }

    loginOnTwitch = () => {
        this.properties.getLoginBtn().click()
        this.properties.getUsernameInput().type(this.properties.validUsername)
        this.properties.getPasswordInput().type(this.properties.validPassword)
        this.properties.getSubmitButton().click()
    }

    searchChannel = () => {
        this.properties.getSearchBar().type(main_constants.CHANNEL_NAME + '{enter}')
        this.properties.getChannelResult().click()
        cy.url().should('eq', main_constants.HOME_URL + main_constants.CHANNEL_NAME)
        cy.wait(3000)
    }

    checkSignUpPopUp = () => this.properties.getSignUpHeader().should('be.visible', { timeout: 10000 })
}

module.exports = new MainPage()