Ext.Loader.setPath({
    'BugTracker': '/extjs-experiments/cookbook/p431/app'
});

Ext.require([
            'BugTracker.view.Viewport',
            'BugTracker.controller.Bugs'
]);

Ext.application({
    name: 'BugTracker',

    models: [
        'Bug'
    ],

    stores: [
        'BugStore'
    ],

    controllers: [
        'Bugs'
    ],

    autoCreateViewport: true,

    launch: function() {
        console.log('App launched');
    }
});
