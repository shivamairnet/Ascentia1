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
            one();
            break;
        case 1:
            two();
            break;
        case 2:
            three();
            break;
        case 3:
            four();
            break;
        case 4:
            five();
            break;
        case 5:
            six();
            break;
        case 6:
            seven();
            break;
        case 7:
            eight();
            break;
        case 8:
            nine();
            break;
        default:
            break;
    }
}

function one() {
    $("#beyond-bookshell-img").attr("src", "img/Complaint Management System - Custom CRM (Industry Page)/Complaint Management System - Custom CRM (Industry Page)/Feature - Complaint Submission.png");
    $("#paragraph").html("<ul><li> Multiple Channels for Submission: Customers can easily log complaints through online forms, emails, or the mobile app.</li><li> Guided Complaint Process: Step-by-step prompts help users define their issue clearly, including selecting relevant complaint categories.</li><li> Attachment Support: Users can attach files, images, or videos to provide additional context for their complaint. </li></ul>");
}

// function two() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/map 1.png");
//     $("#paragraph").html("<ul><li>With map integration, customers can easily find a property based on their preferred <strong>Geographic Location, Area Amenities</strong>, and proximity to <strong>Significant Landmarks</strong>.</li><li>Real estate business service providers and customers can acquire vital information about the surrounding area of the particular real estate property, such as<strong> Schools, Parks, Restaurants, and Public Transportation Choices </strong>, allowing them to make more informed decisions. </li><li>Furthermore, the map integration function allows clients to find a property in their nearby <strong> Locality</strong>, making the overall property search process easy.</li></ul>");
// }

function two() {
    $("#beyond-bookshell-img").attr("src", "img/Complaint Management System - Custom CRM (Industry Page)/Complaint Management System - Custom CRM (Industry Page)/Feature - Complaint Status Tracking.png");
    $("#paragraph").html("<ul> <li> Real-Time Tracking: Users can input their complaint reference number to view the status in real-time.</li><li> Complaint Lifecycle: The module provides a clear and concise timeline, detailing each stage of the complaint's progress.</li><li> File a Note for Action: If users feel their complaint hasn't progressed, they can file a note, which will be reviewed by the Complaint Handling Team for further action.</li></ul>");
}


// function three() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/tenant 1.png");
//     $("#paragraph").html("<ul><li>With tenant management real estate business service providers can handle <strong>Tenant Data</strong>, including <strong>Lease Agreements, Contact Information, and Rental Payment History</strong>.</li><li>Lease management functionalities enable real estate business service providers can <strong>Generate, Monitor, and Change Lease Agreements</strong>, including <strong>Terms, Rent Amounts, and Renewal Dates</strong>.</li><li>Integration with the payment module helps the real estate business service providers to get <strong>Timely and Easy Payment Collection.</strong></li></ul>");
// }
function three() {
    $("#beyond-bookshell-img").attr("src", "img/Complaint Management System - Custom CRM (Industry Page)/Complaint Management System - Custom CRM (Industry Page)/Feature - Priority Complaint Management.png");
    $("#paragraph").html("<ul> <li> Priority Assignment Based on Criteria: The complaint-handling team can prioritize complaints based on severity, impact, and urgency.</li><li>AI-Powered Priority Levels: AI automatically assigns priority levels (High, Medium, or Low) to complaints upon submission, ensuring efficient handling.</li></ul>");
}


// function four() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/booking 1.png");
//     $("#paragraph").html("<ul><li>Booking and scheduling allow customers to conveniently plan <strong>Property Viewings, Appointments</strong> with real estate business service providers, and other real estate-related activities. </li><li>Customers can quickly browse available <strong>Time Slots</strong>, choose the most convenient alternative, and <strong>Schedule Appointments</strong> straight through the system. </li><li>Real estate agents and property owners may easily manage their <strong>Availability, see Planned Appointments</strong>, and collaborate with customers.</li></ul>");
// }

function four() {
    $("#beyond-bookshell-img").attr("src", "img/Complaint Management System - Custom CRM (Industry Page)/Complaint Management System - Custom CRM (Industry Page)/Feature - Triaging.png");
    $("#paragraph").html("<ul> <li>Automatic Prioritization and Categorization: The system automatically categorizes and prioritizes complaints based on predefined criteria.</li><li>Direct Assignment to Relevant Department: Complaints are automatically routed to the appropriate business department for prompt resolution.</li><li>Complaint Queueing for Review: The system queues complaints for triaging by the relevant complaint coordinator or manager, ensuring efficient follow-up.</li></ul>");
}

// function five() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/mortgage-loan 1.png");
//     $("#paragraph").html("<ul><li>We have incorporated a variety of variables in our mortgage rates calculator, such as <strong>Property Price, Down Payment Amount, Loan Length, and Interest Rates</strong>, to create accurate monthly mortgage payment forecasts. </li> <li>To provide a more complete picture of overall housing expenditures, we included variables such as<strong> Property Taxes and Insurance</strong> fees in the advanced calculator option. </li> <li>Real-estate business service providers can use a mortgage rates calculator to show how <strong>Principal and Mortgage Interest Payments</strong> are distributed over the <strong>Loan Period</strong>, assisting their clients in comprehending the long-term financial analysis.</li></ul>");
// }

function five() {
    $("#beyond-bookshell-img").attr("src", "img/Complaint Management System - Custom CRM (Industry Page)/Complaint Management System - Custom CRM (Industry Page)/Feature - CRM Integration.png");
    $("#paragraph").html("<ul> <li>Centralized Customer Data: Integration consolidates customer information, providing a unified view for more personalized and efficient complaint handling.</li><li>Access to Complaint History: The system allows the complaint-handling team to quickly view past interactions and histories, improving accuracy and response speed.</li><li>Streamlined Response Process: With CRM integration, the team can address complaints faster and more effectively, ensuring a seamless customer experience.</li></ul>");
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/Complaint Management System - Custom CRM (Industry Page)/Complaint Management System - Custom CRM (Industry Page)/Feature - Dedicated Mobile Application.png");
    $("#paragraph").html("<ul> <li>Easy Complaint Submission: Users can quickly lodge complaints from their mobile devices, with options for detailed descriptions and categorization.</li><li> Real-Time Notifications: Get instant updates on the progress of complaints, ensuring users are always in the loop.</li><li> In-App Messaging:The messaging feature allows direct communication with the complaint-handling team for prompt feedback and issue resolution.</li></ul>");
}

function seven() {
    $("#beyond-bookshell-img").attr("src", "img/Complaint Management System - Custom CRM (Industry Page)/Complaint Management System - Custom CRM (Industry Page)/Feature - Feedback Mechanism.png");
    $("#paragraph").html("<ul> <li>Customer Feedback: Users can provide valuable feedback with ratings across different parameters and detailed comments, helping businesses identify areas for improvement.</li><li>Automated Follow-Ups: The feedback mechanism is integrated at each complaint lifecycle stage, ensuring automated follow-ups that keep customers informed and engaged throughout the process.</li></ul>");
}

function eight() {
    $("#beyond-bookshell-img").attr("src", "img/Complaint Management System - Custom CRM (Industry Page)/Complaint Management System - Custom CRM (Industry Page)/Feature - Reporting & Analytics.png");
    $("#paragraph").html("<ul> <li>Complaint Trends Analysis: Businesses can analyze complaint trends to identify recurring issues and track the effectiveness of their complaint resolution strategies.</li><li>Real-Time KPI Dashboards: Customizable dashboards provide stakeholders with real-time visibility into key performance indicators, helping drive proactive interventions and ongoing improvements in the complaint handling process.</li></ul>");
}






