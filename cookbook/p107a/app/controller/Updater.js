Ext.define('Example.controller.Updater', {
    extend: 'Ext.app.Controller',

    config: {
        action: null
    },
    running: false,

    constructor: function(config) {
        this.initConfig(config);
    },

    start: function(task) {
        if (this.getAction()) {
            this.stop();
            this.task = Ext.TaskManager.start(this.getAction());
            this.running = true;
        }
    },

    stop: function() {
        if (this.task) {
            Ext.TaskManager.stop(this.task);
            this.task = null;
            this.running = false;
        }
    },

    suspend: function() {
        if (this.running) {
            Ext.TaskManager.stop(this.task);
            // Do not clear this.task, because it indicates if it was running
            this.running = false;
        }
    },

    resume: function() {
        if (this.task && !this.running) {
            this.start();
        }
    }

});
