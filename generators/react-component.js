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
        path: "../src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "../plop-templates/ReactComponent/reactComponent.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.interface.ts",
        templateFile:
          "../plop-templates/ReactComponent/reactComponent.interface.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile:
          "../plop-templates/ReactComponent/reactComponent.test.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components//{{type}}/{{pascalCase name}}/index.ts",
        templateFile: "../plop-templates/ReactComponent/index.ts.hbs",
      },
    ],
  });
};
