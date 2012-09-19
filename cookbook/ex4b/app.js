Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath('Example', '/extjs-experiments/cookbook/ex4b/app');
Ext.require('Example.store.Chart');

Ext.state.Manager.setProvider(new Ext.state.LocalStorageProvider());

Ext.application({
    name: 'Example',
    appFolder: '/extjs-experiments/cookbook/ex4b/app',
    autoCreateViewport: true
});
