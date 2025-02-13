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
        case 10:
            eleven();
            break;
        case 11:
            twelve();
            break;
        default:
            break;
    }
}

function one() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Property Inventory Management.png");
    $("#paragraph").html("<ul><li>Property Management system enables real estate business service providers, property brokers to <strong> List, Exhibit, and Manage </strong> real estate properties.</li><li>Real-estate business providers and property professionals can quickly upload Property Details, High-Resolution <strong> Property Pictures, Realistic Property Videos </strong>, and <strong>Virtual Tours. </strong></li><li>Our property management system also allows real-estate business providers to manage <strong> Property Listings</strong>, including <strong>Editing Property Details</strong>, updating their <strong>Availability</strong>, and receiving <strong>Real-Time</strong> notifications for property inquiries, making our system best property management software system. </li></ul>");
}

// function two() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/map 1.png");
//     $("#paragraph").html("<ul><li>With map integration, customers can easily find a property based on their preferred <strong>Geographic Location, Area Amenities</strong>, and proximity to <strong>Significant Landmarks</strong>.</li><li>Real estate business service providers and customers can acquire vital information about the surrounding area of the particular real estate property, such as<strong> Schools, Parks, Restaurants, and Public Transportation Choices </strong>, allowing them to make more informed decisions. </li><li>Furthermore, the map integration function allows clients to find a property in their nearby <strong> Locality</strong>, making the overall property search process easy.</li></ul>");
// }

function two() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Broker Management Solution.png");
    $("#paragraph").html("<ul> <li>Store detailed broker profiles, including contact info, commission structures, projects, and communication history.</li><li>System can automatically calculate and process broker payments based on predefined commission rates when a property is listed for sale.</li><li>Reporting and analytics help assess broker performance, project profitability, and identify improvement areas.</li></ul>");
}


// function three() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/tenant 1.png");
//     $("#paragraph").html("<ul><li>With tenant management real estate business service providers can handle <strong>Tenant Data</strong>, including <strong>Lease Agreements, Contact Information, and Rental Payment History</strong>.</li><li>Lease management functionalities enable real estate business service providers can <strong>Generate, Monitor, and Change Lease Agreements</strong>, including <strong>Terms, Rent Amounts, and Renewal Dates</strong>.</li><li>Integration with the payment module helps the real estate business service providers to get <strong>Timely and Easy Payment Collection.</strong></li></ul>");
// }
function three() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Tenant Management.png");
    $("#paragraph").html("<ul> <li>Tenant management allows handling tenant data, including lease agreements, contact info, and payment history.</li><li>Lease management lets providers generate, monitor, and modify lease agreements, terms, rent, and renewal dates.</li><li>Integration with payment module ensures timely and easy payment collection.</li></ul>");
}


// function four() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/booking 1.png");
//     $("#paragraph").html("<ul><li>Booking and scheduling allow customers to conveniently plan <strong>Property Viewings, Appointments</strong> with real estate business service providers, and other real estate-related activities. </li><li>Customers can quickly browse available <strong>Time Slots</strong>, choose the most convenient alternative, and <strong>Schedule Appointments</strong> straight through the system. </li><li>Real estate agents and property owners may easily manage their <strong>Availability, see Planned Appointments</strong>, and collaborate with customers.</li></ul>");
// }

function four() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Rental Management.png");
    $("#paragraph").html("<ul> <li>Track rental properties, including their availability and condition.</li><li>Advanced scheduling tools help businesses allocate properties, manage rental durations, and set return dates.</li><li>Reporting and analytics provide insights into rental utilization, revenue, and inventory trends for better decision-making.</li></ul>");
}

// function five() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/mortgage-loan 1.png");
//     $("#paragraph").html("<ul><li>We have incorporated a variety of variables in our mortgage rates calculator, such as <strong>Property Price, Down Payment Amount, Loan Length, and Interest Rates</strong>, to create accurate monthly mortgage payment forecasts. </li> <li>To provide a more complete picture of overall housing expenditures, we included variables such as<strong> Property Taxes and Insurance</strong> fees in the advanced calculator option. </li> <li>Real-estate business service providers can use a mortgage rates calculator to show how <strong>Principal and Mortgage Interest Payments</strong> are distributed over the <strong>Loan Period</strong>, assisting their clients in comprehending the long-term financial analysis.</li></ul>");
// }

