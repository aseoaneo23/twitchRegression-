export const login = {
    LOGIN_BTN : '//div[@class="Layout-sc-1xcs6mc-0 bFxzAY" and contains(text(),"Iniciar sesión")]',
    USERNAME_INPUT : '#login-username',
    PASSWORD_INPUT: '#password-input',
    POPUP_LOGIN_BTN: '//p[text()="Iniciar sesión"]',
    SUBMIT_BTN : '//div[@class="Layout-sc-1xcs6mc-0 gzKWOA" and contains(text(),"Iniciar sesión")]',
    VALID_USER: 'mykeTest',
    VALID_PASSWORD: 'Myke12_34'
}

export const main_constants = {
    HOME_URL : 'https://www.twitch.tv/',
    REJECT_COOKIES_BTN : '//div[text()="Rechazar"]',//div[@data-a-target='tw-core-button-label-text'][contains(.,'Rechazar')]
    FOLLOWING_PAGE_LINK : '[data-test-selector="top-nav__following-link"]',
    RANDOM_CHANNEL_LINK : '//*[@id="front-page-main-content"]/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/div/div[1]/div/div/article/div[2]/div[5]/a/div/div[1]/img',
    FOLLOW_BTN : '[data-test-selector="follow-button"]',
    SIGNUP_H3 : '#modal-root-header',
    SEARCH_INPUT: '//input[contains(@aria-label,"Entrada de búsqueda")]',
    CHANNEL_NAME: 'ibai',
    CHANNEL_RESULT: '(//a[@class="ScCoreLink-sc-16kq0mq-0 fPPzLm tw-link"][contains(.,"ibai")])[1]'
}