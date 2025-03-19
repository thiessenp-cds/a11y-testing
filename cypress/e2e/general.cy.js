import "cypress-each";
// import { Options } from "cypress-axe";

const AXE_A11Y_OPTIONS = {
  runOnly: {
    type: "tag",
    values: ["wcag21aa", "wcag2aa", "best-practice", "section508"],
  },
};

describe("Pages", () => {
  it.each([
    { title: "buttons", path: "/src/buttons.html" },
    { title: "conditional-reveal", path: "/src/conditional-reveal.html" },
    { title: "dialog", path: "/src/dialog.html" },
    { title: "grid", path: "/src/grid.html" },
    { title: "live regions", path: "/src/liveRegions.html" },
    { title: "radios-checkboxes", path: "/src/radios-checkboxes.html" },
    { title: "tables", path: "/src/tables.html" },
    { title: "tabs", path: "/src/tabs.html" },
    { title: "speech-to-text", path: "/src/speech-to-text/index.html" },
  ])(
    (page) => `${page.title} Test`,
    ({ path }) => {
      cy.visit(path);
      cy.get("h1").should("be.visible");

      // Validate HTML
      cy.htmlvalidate();

      // Validate A11Y (WCAG..)
      cy.injectAxe();
      cy.checkA11y(undefined, AXE_A11Y_OPTIONS);
    }
  );
});
