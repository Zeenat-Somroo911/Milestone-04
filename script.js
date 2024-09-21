// Sections
var workExp = document.querySelector(".workexp-data");
var education = document.querySelector(".education-data");
var skills = document.querySelector(".skills-data");
// Buttons
var workExpBtn = document.getElementById("workexp-btn");
var skillsBtn = document.getElementById("skills-btn");
var educationBtn = document.getElementById("education-btn");
// Event Listeners 
function workExpExpander() {
    var clutter = " ";
    workExpBtn.addEventListener("click", function () {
        clutter += "<label class=\"labels\" for=\"company\">Enter Your Company Name: </label>\n                  <br>\n                  <input class=\"inputs\" type=\"text\" placeholder=\"Company\" id=\"company\">\n                  <br>\n                  <label class=\"labels\" for=\"position\">Enter Your Position: </label>\n                  <br>\n                  <input class=\"inputs\" type=\"text\" placeholder=\"Position\" id=\"position\"> \n                  <br>\n\n                  <label class=\"labels date-labels\" for=\"work-sdate\">Input Start Date: </label>\n                  <br class=\"display-hidden\">\n                  <input class=\"workdates\" type=\"date\" name=\"work-startdate\" id=\"work-sdate\">\n                  <br>\n                  <label class=\"labels date-labels\" for=\"edate\">Input End Date: </label>\n                  <br class=\"display-hidden\">\n                  <input class=\"workdates\" type=\"date\" name=\"enddate\" id=\"work-edate\">\n                  <br>\n                  <label class=\"labels\" for=\"work-desc\">Description: </label>\n                  <br>\n                    <textarea class=\"inputs\" name=\"work-description\" id=\"work-desc\" placeholder=\"Description\"></textarea> \n                  <br>";
        workExp.innerHTML = clutter;
    });
}
;
function skillsExpander() {
    var clutter = " ";
    skillsBtn.addEventListener("click", function () {
        clutter += "<label class=\"labels\" for=\"skill\">Skill Name: </label>\n                  <br>\n                  <input class=\"inputs\" type=\"text\" placeholder=\"Skill\" id=\"skill\">\n                  <br>\n                  <label class=\"labels\" for=\"skill-lvl\">Skill Level: </label>\n                  <br>\n                  <input class=\"inputs\" type=\"text\" placeholder=\"Skill Level\" id=\"skill-lvl\"> \n                  <br>";
        skills.innerHTML = clutter;
    });
}
;
function educationExpander() {
    var clutter = " ";
    educationBtn.addEventListener("click", function () {
        clutter += "<label class=\"labels\" for=\"institution\">Enter Your Institution Name: </label>\n                  <br>\n                  <input class=\"inputs\" type=\"text\" placeholder=\"Intstitution\" id=\"institution\">\n                  <br>\n                  <label class=\"labels\" for=\"degree\">Enter Your Degree: </label>\n                  <br>\n                  <input class=\"inputs\" type=\"text\" placeholder=\"Degree\" id=\"degree\"> \n                  <br>\n\n                  <label class=\"labels date-labels\" for=\"sdate\">Input Start Date: </label>\n                  <br class=\"display-hidden\">\n                  <input class=\"edudates\" type=\"date\" name=\"startdate\" id=\"sdate\">\n                  <br>\n                  <label class=\"labels date-labels\" for=\"edate\">Input End Date: </label>\n                  <br class=\"display-hidden\">\n                  <input class=\"edudates edudate-last\" type=\"date\" name=\"enddate\" id=\"edate\">\n                  <br>";
        education.innerHTML = clutter;
    });
}
;
// Interactivity ends here // 
// Form Input starts here  //
function generateResume() {
    var _a;
    (_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        // Get the input values
        // Personal Information
        var firstNameElement = document.getElementById("fname");
        var lastNameElement = document.getElementById("lname");
        var emailElement = document.getElementById("email");
        var addressElement = document.getElementById("address");
        var phoneNumberElement = document.getElementById("phnumber");
        var profilePicElement = document.getElementById("resume-image");
        // Education Input
        var educationInstitutionElement = document.getElementById("institution");
        var educationDegreeElement = document.getElementById("degree");
        var educationStartDateElement = document.getElementById("sdate");
        var educationEndDateElement = document.getElementById("edate");
        // Work Experience Input
        var experienceCompanyElement = document.getElementById("company");
        var experiencePositionElement = document.getElementById("position");
        var experienceWorkSdateElement = document.getElementById("work-sdate");
        var experienceWorkEdateElement = document.getElementById("work-edate");
        var experienceWorkDescElement = document.getElementById("work-desc");
        // Skills Input
        var skillsNameElement = document.getElementById("skill");
        var skillLvlElement = document.getElementById("skill-lvl");
        if (firstNameElement && lastNameElement && emailElement && addressElement && phoneNumberElement && profilePicElement && educationInstitutionElement && educationDegreeElement && educationStartDateElement && educationEndDateElement && experienceCompanyElement && experiencePositionElement && experienceWorkSdateElement && experienceWorkEdateElement && experienceWorkDescElement && skillLvlElement && skillsNameElement) {
            // Getting values of Elements:
            var name_1 = firstNameElement.value + " " + lastNameElement.value;
            var email = emailElement.value;
            var address = addressElement.value;
            var phnumber = phoneNumberElement.value;
            var profilePictureFile = (_a = profilePicElement.files) === null || _a === void 0 ? void 0 : _a[0];
            var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : " ";
            var educationInstitution = educationInstitutionElement.value;
            var educationDegree = educationDegreeElement.value;
            var educationStartDate = educationStartDateElement.value;
            var educationEndDate = educationEndDateElement.value;
            var experienceCompany = experienceCompanyElement.value;
            var experiencePosition = experiencePositionElement.value;
            var experienceWorkSdate = experienceWorkSdateElement.value;
            var experienceWorkEdate = experienceWorkEdateElement.value;
            var experienceWorkDesc = experienceWorkDescElement.value;
            var skillName = skillsNameElement.value;
            var skillLvl = skillLvlElement.value;
            // Update the resume preview
            var resumeContent = "\n            <div class=\"heading-display\">\n                <h1 class=\"heading-text-display\">Resume</h1>\n            </div>\n\n            <div class=\"main-content\">\n\n\n                <div class=\"img-cont\">\n                 <img class=\"img\" src=\"".concat(profilePictureURL, "\" alt=\"\"> \n                </div>\n\n\n                <div class=\"contactinfo-display\">\n                <h2 class=\"display-headings\">Contact Information:</h2>\n                <p class=\"display-paragraphs\"><strong>Name: </strong> <span class=\"editable\">").concat(name_1, "</span></p>\n                <p class=\"display-paragraphs\"><strong>Phone Number: </strong> <span class=\"editable\">").concat(phnumber, "</span></p>\n                <p class=\"display-paragraphs\"><strong>Email: </strong> <span class=\"editable\">").concat(email, "</span></p>\n                <p class=\"display-paragraphs\"><strong>Address: </strong> <span class=\"editable\">").concat(address, "</span></p>\n                </div>\n\n\n                <div class=\"education-display\">\n                <h2 class=\"display-headings\">Education: </h2>\n                <ul>\n                    <li class=\"display-lis\"><strong>Institution: </strong> <span class=\"editable\">").concat(educationInstitution, "</span></li>\n                    <li class=\"display-lis\"><strong>Degree: </strong> <span class=\"editable\">").concat(educationDegree, "</span></li>\n                    <li class=\"display-lis\"><strong>Start Date: </strong> <span class=\"editable\">").concat(educationStartDate, "</span></li>\n                    <li class=\"display-lis\"><strong>End Date: </strong> <span class=\"editable\">").concat(educationEndDate, "</span></li>\n                </ul>\n                </div>\n\n\n                <div class=\"workexp-display\">\n                <h2 class=\"display-headings\">Work Experience:</h2>\n                <ul>\n                    <li class=\"display-lis\"><strong>Company Name: </strong> <span class=\"editable\">").concat(experienceCompany, "</span></li>\n                    <li class=\"display-lis\"><strong>Position: </strong> <span class=\"editable\">").concat(experiencePosition, "</span></li>\n                    <li class=\"display-lis\"><strong>Start Date: </strong> <span class=\"editable\">").concat(experienceWorkSdate, "</span></li>\n                    <li class=\"display-lis\"><strong>End Date: </strong> <span class=\"editable\">").concat(experienceWorkEdate, "</span></li>\n                    <li class=\"display-lis\"><strong>Description: </strong> <span class=\"editable\">").concat(experienceWorkDesc, "</span></li>\n                </ul>\n                </div>\n\n\n                <div class=\"skills-display\">\n                <h2 class=\"display-headings\">Skills:</h2>\n                <ul>\n                    <li class=\"display-lis\"><strong>Skill: </strong> <span class=\"editable\">").concat(skillName, "</span></li>\n                    <li class=\"display-lis\"><strong>Skill Level: </strong> <span class=\"editable\">").concat(skillLvl, "</span></li>\n                </ul>\n                </div>\n\n\n            </div>\n        ");
            var resumeContainer = document.querySelector(".resume-container");
            resumeContainer.style.borderColor = "rgba(125, 186, 92, 0.5)";
            resumeContainer.innerHTML = resumeContent;
            makeEditable();
        }
        else {
            console.error('One or More Output Elements are Missing');
        }
        ;
    });
}
;
// Form Input Ends here. // 
// Make Editable Starts here. //
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a, _b;
            var currentElement = element;
            var currentValue = ((_a = currentElement.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || ""; // Safely get the text content
            // Create an input element
            var input = document.createElement('input');
            input.type = 'text';
            input.value = currentValue;
            input.classList.add('editing-input');
            // Event listener to handle when input loses focus
            input.addEventListener('blur', function () {
                currentElement.textContent = input.value; // Update the original element's content
                input.remove(); // Remove input field
                currentElement.style.display = 'inline'; // Make the original element visible again
            });
            // Optionally, allow Enter key to save changes
            input.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    input.blur(); // Trigger blur event to save changes
                }
            });
            // Hide the original element and replace with input
            currentElement.style.display = 'none'; // Hide the original element
            (_b = currentElement.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(input, currentElement); // Insert input field
            input.focus(); // Focus on input for editing
        });
    });
}
educationExpander();
skillsExpander();
workExpExpander();
generateResume();
