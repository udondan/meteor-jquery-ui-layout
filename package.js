Package.describe({
  summary: "jQuery-UI Layout - The Ultimate Page Layout Manager"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.use('jquery-ui', 'client');
  api.add_files([
    'lib/jquery.layout-1.3.0RC30.79.js'
  ], 'client');
});
