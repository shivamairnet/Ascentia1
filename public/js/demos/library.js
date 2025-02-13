
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
    $("#beyond-bookshell-img").attr("src", "img/Library Management System (Industry Page) (2)/Feature - Digital Library Management.png");
    $("#paragraph").html("<ul><li>Our digital library management system allows librarians to store and manage digital assets like eBooks, audiobooks, and multimedia files.</li><li>Our system supports various digital formats for seamless accessibility across devices. </li><li>Integrated analytics provide insights into usage patterns, aiding informed resource allocation and collection development. </li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/Library Management System (Industry Page) (2)/Feature - Search & Discovery.png");
    $("#paragraph").html("<ul> <li>Our library management system's search and discovery tools features a robust search engine for keyword and advanced queries, including Boolean operators and filters for genre, author, date, and format.</li><li>Our system can suggest personalized suggestions based on user activity and borrowing history to enhance user engagement. </li><li>Visual search capabilities, like uploading book cover photos and previews, make discovering resources more engaging and accessible.</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Tenant Management.png");
    $("#paragraph").html("<ul> <li>The catalog management tool in our library management system lets admins create and update catalog records for items like books, periodicals, DVDs, and digital resources. </li><li>Features such as effective indexing and keyword tagging enhance the searchability and quick access of the books.</li><li>System also tracks item statuses such as availability, checked-out dates, or reservations, manages special collections, and supports batch processing for efficient data handling.</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/Library Management System (Industry Page) (2)/Feature membership management plan.png");
    $("#paragraph").html("<ul> <li>The reservation and hold management tool in our library management system enables patrons to place reservations on checked-out items, ensuring priority access once available.</li><li>Automated reminders via email or SMS notify patrons when reserved items are ready for collection, reducing wait times.</li><li>Librarians can efficiently manage and prioritize holds, track reservation statuses, and handle adjustments, cancellations, or reservation updates seamlessly.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/Library Management System (Industry Page) (2)/Feature - Online Secure Payment.png");
    $("#paragraph").html("<ul> <li>The Membership Plan Management tool allows libraries to create and manage tailored membership plans for different user groups, such as Students, Adults, Seniors, and Corporate Members.</li><li>Libraries can set borrowing limits, lending terms, and access privileges based on membership types.</li><li>The system simplifies new user registration and membership renewals while sending automated reminders for renewals and overdue payments, ensuring seamless patron engagement and library management.</li></ul>");
}

// function six() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/heart 2.png");
//     $("#paragraph").html("<ul> <li>With multiple language support features customers can navigate through <strong>Property Listings and Descriptions</strong> in their preferred language. </li> <li>With our smart multi-currency converter support function, real estate business service providers can <strong>Streamline Transactions and Financial Interactions</strong> by allowing their clients to<strong> View and Display Property Pricing</strong> based on geographic region.  </li> <li>Furthermore, with multiple language support and currency converter options, real estate business service providers can expand their <strong>Operations Internationally, removing Currency Conversion and Language Hurdles</strong>.</li></ul>");
// }

function six() {
    $("#beyond-bookshell-img").attr("src", "img/Library Management System (Industry Page) (2)/Feature - Automated Notification.png");
    $("#paragraph").html("<ul> <li>Our secure online payment system eliminates in-person transactions and cash handling, allowing patrons to pay fines, fees, and subscriptions through a secure gateway.</li><li>Patrons can use various payment methods, including digital wallets, debit cards, and credit cards. </li><li>The system offers real-time updates on account status and automates payment reminders, enhancing transparency and reducing overdue payments.</li></ul>");
}

// function seven() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/secure-payment 1.png");
//     $("#paragraph").html("<ul> <li>To facilitate safe online transactions for <strong>Deposits, Rent</strong>, and property acquisitions, our real estate management service has been integrated with <strong>Reputable, Secure, Trusted Payment and Unified Payment Interface and Gateways.</strong></li> <li>Consumers have access to various modes of payments, including <strong> E-Wallets, Online Banking, Credit/Debit Cards, and Bank Transfers for Faster Payments.</strong> </li><li>Our system generates <strong>Instant Payment Receipts</strong> and provides <strong>Real-Time Notifications</strong> to all the parties involved in the transaction.</li></ul>");
// }

function seven() {
    $("#beyond-bookshell-img").attr("src", "img/Library Management System (Industry Page) (2)/Feature - Reporting & Analytics.png");
    $("#paragraph").html("<ul> <li>Libraries can help patrons avoid late fees and manage borrowed items with automatic notifications for upcoming returns, overdue books, and due dates.</li><li>Regular reminders & updates are sent via WhatsApp, SMS, or email for user convenience.</li><li>Patrons also receive updates on library events, closures, new arrivals in preferred genres, and availability of reserved items, ensuring timely and personalized communication.</li></ul>");
}

// function eight() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/device 1.png");
//     $("#paragraph").html("<ul><li>Our real estate system is accessible to real estate business service providers and clients on a variety of operating systems, including <strong>Web, Android, and iOS.</strong> </li><li>Regardless of the device users are using, we've made sure that our real estate management services can be enjoyed in a consistent experience by optimizing system’s <strong>Functionality and Design</strong> for various platforms.  </li><li>Furthermore, our real-estate system's multi-platform flexibility expands its user base and reach, allowing real estate business service providers to connect with a larger audience on a variety of <strong>Digital platforms and Devices.</strong></li></ul>");
// }

function eight() {
    $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature Multi Language.png");
    $("#paragraph").html("<ul> <li>Our library management system provides detailed insights into key areas such as user behavior, acquisition trends, and circulation statistics.</li><li>Library owners can track popular and less-used resources through reports on checkouts, returns, and reservations, aiding data-driven acquisition decisions.</li><li>Advanced analytics optimize staffing and resource allocation by analyzing usage trends, peak hours, and frequent users, ensuring efficient library operations.</li></ul>");
}




