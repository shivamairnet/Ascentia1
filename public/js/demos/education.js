// document.addEventListener('mousemove', function (e) {
//     var followMouse = document.getElementById('followMouse');
//     followMouse.style.top = e.clientY + 'px';
//     followMouse.style.left = e.clientX + 'px';
// });

function selectListItem(listItem) {
    $('#list-container li').css('color', 'white');
    $(listItem).css('color', '#0052CD');

    var index = $(listItem).index();
    switch (index) {
        case 0:
            digitizedAdmission();
            break;
        case 1:
            mobileApp();
            break;
        case 2:
            dynamicTrackingModule();
            break;
        case 3:
            studentTrackingModule();
            break;
        case 4:
            busManagement();
            break;
        case 5:
            curriculumManagement();
            break;
        case 6:
            libraryManagement();
            break;
        case 7:
            examinationManagement();
            break;
        case 8:
            staffManagement();
            break;
        case 9:
            humanResourceManagement();
            break;
        case 10:
            portfolioManagement();
            break;
        case 11:
            mediaAppModule();
            break;
        case 12:
            communicationModule();
            break;
        default:
            break;
    }
}

function digitizedAdmission() {
    $("#beyond-bookshell-img").attr("src", "img/education/writing (1) 1.png");
    $("#paragraph").html("<ul><li>Streamline the academic admission process with our platform, from initial inquiry and appointment booking to final registration.</li> <li>Admission staff can easily manage student documents and track applications, while students benefit from secure online payment options for fees like prospectus, application, and admission.</li><li> Optimize efficiency and simplify your admissions process with our user-friendly system.</li></ul>");
}

function mobileApp() {
    $("#beyond-bookshell-img").attr("src", "img/education/knowledge 1.png");
    $("#paragraph").html("<ul><li>Our school CRM efficiently manages Student Academic Portfolios, Lesson Plans  and track Academic Progress.</li> <li>Teachers can assign activities, monitor attendance, manage homework, assignments, and input assessments for personalized learning.</li><li> Parents can access real-time updates on their child’s academic progress, lesson plans, homework, assignments, and achievements through the school app.</li></ul>");
}

function dynamicTrackingModule() {
    $("#beyond-bookshell-img").attr("src", "img/education/receipt 1.png");
    $("#paragraph").html("<ul><li> Our School CRM simplifies student finances with a Dynamic Fee Head feature, allowing admins to customize fee structures for classes, batches, or individual students.</li><li> Create and manage various fee types like registration, brochure, tuition, admission, quarterly, semester fees, and more, ensuring flexibility and streamlined financial management.</li></ul>");
}

function studentTrackingModule() {
    $("#beyond-bookshell-img").attr("src", "img/education/locations 1.png");
    $("#paragraph").html("<ul><li>Our student tracking module enhances security and convenience with QR code-based attendance, real-time facial detection for parental awareness, and a Pick-Up/Drop-Off feature that requires guardians to scan a QR code before picking their child.</li><li> Integrated with a Bus Management Module, which allows administrators and parents to track the real-time location of school buses and contact drivers, ensuring safety at every step.</li></ul>");
}

function busManagement() {
    $("#beyond-bookshell-img").attr("src", "img/education/tracking-app 1.png");
    $("#paragraph").html("<ul><li> Our Bus Management Module enables administrators to optimize bus routes, schedules, and stops for safe and reliable student transportation. </li><li>  It allows easy planning and adjustment of routes based on student locations, traffic patterns, and capacity limits.</li><li>The module also ensures seamless communication with parents and administrators through notifications and alerts about bus schedule changes or delays.</li></ul>");
}

function curriculumManagement() {
    $("#beyond-bookshell-img").attr("src", "img/education/curriculum 1.png");
    $("#paragraph").html("<ul><li> Our Subjects & Curriculum Management module empowers teachers and administrators to define and manage curriculum, courses, and academic programs.</li><li> Admins and teachers can easily create and edit lesson plans with clear learning objectives.</li><li>The module also helps track course curriculum coverage, ensuring seamless coordination of lesson plans and teacher assignments, ultimately improving teaching effectiveness.</li></ul>");
}

function libraryManagement() {
    $("#beyond-bookshell-img").attr("src", "img/education/online-library 1.png");
    $("#paragraph").html("<ul><li> Our School CRM's digital library management module streamlines the use of educational resources with features like e-books, cataloging, book distribution, and inventory management. </li><li> Students and teachers can easily search for and borrow books and e-learning materials. Librarians can maintain up-to-date inventory records, track borrowing patterns, and generate resource usage reports, supporting efficient library management.</li></ul>");
}

function examinationManagement() {
    $("#beyond-bookshell-img").attr("src", "img/education/exam 1.png");
    $("#paragraph").html("<ul><li>Our School CRM's exam module allows examiners to easily create, schedule, and administer various assessments like quizzes, tests, and exams. </li><li>Streamline exam planning, student seating arrangements, classroom allocation management, and invigilator allocation for smooth exam conduct.</li><li> The module also enables efficient review and analysis of exam results, providing teachers, students, and parents with valuable insights into student performance and progress.</li></ul>");
}

