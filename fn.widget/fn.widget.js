$.fn.myPlugin = function() {
	//在这里面，this指的是用jquery选中的元素
	//例如，是$("a")，则this = $("a")
	this.css('color', 'red');
	//为了支持链式调用，对每个处理后的对象加个return。
	return this.each(function(index, el) {
		// console.log(index);
		// console.log($(el).attr("href"));
		$(el).append(" " + $(el).attr("href"));
	});
}