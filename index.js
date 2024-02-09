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
    window.location.href = `components/departments/department_details.html?departmentId=${departmentId}`;
  }

  function clearFormFields() {
    // Reset the form fields after the button is clicked
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }

function redirectToMachinaries (){
    window.location.href = `machinary.html`
}
function redirectToAboutPage (){
  window.location.href = `about.html`
}