Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath('Example', '/extjs-experiments/cookbook/ex3a/app');
Ext.require('Example.store.Invoices');

Ext.application({
    name: 'Example',
    appFolder: '/extjs-experiments/cookbook/ex3a/app',
    autoCreateViewport: true
});
