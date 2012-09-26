Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Cookbook',
    autoCreateViewport: true,

    controllers: [
        'Main'
    ],

    launch: function() {
        console.log('App launched');
    }
});
