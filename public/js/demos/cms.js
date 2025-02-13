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
        case 9:
            ten();
            break;
        default:
            break;
    }
}

function one() {
    $("#beyond-bookshell-img").attr("src", "img/CMS/complain 2.png");
    $("#paragraph").html("<ul>   <li>Through the Complaint Submission Module, customers can log their complaints through multiple channels like <strong>Online Forms, Emails</strong>, or even from mobile app.</li> <li>Our Complaint Submission Module also involves step-by-step prompts so that users can clearly define their issue by offering relevant <strong>Complaint Category</strong> selection and allowing for any attachments like <strong>Files, Images</strong>, or <strong>Videos</strong>.</li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/CMS/tracking 2.png");
    $("#paragraph").html("<ul><li>With the Complaint Status Tracking Module, users can view their complaint status in <strong>Real-Time</strong> by inputting the <strong>Complaint Reference Number</strong>.</li>  <li>Once the user locate their complaint, our complaint status tracking feature will provide a <strong>Clear</strong> and <strong>Concise</strong> complaint timeline with detailed <strong>Complaint Lifecycle</strong>.</li><li>Also, if users feel that their complaint has not shown any progress, they can file a <strong>Note</strong> on that particular complaint which will be viewed by the <strong>Complaint Handling Team</strong> in order to take desired actions on the complaint. </li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/CMS/priority 1.png");
    $("#paragraph").html("<ul><li>Our Priority Complaint Management provides a feature where the complaint-handling team can prioritize the complaints based on factors such as <strong>Severity, Impact, and Urgency.</strong></li><li>With inbuilt AI, our Priority Complaint Management Module can automatically assign a priority level to complaints like <strong>High-Level, Medium-Level,</strong> or <strong>Low-Level</strong> complaints when a complaint is submitted by the user.</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/CMS/bulb 1.png");
    $("#paragraph").html("<ul> <li>With the Triaging And Initiation feature, the system automatically <strong>Prioritizes</strong> and <strong>Categorizes</strong> each complaint and then directs the complaint directly to the respective business department.</li><li>Our system can automatically queue the complaints for further Triaging from the relevant complaint coordinator/manager.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/CMS/crm 1.png");
    $("#paragraph").html("<ul><li>Integration of <strong>Customer Relationship Management</strong> with our complaint management system, streamlines the entire process by centralizing <strong>Customer Data</strong>, enabling a more <strong>Personalized</strong> and efficient response to each customer complaint.</li> <li>With this integration we provide a unified platform where <strong>Customer Interactions</strong> and <strong>Complaint Histories</strong> are easily accessible, allowing the complaint-handling team to address issues with greater <strong>Accuracy and Speed</strong>. </li></ul>");
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/CMS/ui-design 2.png");
    $("#paragraph").html("<ul> <li>With our dedicated Complaint Management Mobile Application, users can <strong>Easily and Quickly</strong> lodge complaints from their mobile devices with desired <strong>Descriptions</strong> and <strong>Categorization</strong> options. </li><li>With real-time notification updates, users can get a clear picture about the Progress of their complaints and can even talk with the desired complaint-handling team through the in-app <strong>Messaging Feature</strong> to get <strong>Prompt Feedback</strong> about their complaints.</li></ul>");
}

function seven() {
    $("#beyond-bookshell-img").attr("src", "img/CMS/feedback 1.png");
    $("#paragraph").html("<ul> <li>With Feedback Mechanism in our complaint management system, users can provide valuable <strong>Feedback</strong>, with <strong>Ratings</strong> across <strong>Different Parameters</strong> and <strong>Detailed Comments</strong> helping businesses to improve in the areas in which they lack the most.</li> <li>Also to enrich the user experience we have integrated the <strong>Feedback Mechanism</strong> in the <strong>Complaint Lifecycle Stage</strong> with an <strong>Automated Follow-Up</strong> feature so that the consumer complaint is heard at every stage.</li></ul>");
}

function eight() {
    $("#beyond-bookshell-img").attr("src", "img/CMS/monitor 1.png");
    $("#paragraph").html("<ul><li>With our Advanced Data Analytics & Reporting feature, businesses can delve deeply into <strong>Complaint Trends</strong>, discover <strong>Reoccurring Issues</strong>, and accurately <strong>Evaluate Consumer Complaints</strong>. </li><li>Customizable reporting dashboards provide stakeholders with <strong>Real-Time</strong> visibility into important <strong>Key Performance Indicators</strong>, enabling <strong>Proactive Intervention</strong> and continuous improvement programs.</li></ul>");
}