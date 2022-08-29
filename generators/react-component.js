module.exports = function (plop) {
  plop.setGenerator("reactComponent", {
    description: "Create React Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
      {
        type: "input",
        name: "group",
        message: "What group you want to create this component in?",
      },
      {
        type: "list",
        name: "type",
        message: "What type of component do you want to create?",
        choices: [
          {
            name: "ui component",
            value: "ui",
            checked: true,
          },
          {
            name: "feature component",
            value: "feature",
            checked: false,
          },
        ],
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{type}}/{{group}}/{{name}}/{{name}}.tsx",
        templateFile: "../plop-templates/ReactComponent/reactComponent.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{type}}/{{group}}/{{name}}/{{name}}.interface.ts",
        templateFile:
          "../plop-templates/ReactComponent/reactComponent.interface.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{type}}/{{group}}/{{name}}/{{name}}.test.tsx",
        templateFile:
          "../plop-templates/ReactComponent/reactComponent.test.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{type}}/{{group}}/{{name}}/index.ts",
        templateFile: "../plop-templates/ReactComponent/index.ts.hbs",
      },
    ],
  });
};
