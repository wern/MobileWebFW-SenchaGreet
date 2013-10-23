Ext.define('SenchaGreet.controller.Greets', {
    extend: 'Ext.app.Controller',
 	config: {
	    refs: {
            enter: '#enter',
			greet: '#greet',
			output: '#output',
			nav: '#nav'
        },
        control: {
            'button[action=greet]':{
                tap: 'doGreet'
            },
            'button[action=back]': {
                tap: 'doBack'
            },
			'image[itemId=beany]':{
				tap: 'doJump'
			}
        }
    },

    doGreet: function() {
		var greeting = Ext.create('SenchaGreet.model.Greet', this.getEnter().getValues());
		greeting.handleUpdate();
		this.getOutput().setRecord(greeting);
		this.getEnter().reset();
        this.getNav().push(this.getGreet());
    },

    doBack: function() {
        this.getNav().pop();
    },

	doJump: function() {
		open('http://www.mathema.de');
	}
});
