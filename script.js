document.addEventListener("DOMContentLoaded", function() {
    const toggleContactBtn = document.getElementById("toggleContactBtn");
    const contactInfo = document.getElementById("contactInfo");
    
    toggleContactBtn.addEventListener("click", function() {
        if (contactInfo.style.display === "none" || contactInfo.style.display === "") {
            contactInfo.style.display = "block";
            toggleContactBtn.textContent = "Hide Contact Info";
        } else {
            contactInfo.style.display = "none";
            toggleContactBtn.textContent = "Show Contact Info";
        }
    });
});