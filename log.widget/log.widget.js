$.extend({
	log: function(message) {
		var now = new Date(),
		y = now.getFullYear(),
		m = now.getMonth() + 1,
		d = now.getDate(),
		h = now.getHours(),
		min = now.getMinutes(),
		s = now.getSeconds(),
		time = y + "/" + m + "/" + d + " " + h + ":" + min + ":" + s;
		console.log(time + " My App: " + message);
	}
});
