// document.addEventListener('mousemove', function(e) {
//     var followMouse = document.getElementById('followMouse');
//     followMouse.style.top = e.clientY + 'px';
//     followMouse.style.left = e.clientX + 'px';
//   });
  


function selectListItem(listItem) {
    $('#list-container li').css('color', 'white');
    $(listItem).css('color', '#0052CD');

    var index = $(listItem).index();
    switch (index) {
        
        case 0:
            b2b();
            break;
        case 1:
            b2c();
            break;
        case 2:
            agentSupplier();
            break;
        case 3:
            smartItineraries();
            break;
        case 4:
            realTimePackages();
            break;
        case 5:
            customerSupport();
            break;
        case 6:
            mobileApplication();
            break;
        case 7:
            travelManagement();
            break;
        case 8:
            paymentCollection();
            break;
        case 9:
            travelCommunication();
            break;
        case 10:
            automatedAllocation();
            break;
        case 11:
            invoiceGeneration();
            break;
        case 12:
            reportingAnalysis();
            break;
        default:
            break;
    }
}

function b2b() {
    $("#beyond-bookshell-img").attr("src", "img/travel/Frame1(2).png");
    
    $("#paragraph").html(`
        <ul>
            <li><strong style="text-decoration: underline">B2B Travel Portal</strong> - Our comprehensive B2B travel portal includes several key modules designed to enhance the overall operational efficiency of your travel business. Modules present in our B2B travel portal are:</li>
            <li>A dedicated CRM where you can manage and see all your suppliers, agents, and customers.</li>
            <li>A booking and an inventory management module to streamline reservations worldwide for flights, hotels, tour packages, and car rentals.</li>
            <li>A supplier management module for supplier registration and contract management.</li>
            <li>An API integration module to integrate with multiple third-party APIs, GDS for real-time availability of flights, hotels, transfers, etc.</li>
            <li>A payment management module for handling multiple payment methods, invoicing, and refunds.</li>
            <li>A white labeling module that allows partners to customize and brand the portal as their own.</li>
        </ul>
    `);
}

function b2c() {
    $("#beyond-bookshell-img").attr("src", "img/travel/Frame1(2).png");
    
    $("#paragraph").html(`
        <ul>
            <li><strong style="text-decoration: underline">B2C Travel Portal</strong> - Our B2C travel portal offers intuitive search and booking functionalities, allowing users to effortlessly find and book flights, hotels, and activities online.</li>
            <li>Integration with multiple GDS and other third-party suppliers for flights, hotels, packages, and transfers allows you to sell multiple services under one roof.</li>
            <li>Advanced search filters, a secure payment gateway module, with a multilingual and multi-currency conversion option further opens up the avenue for your travel business to reach the global market.</li>
            <li>A 24x7 AI chatbot to provide continuous support to the customers which will understand and resolve a wide range of customer travel related queries.</li>
        </ul>
    `);
    
}


function agentSupplier() {
    $("#beyond-bookshell-img").attr("src", "img/travel/miscellaneous 1.png");
    $("#paragraph").html("<ul><li>With the help of our <strong>GDS or Third Party Supplier API Integration Module,</strong> the platform allows you to access limitless inventory of <strong>Flights And Hotels, Transfers, Holiday Tours, Activities & Local Travel Destinations </strong> according to their availability & price.</li><li> The integration also allows travel agencies to connect with a <strong>Diverse Range</strong> of Inventory Suppliers, so that travel agencies can provide their customers with their choice of selected inventory.</li> <li>By automating the transfer of data between <strong>GDS, Third Party APIs</strong> and <strong>Travel Agents,</strong> our <strong>TRAVEL CRM</strong> increases efficiency and offers travel technology businesses & customers with a wider range of travel options.</li></ul>");
}


