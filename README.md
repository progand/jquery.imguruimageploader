# jquery.imguruimageploader

Plugin based on JQuery UI Widget Factory. You can use it for upload images to https://api.imgur.com/3/image

Requirements
--------------

You need to incluce on a page JQuery, JQueru UI and jQuery-File-Upload plugin files like follow:

```html

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.js"></script>
    <script src="js/vendor/jqueryui/jquery-ui.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>
        
    <script src="js/vendor/jqueryfileupload/jquery.iframe-transport.js"></script>
    <script src="js/vendor/jqueryfileupload/jquery.fileupload.js"></script>

```

Example usage:

```js

    var $input = $("#imgur-image-upload-input"),
            $progress = $("#imgur-image-upload-progress"),
            $preview = $("#imgur-image-upload-uploaded-image");

    $input.imgurimageuploader({
        clientId: "your-client0id",
        done: function (data) {
            $preview.attr("src", data.link).fadeIn();
        },
        progressall: function (e, data, progressPercent) {
            var label = progressPercent + "%";
            $progress.css("width", label)
                    .attr("aria-valuenow", progressPercent);
        }
    });

```