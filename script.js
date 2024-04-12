document.addEventListener("DOMContentLoaded", function () {
  
    var aboutme = document.getElementById("aboutme");
    var AboutMeButton=document.getElementById(aboutme);

    // Add click event listener to the button
    AboutMebutton.addEventListener("click", function () {
        
        if (aboutme.style.display === "none")   {
            aboutme.style.display = "block";
            AboutMeButton.textContent = "hide"; 
        } else {
            aboutme.style.display = "none";
            AboutMeButton.textContent = "About Me";
        }
    });
});
