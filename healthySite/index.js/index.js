document.addEventListener('DOMContentLoaded', function () {
    
    var hiddenText = document.getElementById('hiddenText');
    var visibleText = document.getElementById('visibleText');

    var hiddenText2 = document.getElementById('hiddenText');
    var visibleText2 = document.getElementById('visibleText')


    window.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY;

      // Adjust this value based on when you want the text to appear
      var triggerPosition = 170;

      if (scrollPosition > triggerPosition) {
        hiddenText.style.opacity = 1;
        visibleText.style.opacity = 0;

        hiddenText2.style.opacity =1;
        visibleText2.style.opacity =0;
      } else {
        hiddenText.style.opacity = 0;
        visibleText.style.opacity = 1;

        hiddenText2.style.opacity =0;
        visibleText2.style.opacity =1;
      }
    });
  });