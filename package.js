Package.describe({
  summary: "jQuery UI Layout - The Ultimate Page Layout Manager",
  version: "1.4.3_1",
  git: "https://github.com/udondan/meteor-jquery-ui-layout.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('jquery', 'client');
  api.use("mrt:jquery-ui@1.9.2", 'client');
  api.add_files([
    'vendor/jquery-ui-layout/source/stable/jquery.layout.js',
    'vendor/jquery-ui-layout/source/stable/layout-default.css'
  ], 'client');
});
