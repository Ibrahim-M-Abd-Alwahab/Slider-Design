// 1- ados 3al sora azhr el div el kber

// 2- a3rf men el sora eli dost 3liha 3ashan tb2a bg ll div el so8yr

var imgs = document.querySelectorAll('.img-fluid'); //nodeList 
var fixedBox = document.getElementById('fixedBox');
var smallBox = document.getElementById('smallBox');
var closeBtn = document.getElementById('closeBtn');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

//global variable
var imgsArray = [];
for (var i = 0; i < imgs.length; i++) {
    imgsArray.push(imgs[i]);
}
console.log(imgsArray)

var currIndex = 0; //global variable with initial value 


// 1) first way : insted var with let i = 0 >> local variable so its work


// for (let i = 0; i < imgs.length; i++) {
//     imgs[i].addEventListener('click', function() {
//         // fixedBox.style.display = `flex !important`;
//         console.log(imgs[i])

//     });
// }


// 2) secound way : use this to print the current object or element that clicks by mouse


// for (var i = 0; i < imgs.length; i++) {
//     imgs[i].addEventListener('click', function() {

//         // fixedBox.style.display = `flex !important`;
//         console.log(this)
//         fixedBox.classList.replace('d-none', 'd-flex');

//     });
// }


// 3) third way : use eventInfo Parametters .target() to select the element that i clicks it

// for (var i = 0; i < imgs.length; i++) {
//     imgs[i].addEventListener('click', function(eventInfo) {

//         // fixedBox.style.display = `flex !important`;

//         console.log(eventInfo.target)
//         fixedBox.classList.replace('d-none', 'd-flex');

//     });
// }

// 4) forth way : use getAttribute('src) to select the element that i clicks it

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function(e) {

        // 1) i can use this way

        var clickedImage = e.target; //tag

        //local variable
        var imgSrc = clickedImage.getAttribute('src');

        //indexOf just Used with array so we need to convert imgs[i] to array
        currIndex = imgsArray.indexOf(clickedImage); //override

        // console.log(currIndex);
        // 2) or this way

        // var imgSrc = this.getAttribute('src');

        // console.log(imgSrc);

        fixedBox.classList.replace('d-none', 'd-flex');

        smallBox.style.backgroundImage = `url(${imgSrc})`;

    });
}


// function

function closeSlide() {
    fixedBox.classList.replace('d-flex', 'd-none')

}

function getNextSlide() {
    currIndex++;

    // console.log(currIndex);

    // complete from 0 to 5 and start again from 0 
    if (currIndex == imgsArray.length) {
        currIndex = 0;
    }

    // return the sourse of current img by currIndex
    var source = imgsArray[currIndex].getAttribute('src');

    // console.log(source);

    smallBox.style.backgroundImage = `url(${source})`;
}

function getPrevSlide() {
    currIndex--;

    // console.log(currIndex);

    // complete from 0 to 5 and start again from 0 
    if (currIndex == -1) {
        currIndex = 5;
    }

    // return the sourse of current img
    var source = imgsArray[currIndex].getAttribute('src');
    smallBox.style.backgroundImage = `url(${source})`;
}

// 1) first way
closeBtn.addEventListener('click', closeSlide);

// 2) secound way ==> when i click in any place closed images
fixedBox.addEventListener('click', closeSlide);

smallBox.addEventListener('click', function(e) {
    e.stopPropagation();
});

// next Button
nextBtn.addEventListener('click', getNextSlide);

// previous Button
prevBtn.addEventListener('click', getPrevSlide);



document.addEventListener('keyup', function(event) {
    if (fixedBox.getAttribute("class").includes("d-flex")) {
        // can i use switch case
        if (event.key == "Escape") {
            closeSlide();
        } else if (event.key == "ArrowRight") {
            getNextSlide();

        } else if (event.key == "ArrowLeft") {
            getPrevSlide();
        }
    }
});