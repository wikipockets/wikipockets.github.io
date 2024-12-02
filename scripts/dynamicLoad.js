document.addEventListener("DOMContentLoaded", function() {
    // Fetch header JSON data
    fetch("./components/header.json")
        .then((response) => response.json())
        .then((data) => {
            // Process JSON data
            const headerContainer = document.getElementById("header-container");
            const header = document.createElement("header");
            const headerNavDefault = document.createElement("nav");
            const headerNavSpecial = document.createElement("nav");
            data.forEach((item) => {
                //check if item is an <a> element
                if (item.element === "a" && (item.nav === "default" || item.nav === "special")) {

                    if (item.nav === "default") { //add default items to default nav
                        const headerNavItemDefault = document.createElement("a"); //create a element
                        headerNavItemDefault.textContent = item.name; //name element
                        headerNavItemDefault.href = item.url; //give element url
                        headerNavDefault.appendChild(headerNavItemDefault);
                    } else if (item.nav === "special") { //add special items to special nav
                        const headerNavItemSpecial = document.createElement("a"); //create a element
                        headerNavItemSpecial.textContent = item.name; //name element
                        headerNavItemSpecial.href = item.url; //give element url
                        headerNavItemSpecial.setAttribute("target", "_blank"); //set target to blank
                        headerNavSpecial.appendChild(headerNavItemSpecial);
                    }
                } else { //if element is not an <a>
                    const headerElement = document.createElement(item.element); //create element of specified type

                    if (item.name !== null) { //check if there is a text field
                        headerElement.textContent = item.name; //add text to element
                    }
                    header.appendChild(headerElement);
                }

                //append elements to header container
                headerContainer.appendChild(header);
                header.appendChild(headerNavDefault);
                header.appendChild(headerNavSpecial);

            });
        })
        .catch((error) => console.error("Error fetching header elements:", error));

    fetch("./components/footer.json")
        .then((response) => response.json())
        .then((data) => {
            // Process JSON data
            const footerContainer = document.getElementById("footer-container");
            const footer = document.createElement("footer");
            const footerNav = document.createElement("nav");
            data.forEach((item) => {
                //check if item is an <a> element
                if (item.element === "a" && item.nav === "default") {

                    const footerNavItem = document.createElement("a"); //create a element
                        footerNavItem.textContent = item.name; //name element
                        footerNavItem.href = item.url; //give element url
                        footerNavItem.setAttribute("target", "_blank"); //set target to blank
                        footerNav.appendChild(footerNavItem);
                } else { //if element is not an <a>
                    const footerElement = document.createElement(item.element); //create element of specified type

                    if (item.name !== null) { //check if there is a text field
                        footerElement.textContent = item.name; //add text to element
                    }

                    if (item.url !== null) { //check if there is a text field
                        footerElement.href = item.url; //add text to element
                    }

                    if (item.target !== null) { //check if there is a text field
                        footerElement.setAttribute("target", item.target); //add text to element
                    }
                    
                    footer.appendChild(footerElement);
                }

                //append elements to footer container
                footerContainer.appendChild(footer);
                footer.appendChild(footerNav);
            });
        })
        .catch((error) => console.error("Error fetching footer elements:", error));
});