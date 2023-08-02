@browser
Feature: BStack Demo Home Page Basic Components
  Description: The purpose of this feature is to test Home Page Basic Components

  @p1
  Scenario: Verify Browserstack Logo
    Given I go to Bstack Demo Homepage
    Then the logo should be visible on the page

  Scenario: Verify Browserstack Logo Text
    Given I go to Bstack Demo Homepage
    Then the logo should be visible on the page
    And the logo text should be - value

  Scenario: Verify Browserstack Logo Text - Fail
    When I go to Bstack Demo Homepage
    Then the logo should be visible on the page
    And the logo text should be - logo

  @p1
  Scenario: Verify Sign In Button
    Given I go to Bstack Demo Homepage
    Then the sign in should be visible on the page

  Scenario: Verify Sign In Button Text
    When I go to Bstack Demo Homepage
    Then the sign in should be visible on the page
    And the sign in button text should be - Sign In

  Scenario: Verify Sign In Button Text - Fail
    Given I go to Bstack Demo Homepage
    Then the sign in should be visible on the page
    But the sign in button text should be - Log In

  Scenario: Verify Search Result
    Given I go to Bstack Demo Homepage
    Then the search result description should be visible on the page

  Scenario: Verify Search Result Description
    Given I go to Bstack Demo Homepage
    Then the search result description should be visible on the page
    And the search result description text should be - 25 Product(s) found.

  Scenario: Verify Search Result Description - Fail
    When I go to Bstack Demo Homepage
    Then the search result description should be visible on the page
    And the search result description text should be - 25 Product found.

  Scenario: Verify Sort Option
    Given I go to Bstack Demo Homepage
    Then the sort option should be visible on the page

  Scenario: Verify Sort Option Text
    Given I go to Bstack Demo Homepage
    Then the sort option should be visible on the page
    But the sort option description text should contain - Order by

  Scenario: Verify Sort Option Text - Flaky
    Given I go to Bstack Demo Homepage
    Then the sort option should be visible on the page
    And Refresh Page
    But the sort option description text should contain - Order by
