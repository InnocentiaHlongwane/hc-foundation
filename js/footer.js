fetch("footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
    // Now that the footer is loaded, handle the active class
    const currentPath = window.location.pathname.split("/").pop();
    // Find all footer items
    const menuItems = document.querySelectorAll(".nav li");
    // Loop through footer items to find the active one
    menuItems.forEach(item => {
        const link = item.querySelector("a");
        if (link && link.getAttribute("href") === currentPath) {
            item.classList.add("current-footer-item");  // Add active class to the current page
        }
    });
})
.catch(error => console.error('Error loading footer:', error));
