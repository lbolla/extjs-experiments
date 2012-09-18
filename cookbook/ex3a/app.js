Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath('Example', '/extjs/cookbook/ex3a/app');
Ext.require('Example.store.Invoices');

Ext.application({
    name: 'Example',
    appFolder: '/extjs/cookbook/ex3a/app',
    autoCreateViewport: true
});
