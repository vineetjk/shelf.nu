import "@testing-library/cypress/add-commands";
import { configure } from "@testing-library/cypress";
import "./commands";

Cypress.on("uncaught:exception", (err) => {
  // Cypress and React Hydrating the document don't get along
  // for some unknown reason. Hopefully we figure out why eventually
  // so we can remove this.
  if (
    /hydrat/i.test(err.message) ||
    /Minified React error #418/.test(err.message) ||
    /Minified React error #423/.test(err.message) ||
    err.message.includes("The user aborted a request.")
  ) {
    return false;
  }
});

configure({ testIdAttribute: "data-test-id" });
