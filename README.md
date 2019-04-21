# Angular Counter Exercise

This exercise is all about learning to create components and how to use bindings and directives. The goal is to make students proficient with using components, bindings and directives.

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

## Details

This exercise is about getting to know the fundamentals of components by building a simple Counter app. The app allows users to create a counter with the simple click of a button. Each counter has 2 buttons: one to increase the count and another to decrease the count. 

The instructor will first do a walk-thru/code-a-long of this exercise to get you started. Take notes and learn the fundamentals. At each stage you'll have an opportunity to try what you've learned.

After the walk-thru you'll have to complete the items below. *Focus on understanding components, bindings and directives* to keep yourself on track. There's lots to learn about Angular and this lesson is to make you good with components. 

### Creating Components

**CounterListComponent**

This component will be responsible for:

* Creating new `Counter`s
* Displaying `Counter` instances in a grid

To create it, run: `ng generate component counter-list`

...which generates the following module with files:

- app/counter-list/counter-list.component.ts
- app/counter-list/counter-list.component.css
- app/counter-list/counter-list.component.html
- app/counter-list/counter-list.component.spec.ts

### AppModule

Every time a new component is added to the application, `AppModule` must also be updated. Specifically, the `NgModule` decorator must declare all components that the app depends on. In this case, `CounterListComponent` and `CounterDetailComponent` should each be added to the `declarations` array.

You'll also need to import `FormsModule` and add it to the `imports` of `NgModule`. This will allow access to the `@Input()` object which will come in handy during this exercise.


# Exercise

Time to *use your new knowledge* of components, bindings and directives to add some new features to build the Super Counter. You're not limited to the components and classes below. 

Some guidelines:

1. Your final app should be responsive and well designed. No ugly apps; sculpt your CSS and HTML.
2. You can use your own CSS designs or a framework of your choice.


**`CounterListComponent`**

- tracks how many counters are on the page
- has limit 10 on how many counters can be created

**`CounterDetailComponent`**

- has a counter
- has an increment event that increases counter.value by 1 per click
- has an decrement event that decreases counter.value by 1 per click
- displays individual counters

**`Counter` (class)**

- has a single property: value 

**`SuperCounterComponent`**

- is automatically created when 6 counters have been created
- has levels
  * level 1: increments/decrements in multiples of 3
  * level 2: consumes 3 super counters; has 'start' button; auto increments +1 every second after 'start' is clicked
  * level 3: consumes 6 super counters; has no buttons; +2 per second automatically
- has different color based on counter level
- is twice the size of normal counters
- has value equal to the sum of the 6 counters it combined
- makes a sound when created

**`StatsComponent`**

- has counter count
- has super counter count
- has clicks per second average (based on auto counters)
