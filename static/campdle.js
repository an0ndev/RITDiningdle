function load_image_of_day(guess_num = 0){
    //load and crop the image
    //plan is each guess "zooms out" by uncropping
    var canvas = document.getElementById('image_of_day');
    var context = canvas.getContext('2d');
    var imageObj = new Image();

    imageObj.onload = function() {
        // figure out exact cropping function
        var cropX = this.width/4;
        var cropY = this.height/4;
        var cropWidth = this.width - this.width/2;
        var cropHeight = this.height - this.height/2;

        //resize our canvas to match the size of the cropped area
        canvas.style.width = cropWidth;
        canvas.style.height = cropHeight;

        //fill canvas with cropped image
        context.drawImage(imageObj, cropX, cropY, cropWidth, cropHeight, 0, 0, canvas.width, canvas.height);
    };
    imageObj.src = 'static/images/locations/escherian_stariwell.jpg';
}