Ext.define('SenchaGreet.view.Enter', {
	xtype: 'enter',
    extend: 'Ext.form.Panel',
    requires: [
		'Ext.Label',
		'Ext.Button',
		'Ext.field.Text',
		'Ext.form.FieldSet'
    ],
	config: {
		itemId: 'enter',
		style:  'text-align:center;',
    	items: [
			{
				xtype:'label',
				html: 'Wie heisst Du?'
			},
			{
				xtype: 'fieldset', // nur fuer runde Ecken ,)
				items: [
					{
						xtype:'textfield',
						name:'name'
					}
				]
			},
        	{
            	xtype: 'button',
				margin: 10,
				action: 'greet',
            	text: 'Weiter'
        	}
    	]
	}
});