function smartItineraries() {
    $("#beyond-bookshell-img").attr("src", "img/travel/microchip 1.png");
    $("#paragraph").html("<ul><li>Our Custom <strong>TRAVEL CRM</strong> seamlessly understands your client's travel parameters & generates <strong>100% Personalized & Detailed Travel Itineraries</strong> as per your client's personal travel preferences. It splits it into<strong> City-Wise, Day-Wise, Hourly Segments</strong>, keeping in mind nature of the traveler, be it with <strong>Family, Friends, Solo, Couples </strong> & more.</li> <li>With our <strong>Travel Artificial Intelligence - Powered Customizable Smart Itinerary Module</strong>, our platform ensures that we provide your customers with <strong> Customizable Itineraries</strong> in a professional way within few minutes thus reducing the <strong>Itinerary Turn Around Time</strong>, eliminating <strong>Unprofessional Itinerary Data Structure & Last Minute Changes and Cancellations From Consumers</strong>.</li> <li>With <strong>Real-Time Weather, AQI</strong> forecasts & much more, our platform ensure it adapt according to your customers travel preferences.</li></ul>");
}

function realTimePackages() {
    $("#beyond-bookshell-img").attr("src", "img/travel/real-time 1.png");
    $("#paragraph").html("<ul><li>With the help of our <strong>TRAVEL CRM</strong> travel tech companies can create <strong>Personalized Real-Time Travel Package Generator</strong> for their clients.</li><li>Whether consumers are looking for <strong>Adventure, Leisure,</strong> Or <strong>Privacy,</strong> our <strong>Itinerary Integration</strong> with the supplier of your choice module across flights, hotels, sightseeing, activities & transfers, enables our TRAVEL CRM to tailor each  <strong>Travel Package</strong> according to the customers specific travel preferences and requirements, as per their budget and provide them with the best travel deals.</li></ul>");
}

function customerSupport() {
    $("#beyond-bookshell-img").attr("src", "img/travel/conversation 2.png");
    $("#paragraph").html("<ul><li>With our <strong>Travel Artificial Intelligence-Based </strong>customer support feature, our TRAVEL CRM provides travelers with <strong>Personalized</strong> and <strong>Efficient Post Booking Support w.r.t to their specific travel package.</strong></li> <li>Using <strong>Travel Artificial Intelligence- Powered Chatbots</strong> customers can contact and log their queries and our <strong>AI Chatbot</strong> ensure that it will understand & respond to a wide range of customer questions, which ensures fast and accurate assistance 24/7.</li></ul>");
}
function mobileApplication() {
    $("#beyond-bookshell-img").attr("src", "img/travel/mobile-development 1.png");
    $("#paragraph").html("<ul><li>With our integrated <strong>Advanced Traveler Information Mobile App</strong>, our TRAVEL CRM seamlessly connect customers with travel tech companies. </li> <li>From receiving <strong>Travel Package Updates, Flight And Hotel Deals Payment Information, Customer Travel Itinerary Related Queries & Updates</strong>, to interacting with travel tech companies, our mobile app ensures that it provides an all-in-one solution and leaves no stone unturned to enhance customers travel experience.</li></ul>");
}

function travelManagement() {
    $("#beyond-bookshell-img").attr("src", "img/travel/welfare 1.png");
    $("#paragraph").html("<ul><li>With our <strong>Travel Management Module</strong> administrators can effectively manage <strong>Bookings, Reservations</strong> and <strong>Itineraries</strong> created for their customers.</li> <li>The <strong>Lead & Complaint Management Modules</strong> are designed to proactively engage customers daily enquires.</li> <li>Integrated <strong>Sales & Marketing</strong> tools allow travel tech companies to automate <strong>Lead Generation, Customer Relationship Management</strong> and can even target their <strong>Marketing Campaigns.</strong></li> <li><strong>With Real-Time Updates & Notifications Module </strong> travel tech companies can rest assured that their customers are well informed about their travel queries.</li></ul>");
}

