Ext.Loader.setPath('Example', '/extjs-experiments/cookbook/p107a/app');
Ext.require([
            'Ext.layout.*',
            'Ext.tab.Panel',
            'Ext.chart.*',
            'Example.controller.Updater',
            'Example.store.Invoices',
            'Example.store.Chart',
            'Example.view.Invoices',
            'Example.view.Chart'
]);

Ext.application({
    name: 'Example',
    appFolder: 'app',
    autoCreateViewport: true
});
