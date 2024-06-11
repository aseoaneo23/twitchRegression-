Feature: content creator follows

As a user
I want to search about a content creator
So that I can follow him

Background: 
    Given a user on twitch page

Scenario: non registerd user can't follow from home page
    Given non registered user on home page
    When the user tries to follow a channel
    Then the login popup is shown at screen

Scenario: non registered user can't follow from search
    Given non registered user on a search result page
    When the user tries to follow a channel
    Then the login popup is shown at screen
