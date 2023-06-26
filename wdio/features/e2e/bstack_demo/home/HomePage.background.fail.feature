@browser
Feature: BStack Demo Home Page Basic Components Background Fail
  Description: The purpose of this feature is to test Background failures for Home Page Basic Components
  Rule: All Home Page Basic Components should be present


  Background: User is navigated to Demo Page
    Given I go to Bstack Demo Homepage
    * Download PDF
    Then Verify if PDF is downloaded properly

  Scenario Outline: Verify Browserstack Logo Details - Background Fail
    Then the logo should be visible on the page
    And the logo text should be - <logo_text>
    But the logo icon should be - <logo_icon_size>
    Examples:
    |logo_text     | logo_icon_size|
    | empty        | small         |
    | empty        | extra-small   |


  Scenario: Verify Browserstack Logo - Background Fail
    Given I go to Bstack Demo Homepage
    Then the logo should be visible on the page
