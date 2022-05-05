import * as browserify from "@cypress/browserify-preprocessor";
import { preprocessor } from "@badeball/cypress-cucumber-preprocessor/browserify";
const {
  beforeRunHook,
  afterRunHook,
} = require("cypress-mochawesome-reporter/lib");

export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): void => {
  on(
    "file:preprocessor",
    preprocessor(config, {
      ...browserify.defaultOptions,
      typescript: require.resolve("typescript"),
    })
  );

  on("before:run", async (details) => {
    await beforeRunHook(details);
  });

  on("after:run", async () => {
    await afterRunHook();
  });
};
