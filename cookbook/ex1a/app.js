Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath('Example', '/extjs-experiments/cookbook/ex1a/app');
Ext.require([
            'Example.view.Viewport'
]);

Ext.application({
    name: 'Example',
    appFolder: 'app',
    autoCreateViewport: true
});
