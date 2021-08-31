# Super Duper Counters

This exercise is about getting to know the fundamentals of Angular components. The app allows users to create counters with the simple click of a button. Eventually the counters should take over and begin creating themselves.

## Objectives

* Create components
* Create templates
* Use property and even bindings

The final lab goal is to create the Super Auto Counter!
Inspiration: https://orteil.dashnet.org/cookieclicker/

## Instructions

Your task is to use components to build the Super Auto Counter. There are different types of counters and each has their own unique behaviors. Using TDD, build the application.

**Option 1:** Fork and clone this repository (recommended)

```
npm install
npm test
ng serve --open
```

The application will launch on `localhost:4200` in your default browser.

## Instructions

This exercise is about getting to know the fundamentals of components by building Super Duper Counters. The app allows users to create counters with the simple click of a button. Eventually the counters should take over and begin creating themselves.

1. Your final app should be responsive and have some style. No ugly apps.
1. Be creative by adding your own features, such as sound effects, gifs or interesting layouts!

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

You'll find that you'll need to solve additional problems that arise during development, just as you would in the normal course of work. The stories and acceptance criteria only tell you how the app should work, not how to build it. Collaborate with classmates and use your instructors as a resource.

```gherkin
Feature: Counters
  A counter is a box containing a value and 2 buttons. The value can be increased or decreased by clicking the + or - buttons.
  
Scenario: The 'Create' button is rendered to the view with no counters.

Given the 'Create' button is clicked
Then a new counter is created and rendered
And is added to the list of counters

Given a counter is rendered
When the counter value is 0
Then the '-' button is not clickable.

Given a counter has a value of 0
When its value is incremented
Then its' value is increased by 1

Feature: Super Counters

Rule: 3 counters creates 1 super counter.

Given there are 3 counters
When the 'Create' button is clicked
Then a Super Counter will be created and rendered
And it will have a starting value equal to the value of the 3 Counters
And the 3 counters will be removed from the view.

Given a Super Counter has been created
When its rendered to view
Then its twice the size of a Counter

Given there's 1 Super Counter 
When its value is 0
Then the '-' button is not clickable.

Given 1 Super Counter
When the '+' button is clicked
Then its value increases by 3

Given a Super Counter with a value of 5
When the '-' button is clicked
Then its value is decreased by 3

Feature: Super Duper Counters (STRETCH GOAL)
Rule: Super Duper Counters are twice the size of Super Counters and have a unique color.

Given here are 2 Super Counters rendered to view and 3 Counters
When the 'Create' button is clicked
Then a Super Duper Counter will be created
And it will have a starting value equal to the sum of the values of the 3 Super Counters 
And it will have a start button.
And 3 Super Counters will be removed from the view.

Given a Super Duper Counter with value of 0
When the start button is clicked
Then the counter will automatically increment its value by 1 every second
And the Start button becomes disabled

Given a Super Duper Counter has been started
When the counter value is evenly divisible by 20
Then a new Counter is automatically created.
And the Super Duper Counter continues

Feature: Colossal Counters (STRETCH GOAL)
Rule: Colossal Counters are larger than Super Duper Counters and have a unique color. It doesn't have any buttons.

Given there are 2 Super Duper Counters and 3 Counters
When a new Counter is created
Then a Colossal Counter is created
And it will have a starting value equal to the sum of the values of the 3 Super Duper Counters
And it will have a start button.
And the 3 Super Duper Counters will be removed from the view.

Given a Colossal Counter
When its rendered to view
Then it automatically increases in value by 2 every second

Given a Colossal Counter
When the counter value is evenly divisible by 10
Then a new Counter is automatically created
And the Colossal Counter continues incrementing
```

## Additional Resources

- [Official Documentation](https://angular.io/guide/architecture-components#template-syntax)
- [The Original Cookie Counter](https://orteil.dashnet.org/cookieclicker/)

