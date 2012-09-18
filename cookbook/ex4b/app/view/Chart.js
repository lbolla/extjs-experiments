Ext.define('Example.view.ChartWidget', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.chart_widget',

    animate: true,
    axes: [{
        type: 'Numeric',
        position: 'left',
        fields: ['value'],
        title: 'Value',
        minimum: 0,
        maximum: 25,
        decimals: 0
    }, {
        type: 'Category',
        position: 'bottom',
        fields: ['name'],
        title: 'Name'
    }],
    series: [{
        type: 'column',
        axis: 'left',
        xField: 'name',
        yField: 'value'
    }, {
        type: 'line',
        axis: 'left',
        xField: 'name',
        yField: 'value2',
        markerConfig: {
            type: 'cross',
            radius: 8
        }
    }],

    initComponent: function() {
        this.store = Ext.create('Example.store.Chart');
        this.updater = Ext.create('Example.util.Updater', {
            action: {
                run: function() { this.store.load(); },
                interval: 3000,
                scope: this
            }
        });
        this.callParent();
    }

});

Ext.define('Example.util.Updater', {

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

Ext.define('Example.view.Chart', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.my_chart',
    title: 'Nice graph',
    width: 600,
    height: 400,
    closable: true,
    collapsible: true,
    layout: 'fit',
    style: 'margin: 10px',
    items: [{
        xtype: 'chart_widget'
    }],
    tbar: [{
        xtype: 'button',
        text: 'Start Update',
        handler: function() {
            var chart = this.up('panel').down('chart');
            chart.updater.start();
        }
    }, {
        xtype: 'button',
        text: 'Stop Update',
        handler: function() {
            var chart = this.up('panel').down('chart');
            chart.updater.stop();
        }
    }],
    tools: [{
        type: 'refresh',
        tooltip: 'Start Update',
        handler: function(event, target, owner, tool) {
            var chart = owner.ownerCt.down('chart');
            chart.updater.start();
        }
    }],
    renderTo: Ext.getBody(),

    initComponent: function() {
        this.on({
            'collapse': function() {
                var chart = this.ownerCt.down('chart');
                chart.updater.suspend();
            },
            'expand': function() {
                var chart = this.ownerCt.down('chart');
                chart.updater.resume();
            },
            scope: this
        });
        this.callParent();
    }
});
