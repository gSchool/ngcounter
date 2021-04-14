# Super Auto Counter

This exercise is about getting to know the fundamentals of Angular components. The app allows users to create counters with the simple click of a button. Eventually the counters should take over and begin creating themselves.

## Objectives

* Create components
* Create templates
* Use property and even bindings

This exercise is connected to the Angular Directives exercise. Here we're just creating the counter page, but the follow-on lesson will have students add counters.

The final lab goal is to create the Super Auto Counter!
Inspiration: https://orteil.dashnet.org/cookieclicker/

## Instructions

Your task is to use components to build the Super Auto Counter. There are different types of counters and each has their own unique behaviors. Using TDD, build the application.

**Option 1:** Fork and clone this repository (recommended)

```
cd ngcounter
npm install
ng serve --open
```

**Option 2:** From scratch

```
ng new ngcounter
cd ngcounter
ng serve --open
```

The application should launch on `localhost:4200` in your default browser.

Some guidelines:

1. Your final app should be responsive and well-designed. No ugly apps; sculpt your CSS and HTML.
2. You can use your own CSS designs or Bootstrap.
3. Be creative by adding your own features, such as sound effects, gifs or interesting layouts!

> NOTE: Don't forget that every time a new component is added to the application, `AppModule` must also be updated. Specifically, the `NgModule` decorator must declare all components that the app depends on. 

## Stories and Acceptance Criteria

Below you'll find information about how the counters work. Use the stories to get started by writing the basic test cases for your application. 

You'll find that you'll need to solve additional problems that arise during development, just as you would in the normal course of work. The stories only tell you how the app should work, not how to build it. Collaborate with classmates and use your instructors as a resource.

```gherkin
Feature: Counters
  A counter is a box containing a value and 2 buttons. The value can be increased or decreased by clicking the + or - buttons.
  
Scenario: The 'Create' button is active.
Given the 'Create' button is clicked
Then a new counter is created and rendered
And is added to the list of counters

Scenario: There's one Counter rendered to the view.
Given the current value is 0
Then the '-' button is not clickable.

Feature: Super Counters

Scenario: There's 5 counters rendered to the view.
Given the 'Create' button is clicked
When the CounterList has 6 counters
Then a Super Counter will be created and rendered
And it will have a starting value equal to the value of the 6 Counters
And the 6 counters will be removed from the view.

Scenario: 6 Counters are created.
Given a Super Counter has been created
When its rendered to view
Then its twice the size of a Counter

Scenario: There's one Super Counter rendered to the view.
Given the current value is 0
Then the '-' button is not clickable.

Scenario: A Super Counter is rendered.
Given the '+' button is clicked
Then its value increases by 3
Given the '-' button is clicked
Then its value is decreased by 3

Feature: Super Duper Counters (STRETCH GOAL)

Scenario: There are 2 Super Counters rendered to view and 5 Counters
Given the 'Create' button is clicked
When the CounterList has 3 Super Counters
Then a Super Duper Counter will be created and rendered
And it will have a starting value equal to the value of the 3 Super Counters
And it will have a start button.
And the 3 Super Counters will be removed from the view.

Scenario: 3 Super Counters exist
Given a Super Duper Counter is created
When its rendered to view
Then its twice the size of a Super Counter
And its color is different

Scenario: A Super Duper Counter has been rendered.
Given the counter has a value of 0
When the start button is clicked
Then the counter will automatically increment its value by 1
And the Start button becomes disabled

Scenario: A Super Duper Counter has been started
Given the counter value has reached 20
Then a new Counter is automatically created.
And the Super Duper Counter continues incrementing.

Feature: Colossal Counters (STRETCH GOAL)

Scenario: There are 2 Super Duper Counters rendered to view and 5 Counters
Given a new Counter is created
When the CounterList has 3 Super Duper Counters
Then a Colossal Counter will be created and rendered
And it will have a starting value equal to the value of the 3 Super Counters
And it will have a start button.
And the 3 Super Duper Counters will be removed from the view.

Scenario: 3 Super Duper Counters exist
Given a Colossal Counter is created
When its rendered to view
Then its twice the size of a Super Duper Counter
And its color is different
And it has no buttons
And it automatically increases in value by 2 every second

Scenario: A Colossal Counter has started
Given the counter value has reached 20
Then a new Counter is automatically created
And the Colossal Counter continues incrementing
```

## Additional Resources

- [Official Documentation](https://angular.io/guide/architecture-components#template-syntax)
- [The Original Cookie Counter](https://orteil.dashnet.org/cookieclicker/)

