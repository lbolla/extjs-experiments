Ext.define('BugTracker.controller.Bugs', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'bugDataView',
        selector: 'BugPanel BugDataView'
    }, {
        ref: 'bugFormWindow',
        selector: 'BugFormWindow'
    }, {
        ref: 'bugForm',
        selector: 'BugFormWindow BugForm'
    }],

    views: [
        'BugPanel',
        'BugFormWindow'
    ],

    init: function() {
        this.control({
            'BugPanel combo[name="severity"]': {
                select: this.onBugSeverityComboboxSelect
            },
            'BugPanel button[action="sortBySeverity"]': {
                click: this.onSortBySeverityButtonClick
            },
            'BugPanel button[action="openAllBugs"]': {
                click: this.onOpenAllBugsButtonClick
            },
            'BugPanel BugDataView': {
                itemclick: this.onBugDataViewItemClick
            },
            'BugFormWindow button[action="saveBug"]': {
                click: this.onSaveBugButtonClick
            }
        });
    },

    onBugSeverityComboboxSelect: function(combo, value, opts) {
        var store = this.getBugDataView().getStore();
        store.clearFilter();
        if (combo.getValue() !== 'All') {
            store.filter('severity', combo.getValue());
        }
    },

    currentOrdering: 'DESC',
    onSortBySeverityButtonClick: function(button) {
        this.currentOrdering = this.currentOrdering === 'DESC'? 'ASC' : 'DESC';
        this.getBugDataView().getStore().sort('severity', this.currentOrdering);
    },

    onOpenAllBugsButtonClick: function(button) {
        this.getBugDataView().getStore().each(function(model) {
            model.set('status', 'open');
            model.commit();
        });
    },

    onBugDataViewItemClick: function(view, record, item, index, e) {
        var win = this.getBugFormWindow();
        if (!win) {
            win = Ext.create('BugTracker.view.BugFormWindow');
        }

        this.getBugForm().loadRecord(record);

        win.show();
    },

    onSaveBugButtonClick: function(button) {
        var form = this.getBugForm();
        var selectedRecord = form.getRecord();
        selectedRecord.set(form.getValues());
        this.getBugDataView().getStore().filter();
        this.getBugFormWindow().close();
    }

});
