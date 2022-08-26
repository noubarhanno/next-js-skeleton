module.exports = function (plop) {
  plop.setGenerator("icon", {
    description: "Create React Icon",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the icon?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/icons/{{name}}.tsx",
        templateFile: "../plop-templates/iconComponent.ts.hbs",
      },
    ],
  });
};
