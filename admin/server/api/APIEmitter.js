const events = require('events');

const APIEmitter = function(){
	this.onItemUpdate = (oldItem, updatedItem) => {
		this.emit('itemUpdate', {
			old: oldItem,
			new: updatedItem
		});
	};
}

APIEmitter.prototype = new events.EventEmitter;

module.exports = APIEmitter;