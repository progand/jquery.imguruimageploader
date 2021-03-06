# jquery.imguruimageploader

Plugin based on JQuery UI Widget Factory. You can use it for upload images to https://api.imgur.com/3/image

You need to allow anonymous images upload within you Imgur application settings.

Requirements
--------------

You need to incluce on a page JQuery, JQueru UI and jQuery-File-Upload plugin files like follow:

```html

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.js"></script>
    <script src="js/vendor/jqueryui/jquery-ui.js"></script>
        
    <script src="js/vendor/jqueryfileupload/jquery.iframe-transport.js"></script>
    <script src="js/vendor/jqueryfileupload/jquery.fileupload.js"></script>

```

And include jquery.imguruimageploader script after:

```html

    <script src="js/jquery.imguruimageploader.js"></script>

```


Example usage
--------------

Plugin provides a few additional to jQuery-File-Upload plugin options. All of them you can see in the example below:

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

HTML markup for the example is:

```html

    <div class="form-group">
        <label for="lr-image-upload-input">Image Downloader</label>                
        <input id="imgur-image-upload-input" type="file" name="image" >                
    </div>
    <div class="form-group">                
        <div class="progress">
            <div id="imgur-image-upload-progress" class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
        </div>
    </div>
    <div class="form-group">
        <img id="imgur-image-upload-uploaded-image" style="display: none; max-height: 100px" class="img-responsive img-thumbnail center-block"/>
    </div>    

```

We use Twiter Bootstrap here, but you don't have to.