var toggleButton = document.getElementById('toggleButton');
if (toggleButton && skillsDiv) {
    toggleButton.addEventListner;
    {
        'click', function () {
            if (skillsDiv.style.display === 'none') {
                skillsDiv.style.display = 'block';
                toggleButton.value = "Hide Skills";
            }
            else {
                skillsDiv.style.display = 'none';
                toggleButton.value = "Show Skills";
            }
        };
    }
}
else {
    console.log("Required element not found in the DOM");
}
