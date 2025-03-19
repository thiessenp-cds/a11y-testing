
# a11y
Mainly prototypes and testing.

Run the http server with: `npm run dev`

## Tests

Run the below tests using the automated test tool Cypress by running the below command:
```
npm run cypress:e2e   # commandline headless
npm run cypress       # runs in chrome for more details
```
Add new tests to /cypress/e2e/general.cy.js

### HTML Validate

https://gitlab.com/html-validate/cypress-html-validate

Set to check "standard" to be as close as possible to W3C "Nu Html Checker". A11y check left to Axe.
https://html-validate.org/rules/presets.html

### Axe

https://www.deque.com/axe/core-documentation/api-documentation/#getting-started

API https://www.deque.com/axe/core-documentation/api-documentation/#api-notes

## Initial Setup Steps/Notes

 - npm install --save-dev html-validate cypress-html-validate
 - instructions https://html-validate.org/usage/cypress.html
 - note: must add `"type": "module",` to package.json for above instructions to work if ESM way

note: Cypress trouble shooting https://docs.cypress.io/guides/references/troubleshooting#To-clear-App-Data
```
rm -rf node_modules
cypress cache clear
cypress install -f
```
