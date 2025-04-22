fetch("menu.html")
.then(response => response.text())
.then(data => {
    document.getElementById("menu").innerHTML = data;
    // Now that the menu is loaded, handle the active class
    const currentPath = window.location.pathname.split("/").pop();
    // Find all menu items
    const menuItems = document.querySelectorAll(".nav li");
    // Loop through menu items to find the active one
    menuItems.forEach(item => {
        const link = item.querySelector("a");
        if (link && link.getAttribute("href") === currentPath) {
            item.classList.add("current-menu-item");  // Add active class to the current page
        }
    });
})
.catch(error => console.error('Error loading menu:', error));
