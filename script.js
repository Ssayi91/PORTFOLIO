document.addEventListener("DOMContentLoaded", function () {
  
    var AboutMebutton = document.getElementById("seeMoreButton");
    var gallery = document.getElementById("gallery");

    // Add click event listener to the button
    AboutMebutton.addEventListener("click", function () {
        
        if (gallery.style.display === "none") {
            gallery.style.display = "block";
            seeMoreButton.textContent = "See Less"; 
        } else {
            gallery.style.display = "none";
            seeMoreButton.textContent = "See More";
        }
    });
});