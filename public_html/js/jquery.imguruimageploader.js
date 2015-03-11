(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery.ui.widget'
        ], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(
            require('jquery'),
            require('./vendor/jqueryui/jquery-ui')
        );
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    $.widget("livarava.imgurimageuploader", {
        // Options to be used as defaults

        options: {
            clientId: null,
            done: function(data, status){},
            error: function(jqXHR, status, error){},
            progressall: function (e, data, progressPercent) {}
        },
        /**
         * Setup widget (eg. element creation, apply theming, bind events etc.)
         * @private
         */
        _create: function () {           
            // _create will automatically run the first time
            // this widget is called. Put the initial widget
            // setup code here, then you can access the element
            // on which the widget was called via this.element.
            // The options defined above can be accessed
            // via this.options this.element.addStuff(); 

            this.element.fileupload({
                headers: {"Authorization": "Client-ID 0bb18c52036f017"},
                url: "https://api.imgur.com/3/image",
                dataType: "json",
                done: $.proxy(function (e, data, jqXHR) {
                    if (data && data.result && data.result.status === 200) {
                        this.options.done(data.result.data, data.result.status, jqXHR);
                    } else {
                        this.options.error(jqXHR, data && data.result && data.result.status || 500, data && data.error || new Error("Imgur Image Uploader: failed to upload image"));
                    }
                }, this),
                error: this.options.error,
                progressall: $.proxy(function (e, data) {
                    var progressPercent = parseInt(data.loaded / data.total * 100, 10);
                    this.options.progressall(e, data, progressPercent);
                }, this)
            });
        },
        /**
         * Destroy an instantiated plugin and clean up
         * modifications the widget has made to the DOM
         * @private
         */
        _destroy: function () {
            this.element.fileupload("destroy");
        },        
        // Respond to any changes the user makes to the
        // option method
        _setOption: function (key, value) {
            switch (key) {
                case "someValue":
                    //this.options.someValue = doSomethingWith( value );
                    break;
                default:
                    //this.options[ key ] = value;
                    break;
            }

            // For UI 1.8, _setOption must be manually invoked
            // from the base widget
            //$.Widget.prototype._setOption.apply(this, arguments);
            // For UI 1.9 the _super method can be used instead
            this._super("_setOption", key, value);
        }
    });
}));