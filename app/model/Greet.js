Ext.define('SenchaGreet.model.Greet', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'name', type: 'string', default: 'Du' },
			{ name: 'nameReverse', type: 'string', default: 'uD' }
        ]
    },
	
	handleUpdate: function() {
			if(this.get('name') === '') this.set('name','Du');
	        this.set('nameReverse', this.get('name').split("").reverse().join(""));
	}
	
});
