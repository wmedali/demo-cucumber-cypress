Feature: should authenticate users
    Scenario: successfull authentication
        Given I am in sauce demo website
        When I fill in the form
        Then I am successfully connected