Feature: A movie can be rated

  Scenario: An authenticated user can rate movies
    When I am logged in
    Then I can rate movies
    When I rate a movie "Indiana Jones" with "4 stars"
    Then the movie "Indiana Jones" has 4 stars


  Scenario: A guest can not rate movies
    When I am logged out
    Then I can not rate movies
