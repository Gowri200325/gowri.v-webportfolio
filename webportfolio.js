function changeIcon(){
    document.getElementById('change');
    if (change.src.endsWith('Add.png')) {
        change.src = 'Cancel.png';
    } else {
        change.src = 'Add.png';
    }
    document.getElementById('x').classList.toggle("b");
}
function changeIcon1(){
    document.getElementById('change2');
    if (change2.src.endsWith('Add.png')) {
        change2.src = 'Cancel.png';
    } else {
        change2.src = 'Add.png';
    }
    document.getElementById('y').classList.toggle("b");
}
function changeIcon2(){
    document.getElementById('change3');
    if (change3.src.endsWith('Add.png')) {
        change3.src = 'Cancel.png';
    } else {
        change3.src = 'Add.png';
    }
    document.getElementById('z').classList.toggle("b");
}

function xyz(){
  document.getElementById('a').classList.toggle("b");
}
function changeImagesForMobile() {
    const section1Image = document.getElementById('image1');
    const section2Image = document.getElementById('image2');

    if (window.matchMedia("(max-width: 600px)").matches) {
        section1Image.src = 'mobhero.png';
        section2Image.src = 'mobabout.png';
    } else {
        section1Image.src = 'hero.png';
        section2Image.src = 'aboutme.png';
    }
}



changeImagesForMobile();

// Add an event listener to call the function on window resize
window.addEventListener('resize', changeImagesForMobile);

