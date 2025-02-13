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

function two() {
    $("#beyond-bookshell-img").attr("src", "img/Enterprise Resource Planning (Industry Page) (1)/Enterprise Resource Planning (Industry Page)/Feature - Customized Reward Catalog.png");
    $("#paragraph").html("<ul> <li> Customizable Reward Categories: Businesses can create and categorize rewards to align with audience preferences.</li><li> Easy Point Redemption: Customers can redeem points seamlessly by scanning a QR code from their mobile devices.</li><li>Dynamic Updates: Businesses can update reward options in real time, ensuring offerings remain fresh and relevant.</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/Complaint Management System - Custom CRM (Industry Page)/Complaint Management System - Custom CRM (Industry Page)/Feature - Priority Complaint Management.png");
    $("#paragraph").html("<ul> <li> Priority Assignment Based on Criteria: The complaint-handling team can prioritize complaints based on severity, impact, and urgency.</li><li>AI-Powered Priority Levels: AI automatically assigns priority levels (High, Medium, or Low) to complaints upon submission, ensuring efficient handling.</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/Enterprise Resource Planning (Industry Page) (1)/Enterprise Resource Planning (Industry Page)/Feature - Compliance & Risk Management.png");
    $("#paragraph").html("<ul> <li>Automated Regulatory Compliance: Track real-time regulatory changes and update compliance rules seamlessly to stay ahead of evolving requirements.</li><li>Risk Assessment & Management: Simulate different risk scenarios to anticipate future outcomes and develop effective mitigation strategies</li><li> Continuous Monitoring & Auditing: Automate auditing with predefined checklists and criteria for efficient and accurate compliance tracking.</li></ul>");
}

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






