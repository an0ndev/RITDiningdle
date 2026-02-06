const max_guesses = 5;
temp_guess = 0;//to be replaced with cache
function load_campdle_image_of_day(guess_num = 0){
    //load and crop the image
    //plan is each guess "zooms out" by uncropping

    //eventually this should pull session cache to jump to correct guess


    var canvas = document.getElementById('campdle_image_of_day');
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

function submit_guess(guess){
    //have guess be from populated dropdown
    if (guess==get_guess_from_server){
        load_image_of_day(max_guesses);//show full resolution image
        //grab id and populate congrats image and countdown to reset or something
    }else{

    }
}

function get_answer_from_server(){
    //stub function
    return "Gleason";
}