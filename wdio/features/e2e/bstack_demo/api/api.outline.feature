Feature: BStack Demo API Outline

  Background: Verify API pre-requisites
    Given Download PDF

  Scenario Outline: Verify API Create Account
    When Create account via service with credentials - <username> and <password>
    * Retrieve User credentials via service

    Examples:
    |username| password|
    |fred| password789|
    |lindelof| password123|

  @p1
  Scenario: Verify API User Address
    Given Retrieve User credentials via service
    Then Retrieve user token via service
    And Verify user address should be
    """
    C-706, BuildingName, AreaName
    City, District - Pin
    State
    """

  @p1
  Scenario: Verify API User Plans - Flaky
    Given Retrieve User credentials via service
    And Verify user plan list
      | plan          | parallels  |
      | Automate      | 2          |
      | App Automate  | 3          |
      | Live          | 5          |
    And Change user group
