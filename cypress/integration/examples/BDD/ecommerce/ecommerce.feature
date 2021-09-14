Feature: End To End E-Commerce Validation
    @Regression
    Scenario: E-commerce product delivery
        Given I Open Ecommerce page
        When i add items to cart
        And validate the total prices
        Then select the country and verify Thankyou
    @Smoke
    Scenario: Filling the Form
        Given I Open Ecommerce page
        When i fill the form details
            | name | gender |
            | Rao  | Male   |
        Then validate the forms behaviour
        And select the shop page
