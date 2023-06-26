@browser
Feature: BStack Demo SignIn Page Basic Components Outline

  Scenario Outline: Verify Browserstack Logo Wrapper Details - Flaky
    Given I go to Bstack Sign In page
    Then the logo wrapper should be visible on the page
    And the logo wrapper text should contain - <wrapper_text>
    And Refresh Page
    But the logo wrapper icon should be - <icon_size>

    Examples:
      |wrapper_text     | icon_size |
      | Select Username | small     |
      | Select Password | big       |

  @p1
  Scenario Outline: Verify Login functionality
    When I go to Bstack Sign In page
    And I login using credentials - <username> and <password>
    Then I verify the validation message for invalid login should be - <message>

    Examples:
    |username    | password    | message      |
    | cristiano  | password123 | Invalid Login|
    | lionel     | password456 | Empty Login  |
