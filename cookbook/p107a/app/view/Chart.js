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

        Ext.TaskManager.start({
            run: function() { this.store.load(); },
            interval: 3000,
            scope: this
        });

        this.callParent();
    }

});

Ext.define('Example.view.Chart', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.my_chart',
    title: 'Nice graph',
    width: 600,
    height: 400,
    layout: 'fit',
    items: [{
        xtype: 'chart_widget'
    }]
});
