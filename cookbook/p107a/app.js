Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath('Example', '/extjs-experiments/cookbook/p107a/app');
Ext.require('Example.store.Chart');

Ext.application({
    name: 'Example',
    appFolder: '/extjs-experiments/cookbook/p107a/app',
    autoCreateViewport: true
});