function staffManagement() {
    $("#beyond-bookshell-img").attr("src", "img/education/management 1.png");
    $("#paragraph").html("<ul><li> Our School CRM allows administrators to manage staff profiles and set user access controls based on roles and designations.</li><li>It enables monitoring of staff attendance, including check-in and check-out times, by location.</li><li>The staff management module also maintains teacher records while fostering transparency and engagement through communication of staff announcements and achievements.</li></ul>");
}

function humanResourceManagement() {
    $("#beyond-bookshell-img").attr("src", "img/education/teamwork 1.png");
    $("#paragraph").html("<ul><li>The staff management module simplifies recruitment, engagement, and management of institutional staff information. </li><li>Administrators can manage staff profiles, store records, contracts, and performance reviews.</li><li> The module also allows for the planning, scheduling, and management of training programs and workshops to enhance teaching methods.</li><li> Integrated with a payroll module, it ensures accurate automated payroll processing and attendance tracking of teachers for efficient payroll management.</li></ul>");
}

function portfolioManagement() {
    $("#beyond-bookshell-img").attr("src", "img/education/ui-design 1.png");
    $("#paragraph").html("<ul><li> The integrated parent-teacher-student module allows parents to track academic progress, attendance, and school announcements, promoting active parental involvement.</li><li> Staff can manage location-specific attendance, view assigned classes, and more. Students can access assignments, lesson plans, timetables, and learning resources, empowering them to take ownership of their education. </li></ul>");
}

function mediaAppModule() {
    $("#beyond-bookshell-img").attr("src", "img/education/interaction 1.png");
    $("#paragraph").html("<ul><li>The Image Slider and Image Gallery features allow administrators to easily display highlights from school events, sports competitions, cultural performances, and other extracurricular activities. </li><li>Administrators can also upload and share YouTube video links featuring memorable moments or promotional content related to upcoming institutional functions.</li></ul>");
}

function communicationModule() {
    $("#beyond-bookshell-img").attr("src", "img/education/speech-bubble 1.png");
    $("#paragraph").html("<ul><li> Communication module allows administrators to send announcements, newsletters, and important updates through the notice board to specific classes, batches, or individual students. </li><li> Teachers can communicate lesson plans, assignments, and classroom updates to students and parents.</li><li>Additionally, the module supports two-way communication, including WhatsApp integration and chat features, enabling real-time interaction between teachers and parents to address academic concerns and foster the professional development of students.</li></ul>");
}

//section-4

function roleBasedAccess() {
    $("#mastering-library-img").attr("src", "img/travel/woman-scanning-fingerprint-with-futuristic-interface-smart-technology 2.svg");
    $("#mastering-library-h5").text("Role-Based Access");
    $("#mastering-library-p").html("<ul><li>With role-based access feature admins can dynamically assign the roles based on factors such as department, location, or project assignment, ensuring that access rights remain aligned with organizational changes.</li><br/><li>Whether it's processing customer bookings, queries or supervising financial transactions, our Role-Based Access features gives your travel company to hold & change your staff access controls, protecting sensitive information and increase efficiency across the board.</li></ul>");
}

function systemSettings() {
    $("#mastering-library-img").attr("src", "img/travel/businessman-pointing-his-business-presentation-high-technology-digital-screen 1.svg");
    $("#mastering-library-h5").text("System Settings");
    $("#mastering-library-p").html("<ul><li>Through our panel administrators ensure that system settings align with your travel company specific needs and goals.</li><br/><li>From setting up Payment Gateways and Defining User Permissions to customizing Notifications and changing Booking Settings, admins play a pivotal role in optimizing your travel company for seamless business operations. </li></ul>");
}

function orderManagement() {
    $("#mastering-library-img").attr("src", "img/travel/close-up-people-planning-trip 1.svg");
    $("#mastering-library-h5").text("Order Management");
    $("#mastering-library-p").html("<ul><li>Through our platform panel administrators can manage User Accounts, Update Their Information, and monitor their Bookings with customers' Travel & Payment queries.</li><br/><li>By effectively managing the orders, admins facilitate smooth operations, optimize resource allocation, and enhance the overall experience for both travel companies and travelers.</li></ul>");
}

function travelerSupport() {
    $("#mastering-library-img").attr("src", "img/travel/medium-shot-woman-working-office-travel-agency 1.svg");
    $("#mastering-library-h5").text("Traveler Support");
    $("#mastering-library-p").html("<ul><li>Through our panel administrators play a crucial role in providing a seamless travel experience for your customers. </li><br/><li>Admins serve as the primary point of contact for your customers offering travel Guidance & Recommendations, and solutions to enhance their travel experience.</li><br/><li>With a focus on Efficiency and Customer Satisfaction, admins ensure that your customers feel supported and valued every step of the way in their travel journey.</li></ul>");
}