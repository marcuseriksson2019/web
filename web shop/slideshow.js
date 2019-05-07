module.exports = function () {
    
    var slideIndex = [1,0];
    plusSlides(1,1);

    function changeImage() {
      plusSlides(1,1);
    }

    setInterval(changeImage, 4000);

    function plusSlides(n, no) {
      showSlides(slideIndex[no] += n, no);
    }

    function showSlides(n, no) {
      var i;
      var x = document.getElementsByClassName("mySlides2");
      if (n > x.length)
        { slideIndex[no] = 1 }
      if (n < 1)
        { slideIndex[no] = x.length }
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[slideIndex[no]-1].style.display = "block";
    }

}