Package.describe({
  summary: "jQuery-UI Layout - The Ultimate Page Layout Manager",
  version: "0.1.0",
  git: "https://github.com/udondan/meteor-jquery-ui-layout.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('jquery', 'client');
  api.use("mrt:jquery-ui@1.9.2", 'client');
  api.add_files([
    'lib/jquery.layout-1.3.0RC30.79.js'
  ], 'client');
});
