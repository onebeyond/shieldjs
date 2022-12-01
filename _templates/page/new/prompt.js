module.exports = [
  {
    type: 'input',
    name: 'name',
    message:
      'What name do you want? i.e. "pagename" will create a "pagename" folder with the component files inside',
  },
  {
    type: 'input',
    name: 'path',
    message:
      'Where do you want to create your component on "pages/"? i.e. "/test" will create the component on "pages/test/[pagename]"',
  },
];
