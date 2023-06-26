Feature: BStack Logging Components
  Description: The purpose of this feature is to test All Logging

@browser
  Scenario: Verify Logging - Browserstack Logo Text - Fail
    When I go to Bstack Demo Homepage
    Then the logo should be visible on the page
    And Verify all SignInPage UI logging - 000
    And the logo text should be - logo

@browser
 Scenario Outline: Verify Logging - Browserstack Logo Text
    Given I go to Bstack Demo Homepage
    Then the logo should be visible on the page
    And Verify all SignInPage UI logging - <count>

    Examples:
    |count|
    |1|

  Scenario Outline: Verify API Loging Count
    Given Retrieve User credentials via service
    And Verify all API logging - <count>

    Examples:
    |count|
    |1|
