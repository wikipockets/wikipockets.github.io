document.addEventListener("DOMContentLoaded", () => {
    // Function to dynamically load components
    function loadComponent(placeholderId, componentPath) {
        fetch(componentPath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${componentPath}: ${response.statusText}`);
                }
                return response.text();
            })
            .then((data) => {
                document.getElementById(placeholderId).innerHTML = data;
            })
            .catch((err) => console.error(err));
    }

    // Load Header and Footer
    loadComponent("header-placeholder", "../components/header.html");
    loadComponent("footer-placeholder", "../components/footer.html");
    loadComponent("terminal-placeholder", "/scripts/itishome.js");

     // Dynamically load itishome.js
     const script = document.createElement("script");
     script.src = "scripts/itishome.js";
     script.defer = true;
     document.body.appendChild(script);
});