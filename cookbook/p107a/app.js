Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath('Example', '/extjs-experiments/cookbook/p107a/app');
Ext.require([
            'Ext.layout.*',
            'Ext.tab.Panel',
            'Ext.chart.*',
            'Example.*'
]);

Ext.application({
    name: 'Example',
    appFolder: 'app',
    autoCreateViewport: true
});
