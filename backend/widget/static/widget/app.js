Ext.application({
    name: 'Widget',
    autoCreateViewport: true,

    controllers: [
        'Widgets'
    ],

    launch: function() {
        console.log('App launched!');
    }
});