function five() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Booking & Scheduling.png");
    $("#paragraph").html("<ul> <li>Customers can conveniently plan property viewings, and set appointments with real estate service providers.</li><li>Customers can quickly browse available time slots, choose the most convenient alternative, and schedule appointments.</li><li>Real estate agents and property owners may easily manage their availability, view booked appointments, and communicate with customers.</li></ul>");
}

// function six() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/heart 2.png");
//     $("#paragraph").html("<ul> <li>With multiple language support features customers can navigate through <strong>Property Listings and Descriptions</strong> in their preferred language. </li> <li>With our smart multi-currency converter support function, real estate business service providers can <strong>Streamline Transactions and Financial Interactions</strong> by allowing their clients to<strong> View and Display Property Pricing</strong> based on geographic region.  </li> <li>Furthermore, with multiple language support and currency converter options, real estate business service providers can expand their <strong>Operations Internationally, removing Currency Conversion and Language Hurdles</strong>.</li></ul>");
// }

function six() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Map Integration.png");
    $("#paragraph").html("<ul> <li>Customers can easily find properties based on their preferred geographic locations, and area amenities.</li><li>Real estate providers and customers can acquire vital information about the amenities in the surrounding areas such as schools, parks, restaurants, and public transportation.</li><li>Customers can easily view the new and real-time availability of property listings to make more informed decision making.</li></ul>");
}

// function seven() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/secure-payment 1.png");
//     $("#paragraph").html("<ul> <li>To facilitate safe online transactions for <strong>Deposits, Rent</strong>, and property acquisitions, our real estate management service has been integrated with <strong>Reputable, Secure, Trusted Payment and Unified Payment Interface and Gateways.</strong></li> <li>Consumers have access to various modes of payments, including <strong> E-Wallets, Online Banking, Credit/Debit Cards, and Bank Transfers for Faster Payments.</strong> </li><li>Our system generates <strong>Instant Payment Receipts</strong> and provides <strong>Real-Time Notifications</strong> to all the parties involved in the transaction.</li></ul>");
// }

function seven() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Mortage Calculator.png");
    $("#paragraph").html("<ul> <li>Our mortgage rate calculator works on a variety of factors such as property price, down payment amount, loan length, and interest rates, to create accurate monthly mortgage payment forecasts.</li><li>The advanced calculator includes property taxes and insurance fees for a complete picture of housing costs.</li><li>Real estate providers can use the calculator to show how principal and interest payments are distributed over the loan period, helping clients understand long-term financial commitments.</li></ul>");
}

// function eight() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/device 1.png");
//     $("#paragraph").html("<ul><li>Our real estate system is accessible to real estate business service providers and clients on a variety of operating systems, including <strong>Web, Android, and iOS.</strong> </li><li>Regardless of the device users are using, we've made sure that our real estate management services can be enjoyed in a consistent experience by optimizing system’s <strong>Functionality and Design</strong> for various platforms.  </li><li>Furthermore, our real-estate system's multi-platform flexibility expands its user base and reach, allowing real estate business service providers to connect with a larger audience on a variety of <strong>Digital platforms and Devices.</strong></li></ul>");
// }

function eight() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature Multi Language.png");
    $("#paragraph").html("<ul> <li>Multiple language support lets customers navigate property listings and descriptions in their preferred language.</li><li>The multi-currency converter streamlines transactions by allowing clients to view property prices based on their region.</li><li>With language and currency options, real estate providers can expand internationally, overcoming language and currency barriers.</li></ul>");
}

function nine() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Secure Payment.png");
    $("#paragraph").html("<ul> <li>Our system integrates with secure payment gateways and UPI for safe online transactions related to deposits and rent.</li><li>Consumers can pay using e-wallets, online banking, credit/debit cards, or bank transfers for faster payments.</li><li>Instant payment receipts and real-time notifications are generated for all parties involved in the transaction.</li></ul>");
}

// function nine() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/exam 2.png");
//     $("#paragraph").html("<ul><li>Integration with the Multiple Listing Service (MLS) allows the real estate business service providers to access a comprehensive <strong>Database of Properties</strong> listed by real estate property professionals, ensuring <strong>Up-To-Date</strong> and accurate property listings for their users. </li><li>With <strong>Advanced Search</strong> feature in our MLS, enables the users to filter properties according to particular parameters like <strong>Location, Price Range, Property Type, and Amenities.</strong></li> <li>The smooth coordination of <strong>Property Viewings, Payment Negotiations, and Transactions</strong> is made possible in our MLS integration, which facilitates communication between <strong>Property Buyers, and Sellers.</strong></li></ul>");
// }

