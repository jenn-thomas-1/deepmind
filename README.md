# DeepMind AI Agent Viewer Task

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5. In general, I generally only code in react, but since the most of DeepMind's tools are Angular, I spent some time to brush up and learn it so I could complete this task using Angular.

## Setup

Ensure you have a reasonable version of node (at least 12 or higher) and npm installed.

In the top level directory run `npm install` to install the node modules. Install the angular cli with `npm install -g @angular/cli`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further Improvements

Given more time I would like to expand the information on each page:

### List page

- Add additional columns to the table giving the agent's average score per category.

### Details Page

- Add either a new route or query string to the details route for the comparison
- Add a task breakdown comparison (though some don't have overlapping tasks)
- Add a bar chart showing the category breakdown, since visualisations give a faster impression than viewing numbers

### Other Components

- Separate out error messages and loading into their own components and add styling. Add spinner svg to loading. Move into core folder
- Make dropdown more generic to accept name/value pairs
- If the request fails, add a button to reload the page/call api again
