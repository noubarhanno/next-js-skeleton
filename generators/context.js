module.exports = function (plop) {
  plop.setGenerator("context", {
    description: "Create React Context",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the context?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/context/{{name}}.context.tsx",
        templateFile: "../plop-templates/ContextWrapper/contextWrapper.ts.hbs",
      },
    ],
  });
};
