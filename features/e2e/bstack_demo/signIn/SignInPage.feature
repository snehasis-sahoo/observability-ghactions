@browser
Feature: BStack Demo SignIn Page Basic Components
  Rule: All SignIn Page Components should be present

  Scenario: Verify Browserstack Logo Wrapper
    When I go to Bstack Sign In page
    Then the logo wrapper should be visible on the page

  Scenario: Verify Browserstack Logo Wrapper Text - Fail
    Given I go to Bstack Sign In page
    When the logo wrapper should be visible on the page
    Then the logo wrapper text should contain - logo

  @p1
  Scenario: Verify Username Input
    Given I go to Bstack Sign In page
    Then the username input should be visible on the page

  @p1
  Scenario: Verify Password Input
    When I go to Bstack Sign In page
    Then the password input should be visible on the page

  @p1
  Scenario: Verify Login Button
    Given I go to Bstack Sign In page
    Then the login button should be visible on the page

  Scenario: Verify Login Button - Flaky
    Given I go to Bstack Sign In page
    And Refresh Page
    Then the login button should be visible on the page

  Scenario: Verify Login Page - Double check
    Given I go to Bstack Sign In page
    Then the username input should be visible on the page
    And the password input should be visible on the page
    And the login button should be visible on the page
    Given I go to Bstack Sign In page
    Then the username input should be visible on the page
    And the password input should be visible on the page
    But the login button should be visible on the page
