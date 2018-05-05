document.addEventListener("DOMContentLoaded", function () {

    //rozwijalne menu
    var liElements = document.querySelectorAll("ol>li");
    var liFirstChild = document.getElementById("ulList");

    function showMenu () {
        liFirstChild.style.display = "block";
    }
    
    function hideMenu () {
        liFirstChild.style.display = "none";
    }

    for (var i=0; i<liElements.length; i++) {
        liElements[i].addEventListener("mouseover", showMenu);
    }

    for (i=0; i<liElements.length; i++) {
        liElements[i].addEventListener("mouseout", hideMenu);
    }

    //schowanie bloku na zdjęciach

    var photoFirst = document.querySelector(".clair img"); //pierwsze zdjęcie
    var photoSecond = document.querySelector(".margarita img"); //drugie zdjęcie
    var overlayClass = document.getElementsByClassName("overlay");



    function hideBlockFirst() {
        photoFirst.style.zIndex = "4";
        overlayClass[0].style.zIndex = "-2";
        console.log("test");
    }

    function hideBlockSecond() {
        photoSecond.style.zIndex = "4";
        overlayClass[1].style.zIndex = "-2";
        console.log("test");
    }

    photoFirst.addEventListener("mouseover", hideBlockFirst);
    photoSecond.addEventListener("mouseover", hideBlockSecond);


    //slider

    var prevButton = document.getElementById("prevButton");
    var nextButton = document.getElementById("nextButton");
    var elementList = document.querySelectorAll(".slider li");

    var imageIndex = 0;


    elementList[imageIndex].classList.add("visible");


    //funkcja zwiększająca index zdjęcia
    function advance(index) {
        if (index >= elementList.length-1) {
            return 0;
        } else {
            return index + 1;
        }

    }

    //funkcja zmniejszająca index zdjęcia
    function reverse(index){
        if (index <= 0) {
            return elementList.length-1;
        } else {
            return index - 1;
        }
    }

    function addClikNext () {
        var newIdx = advance(imageIndex);
        elementList[imageIndex].classList.remove("visible");
        elementList[newIdx].classList.add("visible");
        imageIndex = newIdx;

    }

    nextButton.addEventListener("click",addClikNext);

    function addClickPrev() {
        var newIndex = reverse(imageIndex);
        elementList[imageIndex].classList.remove("visible");
        elementList[newIndex].classList.add("visible");
        imageIndex = newIndex;
    }

    prevButton.addEventListener("click", addClickPrev);


  });






























































