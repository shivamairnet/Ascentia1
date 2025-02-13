
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
            case 10:
            eleven();
            break;
            case 11:
            twelve();
            break;
            case 12:
              thirteen();
              break;
        default:
            break;
    }
  }
  
  function one() {
    $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Logistics Order Management.png");
    $("#paragraph").html(
        "<ul>" +
            "<li>CRM Module: Manage and view suppliers, agents, and customers in a centralized platform.</li>" +
            "<li>Booking & Inventory Management: Streamline global reservations for flights, hotels, tour packages, and car rentals.</li>" +
            "<li>Supplier Management: Simplify supplier registration and contract management.API Integration: Connect with third-party APIs and GDS for real-time availability of flights, hotels, transfers, and more.</li>" +
            "<li>Payment Management: Handle multiple payment methods, invoicing, and refunds seamlessly.</li>" +
            "<li>White Labeling: Enable partners to customize and brand the portal as their own.</li>" +
           
        "</ul>"
    );
}

  
  function two() {
    $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Inventory Management.png");
    $("#paragraph").html("<ul> <li> Intuitive search & booking option, where Users can easily search and book flights, hotels, and activities online.</li><li>GDS & Supplier Integration: Sell multiple services like flights, hotels, packages, and transfers under one platform. </li><li>Global Accessibility: Advanced search filters, multilingual support, and multi-currency conversion expand global reach.</li><li> Secure Payment Gateway: Ensure safe and smooth transactions for customers worldwide.</li><li>24x7 AI Chatbot Support: Provide continuous assistance to customers, resolving a variety of travel-related queries efficiently.</li></ul>");
  }
  

  function three() {
    $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Shipment Management.png");
    $("#paragraph").html("<ul> <li>Extensive Inventory Access: GDS and third-party API integration provide real-time access to flights, hotels, transfers, tours, activities, and local destinations. </li><li> Diverse Supplier Connectivity: Connect with a wide range of inventory suppliers, enabling travel agencies to offer tailored options to customers.</li><li> Enhanced Efficiency: Automated data transfer between GDS, APIs, and agents streamlines operations, expanding travel options for businesses and customers.</li></ul>");
  }
  
  function four() {
    $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Fleet Logistics Fuel Management.png");
    $("#paragraph").html("<ul> <li>Personalized Travel Itineraries: Generate 100% tailored itineraries based on client preferences, segmented city-wise, day-wise, and hourly, considering traveler type (family, friends, solo, etc.).</li><li> AI-Powered Smart Itinerary Module: Create professional, customizable itineraries within seconds, reducing turnaround time and minimizing last-minute changes or cancellations.</li><li>Real-Time Insights: Incorporates real-time weather, AQI forecasts, and more to adapt to customers' travel needs seamlessly.</li></ul>");
  }
  
  function five() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Booking & Scheduling.png");
    $("#paragraph").html("<ul> <li>Real-Time Travel Package Generator: Travel tech companies can create personalized travel packages for clients using our CRM.</li><li>Customizable Packages: Whether travelers are looking for adventure, leisure, or privacy, our CRM integrates itineraries with suppliers (flights, hotels, sightseeing, activities, transfers) to tailor packages based on client preferences, requirements, and budget, offering the best travel deals.</li></ul>");
  }
  
  function six() {
    $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Vehicle Health Management.png");
    $("#paragraph").html("<ul> <li> AI-Powered Customer Support: Our CRM offers personalized post-booking support, tailored to each client's specific travel package.</li><li> 24/7 AI Chatbot Assistance: Travel AI chatbots handle customer queries efficiently, providing fast and accurate responses to a wide range of questions, available round-the-clock. </li></ul>");
  }
  
  // function seven() {
  //     $("#beyond-bookshell-img").attr("src", "img/real-estate/secure-payment 1.png");
  //     $("#paragraph").html("<ul> <li>To facilitate safe online transactions for <strong>Deposits, Rent</strong>, and property acquisitions, our real estate management service has been integrated with <strong>Reputable, Secure, Trusted Payment and Unified Payment Interface and Gateways.</strong></li> <li>Consumers have access to various modes of payments, including <strong> E-Wallets, Online Banking, Credit/Debit Cards, and Bank Transfers for Faster Payments.</strong> </li><li>Our system generates <strong>Instant Payment Receipts</strong> and provides <strong>Real-Time Notifications</strong> to all the parties involved in the transaction.</li></ul>");
  // }
  
  function seven() {
    $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Agency and Warehouse.png");
    $("#paragraph").html("<ul> <li>Advanced Traveler Information Mobile App: Our CRM connects customers with travel tech companies seamlessly, providing an all-in-one solution.</li><li>Comprehensive Features: Customers receive updates on travel packages, flight and hotel deals, payment information, itinerary queries, and more, enhancing their overall travel experience.</li></ul>");
  }
  
  
  function eight() {
    $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Digital Lock Solution.png");
    $("#paragraph").html("<ul> <li>Travel Management Module: Administrators can efficiently manage bookings, reservations, and customer itineraries.</li><li> Lead & Complaint Management: Proactively handle daily customer inquiries, ensuring timely responses.</li><li>Sales & Marketing Tools: Automate lead generation, CRM, and target marketing campaigns to enhance business growth.</li><li>Real-Time Updates & Notifications: Keep customers informed about travel queries with instant updates and notifications.</li></ul>");
  }
  
  function nine() {
    $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Expense Management.png");
    $("#paragraph").html("<ul> <li>Hassle-Free Online Payment: Our CRM offers a global, secure payment solution, eliminating demographic restrictions on payment collections.</li><li> E-Link for Easy Bookings: Automatically generates an E-Link for customers to easily click and book their preferred travel package.</li><li>Secure & Fast Payments: Customers can securely book travel deals, from flights and hotel packages to activities, enhancing the overall booking experience worldwide.</li></ul>");
  }
  
  function ten() {
    $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Driver Behavior Management.png");
    $("#paragraph").html("<ul> <li>Seamless Communication: Our platform ensures easy communication for travelers to update plans or get support before and after bookings.</li><li>Instant Messaging: Features like integrated WhatsApp and E-Link communication allow real-time chat with customer support for quick issue resolution.</li><li> Automatic Notifications: Travelers receive instant updates on important changes like flight delays or itinerary modifications, minimizing disruption and boosting satisfaction.</li></ul>");
  }
  
  function eleven() {
    $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Customer Support.png");
    $("#paragraph").html("<ul> <li> Automated Lead Allocation: Our system assigns leads to the most suitable sales representatives in real-time based on customer demographics, preferences, and past interactions.</li><li> Lead Optimization: Ensures each lead is directed to the best-equipped representative, increasing conversion chances.</li><li>Performance Insights: Provides lead distribution patterns and performance metrics to help travel tech companies refine strategies and boost sales team productivity.</li></ul>");
  }

  function twelve() {
    $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Customer Support.png");
    $("#paragraph").html("<ul> <li> Automated Invoice Generation: Eliminate manual data entry and reduce human error by generating accurate and timely invoices automatically.</li><li> Seamless Integration: Invoices are automatically created and adjusted based on booking information, pricing structures, and customer preferences.</li><li>Automated Delivery & Notifications: Invoices are sent via email or other channels, and customers receive automated notifications about pending balances, saving time and resources for both travel tech companies and customers.</li></ul>");
  }
  function twelve() {
    $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Customer Support.png");
    $("#paragraph").html("<ul> <li> Automated Invoice Generation: Eliminate manual data entry and reduce human error by generating accurate and timely invoices automatically.</li><li> Seamless Integration: Invoices are automatically created and adjusted based on booking information, pricing structures, and customer preferences.</li><li>Automated Delivery & Notifications: Invoices are sent via email or other channels, and customers receive automated notifications about pending balances, saving time and resources for both travel tech companies and customers.</li></ul>");
  }
  

  function thirteen(){
    $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Customer Support.png");
    $("#paragraph").html("<ul> <li> Customizable Reporting: Administrators can create tailored reports and analyze key performance metrics from sales, reservations, customer relations, and financial transactions.</li><li>  Intuitive Dashboards: Visualizations make it easy to track market trends, identify patterns, and monitor KPIs in real-time for optimization.</li><li>Advanced Analytics: Predict market trends and make data-driven decisions, helping travel tech companies adjust strategies for future growth.</li></ul>");
  }
  
  
  
  
  
  
  
  