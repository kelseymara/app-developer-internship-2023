// https://www.w3schools.blog/email-validation-javascript-js
function isValidEmail(email) {
  var mailFormat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return mailFormat.test(email);
}

/* event listener: wait for user interaction like a click or keypress and 
then run some code whenever that action happens */
document
  .getElementById("courseForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission action (ex. prevent form being submitted immediately )

    // event.target refers to the HTML form
    var form = event.target;

    var courseList = document.getElementById("courseList"); // Access courseList directly by ID

    var UINValue = form.elements.UINInput.value;
    var emailValue = form.elements.email.value;

    var selectedGrade = form.elements.grade.value;
    var selectedSemesterOption =
      form.elements.semesterSelect.options[
        form.elements.semesterSelect.selectedIndex
      ];

    // Arrays
    var missingInputs = [];
    var invalidInputs = [];
    var checkedCourses = []; // Store checked courses

    // iterate to see what courses are checked
    var courseCheckboxes = Array.from(form.elements.courses);
    courseCheckboxes.forEach(function (checkbox) {
      if (checkbox.checked) checkedCourses.push(checkbox.value);
    });

    // Validating Inputs
    if (!UINValue) {
      missingInputs.push("UIN");
    }

    if (!emailValue) {
      missingInputs.push("Email");
    }
    // check if email is valid format
    else if (!isValidEmail(emailValue)) {
      invalidInputs.push("Email");
    }

    if (selectedSemesterOption.value == "") {
      missingInputs.push("Semester");
    }

    if (!selectedGrade) {
      missingInputs.push("Grade");
    }

    // if (selectedCourseOption.value=="") {
    //   missingInputs.push("Course");
    // }
    if (checkedCourses.length == 0) {
      missingInputs.push("Course");
    }

    if (missingInputs.length > 0) {
      var msg = "Please enter: " + missingInputs;
      alert(msg);
    }

    if (invalidInputs.length > 0) {
      var invalidMsg = "Please enter a valid " + invalidInputs.join(" , ");
      alert(invalidMsg);
    }

    if (missingInputs.length == 0 && invalidInputs.length == 0) {
      checkedCourses.forEach(function (courseName) {
        // List item
        var listItem = document.createElement("li");
        listItem.textContent = courseName;

        courseList.appendChild(listItem);
      });
    }

    // resets all the form fields
    form.reset();
  });
