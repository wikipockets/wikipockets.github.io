document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introform");
    const output = document.getElementById("output");
    const coursesDiv = document.getElementById("courses");
    const addCourseButton = document.getElementById("addcourse");

    // Add Course Functionality
    addCourseButton.addEventListener("click", () => {
        const courseInput = document.createElement("input");
        courseInput.type = "text";
        courseInput.name = "course[]";
        courseInput.placeholder = "Enter a course";
        courseInput.required = true;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            coursesDiv.removeChild(courseInput);
            coursesDiv.removeChild(deleteButton);
        });

        coursesDiv.appendChild(courseInput);
        coursesDiv.appendChild(deleteButton);
    });

    // Submit Form
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Validate Image File Type
        const image = document.getElementById("image");
        const validImageTypes = ["image/png", "image/jpeg"];
        if (image.files.length > 0 && !validImageTypes.includes(image.files[0].type)) {
            alert("Please upload a PNG or JPG image.");
            return;
        }

        // Gather Form Data
        const formData = new FormData(form);
        let formOutput = "<h3>Your Custom Introduction</h3>";

        for (const [key, value] of formData.entries()) {
            if (key === "course[]") {
                formOutput += `<p><strong>Course:</strong> ${value}</p>`;
            } else if (key === "image") {
                if (image.files.length > 0) {
                    const imageURL = URL.createObjectURL(image.files[0]);
                    formOutput += `<p><strong>Image:</strong><br><img src="${imageURL}" alt="User Image" style="max-width:300px;"><br>`;
                }
            } else if (key !== "agreement") {
                formOutput += `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`;
            }
        }

        // Output the Result
        output.innerHTML = formOutput;

        // Hide Form
        form.style.display = "none";
    });

    // Reset Form
    form.addEventListener("reset", () => {
        output.innerHTML = "";
        form.style.display = "block";
    });
});
