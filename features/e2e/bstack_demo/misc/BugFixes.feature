@browser
Feature: BStack Bug Fixes
  Description: The purpose of this feature is to test Bug fixes

  Scenario: Verify Element Displayed - Dashboard breaking text logs case
    When I go to Bstack Demo Homepage
    Then the logo should be displayed on the page
