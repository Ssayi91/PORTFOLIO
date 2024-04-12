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

function showSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    var sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
