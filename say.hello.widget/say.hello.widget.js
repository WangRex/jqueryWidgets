$.extend({
	sayHello: function(name) {
		console.log("Hello, " + (name ? name : "Dude") + " !");
	}
});

//无参调用
$.sayHello();

//有参调用
$.sayHello("Rex");
