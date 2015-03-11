(function ($) {
    var $input = $("#imgur-image-upload-input"),
            $progress = $("#imgur-image-upload-progress"),
            $preview = $("#imgur-image-upload-uploaded-image");

    $input.imgurimageuploader({
        clientId: "0bb18c52036f017",
        done: function (data) {
            $preview.attr("src", data.link).fadeIn();
        },
        progressall: function (e, data, progressPercent) {
            var label = progressPercent + "%";
            $progress.css("width", label)
                    .attr("aria-valuenow", progressPercent);
        }
    });
})(jQuery);