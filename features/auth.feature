Feature: A user can signup, login, signout

  Scenario: A user can signup
    When I am on the homepage
    And I signup
    Then I am on the dashboard
