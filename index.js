// Function to smoothly scroll to a section
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Function to toggle responsive navbar
  function toggleNavbar() {
    var x = document.getElementById("myNavbar");
    x.classList.toggle("responsive");

    // Toggle visibility of menu items
    var menuItems = document.querySelectorAll('.navbar a');
    menuItems.forEach(function (item) {
      if (x.classList.contains("responsive")) {
        item.style.display = "block";
      } else {
        item.style.display = ""; // Reset the display property to its default
      }
    });
  }

  // Function to redirect to department details page
  function redirectToDepartment(departmentId) {
    window.location.href = `department_details.html?departmentId=${departmentId}`;
  }
  document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting traditionally

  // Collect form data
  const formData = new FormData(event.target);

  // Convert form data to JSON
  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  // Send data to the server
  fetch('/submit_form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonData),
  });

  // Optionally, provide feedback to the user
  alert('Form submitted successfully!');
});

function redirectToMachinaries (){
    window.location.href = `machinary.html`
}