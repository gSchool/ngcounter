# Angular Counter Exercise

This exercise is all about learning to create components and how to use bindings and directives. The goal is to make students proficient with using components, bindings and directives.

> **INSTRUCTOR NOTE:** The exercise has many goals, but 2 blocks minimum will give students optimal practice with Angular basics. For shorter lessons, consider all goals beyond Counter level 1 a stretch goal.

## Objectives

* Learn how to use components
* Create views with components
* Create templates for views
* Modify NgModules
* Describe how property and event bindings work
* Create the Super Auto Counter

This exercise is connected to the Angular Directives exercise. Here we're just creating the counter page, but the follow-on lesson will have students add counters.

The final lab goal is to create the Super Auto Counter!
Inspiration: https://orteil.dashnet.org/cookieclicker/

The Super Auto Counter has the following feature summary:

- Create counters
- Auto create super counters from current counters
- Auto create counters over time

The lab contains step by step instructions and stories for students use to complete the final product.

## Setup

**Option 1:** Clone this repository (recommended)

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

## Exercise

This exercise is about getting to know the fundamentals of components by building The Super Counter app. The app allows users to create counters with the simple click of a button. Eventually the counters should take over and begin creating themselves.

Time to use your new knowledge of components, bindings and directives to add the features.

Some guidelines:

1. Your final app should be responsive and well designed. No ugly apps; sculpt your CSS and HTML.
2. You can use your own CSS designs or a framework of your choice.
3. Be creative by adding your own features, such as sound effects, gifs or interesting layouts!

> NOTE: Don't forget that every time a new component is added to the application, `AppModule` must also be updated. Specifically, the `NgModule` decorator must declare all components that the app depends on. 

## Stories

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
And it will have a starting value equal to the value of the 5 Counters
And the 5 counters will be removed from the view.

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

