module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "application controller",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name?",
      },
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "../templates/components/index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.module.css",
        templateFile: "../templates/components/styles.module.css.hbs",
      },
    ],
  });
};