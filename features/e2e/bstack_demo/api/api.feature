Feature: BStack Demo API

  Background: Verify API pre-requisites
    Given Download PDF

  Scenario: Verify API User token
    Given Retrieve User credentials via service
    Then Retrieve user token via service

  @p1
  Scenario: Refresh API User token - Fail
    Given Retrieve User credentials via service
    Then Retrieve user token via service
    * Refresh user token via service

  Scenario: Refresh API User token - Step not defined
    Given Retrieve User credentials via service
    Then Retrieve user token via service
    And Refresh user token via services

  Scenario: Delete Account via API - Step Pending
    Given Retrieve User credentials via service
    Then Retrieve user token via service
    But Delete account via service

  Scenario: Change Account Password - Step Ambiguous
    When Retrieve User credentials via service
    Then Retrieve user token via service
    And Change password via service

  Scenario: Change User Group - Flaky
    When Retrieve User credentials via service
    Then Retrieve user token via service
    * Change user group
