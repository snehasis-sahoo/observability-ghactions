@browser
Feature: BStack Demo Home Page Basic Components Outline

  Background: User is navigated to Demo Page
    Given I go to Bstack Demo Homepage

  Scenario Outline: Verify Browserstack Logo Details - Flaky
    Then the logo should be visible on the page
    And the logo text should be - <logo_text>
    But the logo icon should be - <logo_icon_size>
    And Refresh Page
    Examples:
      |logo_text     | logo_icon_size|
      | empty        | small         |
      | empty        | extraSmall   |
      | empty        | large         |
      | empty        | extraLarge   |

  Scenario Outline: Verify Sign In Button Text Details
    Then the sign in should be visible on the page
    Then the sign in button icon behaviour should be - <logo_icon_behaviour>
    And the sign in button icon color should be - <logo_icon_color>
    But the sign in button text should be - <logo_text>

    Examples:
      |logo_text| logo_icon_behaviour | logo_icon_color|
      | Sign In | clickable           | red            |
      | Sign In | clickable           | blue           |
      | Log In  | clickable           | black          |
      | Sign In | greyed out          | red            |
      | Sign In | visible             | red            |
      | Log In  | greyed out          | green          |
      | Sign In | visible             | green          |
      | Sign In | visible             | black          |


  Scenario Outline: Verify Search Result Description Details
    Given I go to Bstack Demo Homepage
    Then the search result description should be visible on the page
    And the search result description text should be - <search_description>
    And the search results should have <product_number> products
    But the search results should have brand - <brand_name>

    Examples:
      |search_description    | product_number | brand_name|
      | 25 Product(s) found | 25             | Apple     |
      | 25 Product(s) found. | 5             | Samsung     |
      | 25 Product(s) found. | 15             | Apple     |
