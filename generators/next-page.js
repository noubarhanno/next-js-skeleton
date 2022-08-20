module.exports = function (plop) {
  plop.setGenerator("nextPage", {
    description: "Create Next Page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the page?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../pages/{{name}}.tsx",
        templateFile: "../plop-templates/NextPage/nextPage.ts.hbs",
      },
    ],
  });
};
