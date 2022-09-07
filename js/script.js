// global variables need to run the script

let blinkingCircle;
let circleIntervalBlink;

// start off by having first circle be blinking
makeCircleBlink();

let slidingCircle;
let circleIntervalSlide;

// start off by having first circle be sliding and changing color
makeCircleSlide();

let expandingCircle;
let circleIntervalExpand;

// start off by having first circle be expanding left and right
makeCircleExpand();

//////////////////////////////////////////////////////////////////////////////////////

let introImgFade = true;

function changeIntroImage() {
    const introImg = document.getElementById("intro_img");

    if (introImgFade) {
        $('#intro_img').fadeOut(500);
    } else {
        $('#intro_img').slideUp(500);
    }


    setTimeout(function(){

        if (introImg.src.includes("assest/images/akash_hike.jpg")){
            introImg.src = "assest/images/akash_discovery.jpg";
        } else {
            introImg.src = "assest/images/akash_hike.jpg";
        }

        if (introImgFade) {
            $('#intro_img').fadeIn(500);
        } else {
            $('#intro_img').slideDown(500);
        }

        introImgFade = !introImgFade

    }, 500);
}

//////////////////////////////////////////////////////////////////////////////////////

function blinkCircle() {
    if (blinkingCircle) {
        makeCircleStopBlinking();
    } else {
        makeCircleBlink();
    }
}

function makeCircleBlink() {
    blinkingCircle = true;
    circleIntervalBlink = setInterval(() => {
        $('#circle1').fadeOut();
        $('#circle1 circle').css({fill: "orange", transition: "0.25s"});
        setTimeout(function(){
            $('#circle1').fadeIn();
            $('#circle1 circle').css({fill: "green", transition: "0.25s"});
        }, 750);

    }, 1000);
}

function makeCircleStopBlinking() {
    blinkingCircle = false;
    clearInterval(circleIntervalBlink)
}

//////////////////////////////////////////////////////////////////////////////////////

function slideCircle() {
    if (slidingCircle) {
        makeCircleStopSlide();
    } else {
        makeCircleSlide();
    }
}

function makeCircleSlide() {
    slidingCircle = true;
    circleIntervalSlide = setInterval(() => {
        $('#meme_window_2').animate({"margin-right": '-=300'});
        $('#square rect').css({fill: "green", transition: "0.5s"});
        setTimeout(function(){
            $('#meme_window_2').animate({"margin-right": '+=300'});
            $('#square rect').css({fill: "red", transition: "0.5s"});
        }, 500);

    }, 1000);
}

function makeCircleStopSlide() {
    slidingCircle = false;
    clearInterval(circleIntervalSlide)
}

//////////////////////////////////////////////////////////////////////////////////////

function expandCircle() {
    if (expandingCircle) {
        makeCircleStopExpanding();
    } else {
        makeCircleExpand();
    }
}

function makeCircleExpand() {
    expandingCircle = true;
    circleIntervalExpand = setInterval(() => {
        $('#rectangle').animate({"margin-top": '+=200'});
        $('#rectangle rect').css({fill: "green", transition: "0.5s"});
        setTimeout(function(){
            $('#rectangle').animate({"margin-top": '-=200'});
            $('#rectangle rect').css({fill: "yellow", transition: "0.5s"});
        }, 500);

    }, 1000);
}

function makeCircleStopExpanding() {
    expandingCircle = false;
    clearInterval(circleIntervalExpand)
}