function ten() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Multi Platform.png");
    $("#paragraph").html("<ul> <li>Our real estate system is accessible on Web, Android, and iOS for both real estate providers and clients.</li><li>The system's functionality and design are optimized across platforms, ensuring a consistent user experience on all devices.</li><li>Multi-platform flexibility expands the user base, allowing providers to reach a larger audience across digital platforms and devices.</li></ul>");
}

// function ten() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/analyics 1.png");
//     $("#paragraph").html("<ul> <li>With advanced reporting and analytics feature, real estate business service providers can monitor their client engagement data, like <strong>Property Views, Clicks, and Inquiries</strong>, giving them a clear image of their client's <strong>Property Preferences and Behavior.</strong></li><li>Real-time data visualization through dashboards and charts facilitates the monitoring of current<strong> Market Trends, Property Performance, and Competitive Analysis.</strong></li><li>Predictive analytics is another component of our advanced analytics and reporting function that helps real-estate business service providers to make proactive decisions by projecting <strong>Future Market Trends and Property Values.</strong> </li></ul>");
// }

function eleven() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Integration with MLS.png");
    $("#paragraph").html("<ul> <li>MLS integration gives real estate providers access to a comprehensive, up-to-date database of property listings from professionals.</li><li>The advanced search feature allows users to filter properties by location, price, type, and amenities.</li><li>MLS integration facilitates smooth coordination of property viewings, payment negotiations, and transactions between buyers and sellers.</li></ul>");
}

// function eleven() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/analyics 1.png");
//     $("#paragraph").html("<ul> <li>With advanced reporting and analytics feature, real estate business service providers can monitor their client engagement data, like <strong>Property Views, Clicks, and Inquiries</strong>, giving them a clear image of their client's <strong>Property Preferences and Behavior.</strong></li><li>Real-time data visualization through dashboards and charts facilitates the monitoring of current<strong> Market Trends, Property Performance, and Competitive Analysis.</strong></li><li>Predictive analytics is another component of our advanced analytics and reporting function that helps real-estate business service providers to make proactive decisions by projecting <strong>Future Market Trends and Property Values.</strong> </li></ul>");
// }

// function twelve() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/analyics 1.png");
//     $("#paragraph").html("<ul> <li>With advanced reporting and analytics feature, real estate business service providers can monitor their client engagement data, like <strong>Property Views, Clicks, and Inquiries</strong>, giving them a clear image of their client's <strong>Property Preferences and Behavior.</strong></li><li>Real-time data visualization through dashboards and charts facilitates the monitoring of current<strong> Market Trends, Property Performance, and Competitive Analysis.</strong></li><li>Predictive analytics is another component of our advanced analytics and reporting function that helps real-estate business service providers to make proactive decisions by projecting <strong>Future Market Trends and Property Values.</strong> </li></ul>");
// }
// function eleven() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/analyics 1.png");
//     $("#paragraph").html("<ul> <li>With advanced reporting and analytics feature, real estate business service providers can monitor their client engagement data, like <strong>Property Views, Clicks, and Inquiries</strong>, giving them a clear image of their client's <strong>Property Preferences and Behavior.</strong></li><li>Real-time data visualization through dashboards and charts facilitates the monitoring of current<strong> Market Trends, Property Performance, and Competitive Analysis.</strong></li><li>Predictive analytics is another component of our advanced analytics and reporting function that helps real-estate business service providers to make proactive decisions by projecting <strong>Future Market Trends and Property Values.</strong> </li></ul>");
// }
// function twelve() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/analyics 1.png");
//     $("#paragraph").html("<ul> <li>With advanced reporting and analytics feature, real estate business service providers can monitor their client engagement data, like <strong>Property Views, Clicks, and Inquiries</strong>, giving them a clear image of their client's <strong>Property Preferences and Behavior.</strong></li><li>Real-time data visualization through dashboards and charts facilitates the monitoring of current<strong> Market Trends, Property Performance, and Competitive Analysis.</strong></li><li>Predictive analytics is another component of our advanced analytics and reporting function that helps real-estate business service providers to make proactive decisions by projecting <strong>Future Market Trends and Property Values.</strong> </li></ul>");
// }

function twelve() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Analytics.png");
    $("#paragraph").html("<ul> <li>Advanced reporting and analytics allow providers to track client engagement, such as property views, clicks, and inquiries, offering insights into client preferences and behavior.</li><li>Real-time data visualization through dashboards helps monitor property performances and client specific data.</li><li>Predictive analytics helps providers make proactive decisions by forecasting future market trends and property values.</li></ul>");
}



