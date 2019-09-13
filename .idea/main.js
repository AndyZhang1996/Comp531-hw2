var imageIdx1 = 1;
var imageIdx2 = 1;
var imageIdx3 = 1;
var interval1;
var interval2;
var interval3;
var randomTime1 = Math.ceil(Math.random() * 5)
var randomTime2 = Math.ceil(Math.random() * 5)
var randomTime3 = Math.ceil(Math.random() * 5)
var imageCollection1 = ["img/rice1.jpg", "img/rice2.png", "img/rice3.jpg"];
var imageCollection2 = ["img/space1.jpg", "img/space2.jpeg", "img/space3.jpg"];
var imageCollection3 = ["img/riceLogo1.png", "img/riceLogo2.png", "img/riceLogo3.png"];


//functions for row1
function change1(){
    var image1 = document.getElementById("rice");

    if(imageIdx1 == imageCollection1.length){
        imageIdx1 = 0;
    }
    image1.src = imageCollection1[imageIdx1];
    imageIdx1 += 1;
}

function countDown1() {
    interval1 = setInterval(change1, randomTime1 * 1000);
}

//button1
function button1Activate(button){
    if (button.value == "Stop") {
        stop1();
    } else {
        start1();
    }
}

function stop1() {
    var button = document.getElementById("button1");
    button.innerHTML = "Start";
    button.value = "Start";
    clearInterval(interval1);
}

function start1() {
    var button = document.getElementById("button1");
    button.innerHTML = "Stop";
    button.value = "Stop";
    randomTime1 = Math.ceil(Math.random() * 5);
    countDown1();
}



//functions for row2
function change2(){
    var image2 = document.getElementById("space");

    if(imageIdx2 == imageCollection2.length){
        imageIdx2 = 0;
    }
    image2.src = imageCollection2[imageIdx2];
    imageIdx2 += 1;
}

function countDown2() {
    interval2 = setInterval(change2, randomTime2 * 1000);
}


//button2
function button2Activate(button){
    if (button.value == "Stop") {
        stop2();
    } else {
        start2();
    }
}

function stop2() {
    var button = document.getElementById("button2");
    button.innerHTML = "Start";
    button.value = "Start";
    clearInterval(interval2);
}

function start2() {
    var button = document.getElementById("button2");
    button.innerHTML = "Stop";
    button.value = "Stop";
    randomTime2 = Math.ceil(Math.random() * 5);
    countDown2();
}




//functions for row3
function change3(){
    var image3 = document.getElementById("logo");


    if(imageIdx3 == imageCollection3.length){
        imageIdx3 = 0;
    }
    image3.src = imageCollection3[imageIdx3];
    imageIdx3 += 1;
}

function countDown3() {
    interval3 = setInterval(change3, randomTime3 * 1000);
}

//button3
function button3Activate(button){
    if (button.value == "Stop") {
        stop3();
    } else {
        start3();
    }
}

function stop3() {
    var button = document.getElementById("button3");
    button.innerHTML = "Start";
    button.value = "Start";
    clearInterval(interval3);
}

function start3() {
    var button = document.getElementById("button3");
    button.innerHTML = "Stop";
    button.value = "Stop";
    randomTime3 = Math.ceil(Math.random() * 5);
    countDown3();
}

