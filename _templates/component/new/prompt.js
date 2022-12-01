module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'What name do you want for your component?',
  },
  {
    type: 'input',
    name: 'path',
    message:
      'By default the component will be created on "src/components/[ComponentName]. If you want a nested directory write it here. For example, "/commons" will create the component on "components/commons/[ComponentName]"',
  },
];
