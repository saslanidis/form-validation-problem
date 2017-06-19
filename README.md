# [Form validation problem](https://springload.github.io/form-validation-problem/)

We've created this problem to evaluate how developers tackle a real-world problem. If you've been assigned this problem you should spend around **2 hours** working on it. The last thing we want you to do is toil away for days on end!

If you've stumbled across this and want to work at [Springload](https://www.springload.co.nz/) feel free to submit it too. We're always on the lookout for skilled developers.

## Problem definition

Included in this repository is an [index.html](index.html) file that contains a form. You must ensure all of the following rules are met before the form is posted to the (in this case imaginary) server:

* `Email` must be a valid email address.
* `Password` must be longer than 8 characters.
* `Colour` must be selected.
* At least two `Animal`s must be chosen.
* If `Tiger` is one of the chosen `Animal`s then `Type of tiger` is required to be a non-empty string.

## Other requirements

If the form is submitted and an error occurs, the error element's parent should have a CSS `error` class added to it.

```html
<p class="error">
    <label for="field"></label>
    <input id="field" type="text" value="foo">
</p>
```

## The cherry on the cake

Beyond the problem statement, show us the consideration you have given to some or all of the following:

- Documentation
- Accessibility
- Progressive enhancement
- Browser support
- Testing
- Tooling

## Submission

Please email us a link to your fork of this repository, or a zip of your solution to `1337h4x0r@springload.co.nz`.

# Form validation solution

## Prerequisites

The solution is making use of Angular and Angular CLI. Before you can execute the tests and the application please install 

- Node.js (at least version 6.9.x)
- npm (at least version 3.x.x)
- npm package @angular/cli ('npm install -g @angular/cli')

## How to run the application

- Download the application
- Go to the directory
- Run 'npm install' - this will install all third party dependencies 
- Run 'ng serve --open' - this will serve the application in a local webserver, open your browser and navigate to the application

## How to run the unit tests

Simply by running 'ng test' in your console.

## How to run the end to end tests

Make sure to run the application ('ng serve'), before starting the end to end tests with 'ng e2e'.
