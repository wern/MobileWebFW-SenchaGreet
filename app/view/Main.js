var view = Ext.create('Ext.NavigationView',{
	itemId: 'nav',
	xtype: 'nav',
	autoDestroy: false,
	navigationBar: false,
	height: '100%'
});

Ext.define('SenchaGreet.view.Main', {
	xtype: 'main',
    extend: 'Ext.Container',
    requires: [
		'Ext.NavigationView',
		'Ext.Toolbar'
    ],
	fullscreen: true,
	config: {
		navView: view,
		style:  'text-align:center',
		padding: 10,
    	items: [
			{
				xtype : 'toolbar',
	 			docked: 'top',
	 			title: 'Mobile WebFW Shootout'
 			},
			view,
			{
				xtype : 'toolbar',
		 		docked: 'bottom',
		 		title: 'powered by Sencha Touch'
	 		}
    	]
	}
});
