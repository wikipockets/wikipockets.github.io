document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('command-input');
    const output = document.getElementById('output');
    const blockCursor = document.getElementById('block-cursor');

    const commands = {
        'ls': "Available commands:\n- about\n- education\n- links\n- exit",
        'about': "Stephen Johnson\nStudent at UNC Charlotte, studying Computer Science with a concentration in Software Engineering.",
        'education': "UNC Charlotte - B.S. in Computer Science\nAssociation for Computing Machinery (ACM) member\nSelf-taught web developer.",
        'links': "Links:\n- home\n- introduction\n- about\n- contract\n- BYO-Intro\n- hobby\n- johnsoncreatives\n       ~ Enter a link name to navigate to the page.",
        'exit': "Exiting the terminal... Please close the tab or navigate away."
    };

    // Link mappings for navigation
    const links = {
        'home': 'https://webpages.charlotte.edu/sjohn388/itis3135/',
        'introduction': 'https://webpages.charlotte.edu/sjohn388/itis3135/introduction.html',
        'about': 'https://webpages.charlotte.edu/sjohn388/itis3135/about.html',
        'contract': 'https://webpages.charlotte.edu/sjohn388/itis3135/contract.html',
        'BYO-Intro': 'https://webpages.charlotte.edu/sjohn388/itis3135/BYO-Intro.html',
        'hobby': 'https://webpages.charlotte.edu/sjohn388/itis3135/hobby/index.html',
        'johnsoncreatives': 'https://webpages.charlotte.edu/sjohn388/itis3135/johnsoncreatives.com/index.html'
    };

    // Event Listener for the Command Input
    commandInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = commandInput.value.trim().toLowerCase();
            commandInput.value = '';

            if (commands[command]) {
                // Display the command output
                output.innerHTML += `C:\\> ${command}\n${commands[command]}\n\n`;
            } else if (links[command]) {
                // Navigate to the link
                window.location.href = links[command];
            } else {
                // Display an error message
                output.innerHTML += `C:\\> '${command}' is not recognized as an internal or external command.\n\n`;
            }

            // Scroll to the bottom of the terminal
            output.scrollTop = output.scrollHeight;
        }
    });

    // Set blinking block cursor position
    commandInput.addEventListener('input', () => {
        blockCursor.style.left = `${commandInput.value.length * 8}px`;
    });

    // Focus the input field on page load
    commandInput.focus();
});