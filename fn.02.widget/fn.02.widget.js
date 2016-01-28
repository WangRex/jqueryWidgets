$.fn.myPlugin = function(options) {
    var defaults = {
        "color": "red",
        "fontSize": "12px"
    };

	//为了能够保存下来默认的配置信息
    var settings = $.extend({}, defaults, options);

    return this.css({
        "color": settings.color,
        "font-size": settings.fontSize
    });

};
