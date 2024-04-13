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

document.getElementById("showDesignsBtn").addEventListener("click", function() {
    var designsContainer = document.getElementById("designsContainer");
    designsContainer.style.display = (designsContainer.style.display === "none") ? "block" : "none";
});

document.getElementById("seeDesignsBtn").addEventListener("click", function() {
    var designsContainer = document.getElementById("designContainer");
    designsContainer.style.display = (designContainer.style.display === "none") ? "block" : "none";
});