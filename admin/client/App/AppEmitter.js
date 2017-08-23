const events = require('events');

const AppEmitter = function(){
	this.onItemUpdate = (oldItem, updatedItem) => {
		this.emit('itemUpdate', {
			old: oldItem,
			new: updatedItem
		});
	};
}

AppEmitter.prototype = new events.EventEmitter;

module.exports = AppEmitter;