function paymentCollection() {
    $("#beyond-bookshell-img").attr("src", "img/travel/cashless-payment 2.png");
    $("#paragraph").html("<ul><li>With our TRAVEL CRM, travel tech companies can offer a <strong>Hassle-Free Online Payment</strong> solution to their customers around the world, eliminating <strong>Demographically Restricted Payment</strong> collections.</li> <li>Our TRAVEL CRM automatically generates an <strong>E-Link</strong> for the travel package, allowing customers to easily click and book their preferred travel package.</li> <li>With secure, fast and reliable online payment collection, customers can conveniently and securely book their <strong>Travel Deals and Services,</strong> like from <strong>Flights and Hotel Packages</strong> to <strong>Travel Packages Deals</strong> and <strong>Activities</strong> improving travel businesses overall booking experience worldwide.</li></ul>");
}
function travelCommunication() {
    $("#beyond-bookshell-img").attr("src", "img/travel/customer-service (1) 1.png");
    $("#paragraph").html("<ul><li>Our platform ensures seamless <strong>Communication Connectivity</strong> when travelers need to update their <strong>Travel Plans,</strong> require customer support for <strong>Pre-Booking</strong> or <strong>Post-Bookings</strong> & much more.</li> <li>With Instant messaging features, like integrated <strong>WhatsApp, E-Link communication for Itinerary & Packages</strong> with many other features, allow travelers to chat with<strong> Customer Support</strong> representatives in <strong>Real-Time,</strong> resolving customers questions, quickly and efficiently.</li> <li>Automatic notifications inform travelers for important updates such as <strong>Flight Delays</strong> or <strong>Travel Itinerary Changes,</strong> minimize disruption and increase overall satisfaction.</li></ul>");
}
function automatedAllocation() {
    $("#beyond-bookshell-img").attr("src", "img/travel/recruitment 1.png");
    $("#paragraph").html("<ul><li>With <strong>Automated Lead Allocation</strong> module, our system allows travel tech companies to assign leads to the most suitable <strong>Sales Representatives</strong> in real time.</li><li>By analyzing various factors such as <strong>Customer Demographics, Preferences</strong> & <strong>Historical Interactions,</strong> the system itself ensures that each lead is sent to the best equipped representative who can handle it and maximize the chances of lead conversion.</li> <li>System also provides information on <strong>Lead Distribution Patterns</strong> & performance metrics, allowing travel tech companies to refine distribution strategies and optimize their sales team productivity.</li></ul>");
}
function invoiceGeneration() {
    $("#beyond-bookshell-img").attr("src", "img/travel/invoice 1.png");
    $("#paragraph").html("<ul><li>With the help of <strong>Automated Invoice Generation</strong> our system helps travel tech companies to eliminate <strong>Manual Entering Invoice Data</strong> and reduces the risk of human error, ensuring accurate and timely billing.</li><li>Through seamless integration with <strong>Booking & Payment Systems,</strong> invoices are automatically created and adjusted based on<strong> Booking Information, Pricing Structures</strong> and <strong>Customer Preferences.</strong></li> <li>Our CRM for Travel Industry also automates the delivery of invoices to customers via <strong>Email</strong> or other desired channels & generates <strong>Automated Notifications</strong> about the pending balance of the customer, which saves both time and resources of the travel tech companies as well as of the customers.</li></ul>");
}
function reportingAnalysis() {
    $("#beyond-bookshell-img").attr("src", "img/travel/dashboard (1) 1.png");
    $("#paragraph").html("<ul><li>The module allows travel tech companies administrators to create customizable <strong>Reports</strong> and <strong>Analyze</strong> key performance metrics from different areas of their <strong>Operations,</strong> including <strong>Sales, Reservations, Customer Relations</strong> and <strong>Financial Transactions.</strong></li><li>Intuitive <strong>Dashboards</strong> and <strong>Visualizations</strong> allow users to easily track <strong>Market Trends,</strong> identify patterns and track KPIs in real-time, enabling predictive adjustment and optimization.</li><li>The system also offers <strong>Advanced Analytics Capabilities</strong> to help travel tech companies to anticipate <strong>Market Trends</strong> and process data-driven strategies & decisions.</li></ul>");
}

