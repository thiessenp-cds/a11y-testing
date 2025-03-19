const { defineConfig } = require("cypress");
const htmlvalidate = require("cypress-html-validate/plugin");


const htmlvalidateConfig = {
  extends: ["html-validate:standard"],  // As close to W3C Nu checker. Leave a11y checking to other libs
  rules: {
    // E.g. "no-implicit-button-type": "off", // Can be: "error", "warn", "off" - only "error" shows anything 
  },
};

const htmlvalidateOptions = {
  exclude: [],
  include: [],
  formatter(messages) {
    console.log(messages);
  },
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      htmlvalidate.install(on, htmlvalidateConfig, htmlvalidateOptions);
    },
  },
});


// Note: must add `"type": "module",` to package.json for above instructions to work if ESM way
//
// Example ESM Way.
//
// import { defineConfig } from "cypress";
// import htmlvalidate from "cypress-html-validate/plugin";
// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on) {
//       htmlvalidate.install(on);
//     },
//   },
// });
