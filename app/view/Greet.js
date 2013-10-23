Ext.define('SenchaGreet.view.Greet', {
	xtype: 'greet',
    extend: 'Ext.Panel',
    requires: [
		'Ext.Label',
		'Ext.field.Text',
		'Ext.Img'
    ],
	config: {
		itemId: 'greet',
		style:  'text-align:center',
		items: [
			{
				itemId:'output',
				xtype:'panel',
				tpl: ['Hallo {name}!<br>Deine Name r&uuml;ckw&auml;rts: {nameReverse}']
			},
			{
				xtype: 'image',
				itemId: 'beany',
				style: 'margin-left:auto;margin-right:auto;',
				src: 'resources/img/Beany.png',
				height: 128,
				width: 128
				/*listeners: {
					tap: function(){open('http://www.mathema.de');}
				}*/
			},
    		{
        		xtype: 'button',
				margin: 10,
				action:'back',
        		text: 'Zur&uuml;ck'
    		}
		]
	}
});