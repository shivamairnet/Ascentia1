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
    $("#beyond-bookshell-img").attr("src", "img/LMS/online-library 2.png");
    $("#paragraph").html("<ul><li>Our digital library management system enables librarians to <strong>Store, Manage</strong>, and access digital library assets like <strong>E Books, Audio Books,</strong> and other <strong>Multimedia Files</strong> </li><li>The system supports a variety of <strong>Digital Formats</strong>, ensuring <strong>Interoperability</strong> and <strong>Accessibility</strong> across several electronic devices and platforms</li><li>Analytics tools in digital library management system frequently provide insights into <strong>Usage Patterns,</strong> allowing librarians to make more informed <strong>Resource Allocation</strong> and <strong>Collection Development</strong> decisions</li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/LMS/investigation 1.png");
    $("#paragraph").html("<ul><li>Our library management system's search & discovery tool includes a <strong>Robust Search Engine</strong> that allows both <strong>Simple Keyword Searches</strong> and complex queries involving <strong>Boolean Operators, Fiction, Nonfiction Filters</strong>, and facets such as <strong>Author, Publication Date</strong>, and format.</li><li>Our library management system search and discovery tools can deliver <strong>Personalized</strong> suggestions based on <strong>User Activity</strong>, their <strong>Books Borrowing History</strong>, and <strong>Preferences</strong>.</li><li>The visual search element in Search & Discovery includes the feature to upload the <strong>Cover Photos</strong> and <strong>Previews</strong> of the books users need to find, which enhances the discovery experience by making things more <strong>Engaging</strong> and <strong>Accessible</strong>.</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/LMS/archive 1.png");
    $("#paragraph").html("<ul><li>The library catalog management tool in our library management system allows admins to <strong>Create</strong> and <strong>Update</strong> catalog records for any item in the library catalog collection, including <strong>Books, Periodicals, DVDs, Digital Books</strong> and other <strong>Digital Resources</strong>.</li><li>Additionally, our library catalog management feature enables effective <strong>Indexing</strong> and <strong>Keyword Tagging</strong>, which improves <strong>Searchability</strong> and allows users to find books, periodicals and other study related stuff quickly.</li><li>Furthermore, our library catalog management system has the feature of <strong>Tracking Item Statuses</strong> (such as books checked out date, availability, or reserved), managing <strong>Special Collections</strong>, and offering tools for batch processing of mass data.</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/LMS/book 1.png");
    $("#paragraph").html("<ul><li>The reservation and hold management tool in our library management system allow the patrons to simply <strong>Place Reservations On Books</strong> that are presently checked out, guaranteeing they are next in line to borrow the books when it becomes available.</li><li>The system sends an <strong>Automated Reminders</strong> via email or SMS to patrons when their reserved books are ready for collection, minimizing wait times.</li><li>Furthermore, reservation and hold management allow librarians to <strong>Manage</strong> and <strong>Prioritize Holds</strong>, follow the status of <strong>Reserved Items</strong>, to quickly handle reservations, cancellations & adjustments.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/LMS/member-card 1.png");
    $("#paragraph").html("<ul><li>The Membership Plan Management tool enables libraries to establish and administer a variety of membership plans geared to certain user needs, such as <strong>Students, Adults, Seniors</strong>, and <strong>Corporate Members</strong>.</li><li>Library owners can also specify varying <strong>Borrowing Limits, Lending Terms</strong>, and <strong>Library Access Privileges</strong> based on membership type.</li><li>Our system also allows for easy <strong>Registration</strong> of <strong>New Users</strong> and <strong>Renewal Processes</strong> for patrons, as well as automated <strong>Renewal</strong> reminders and <strong>Payment Overdue</strong> notifications to keep members informed.</li></ul>");
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/LMS/credit-card 1.png");
    $("#paragraph").html("<ul><li>Our fast, secure and online payment option eliminates the need for <strong>In-Person Transactions</strong> and <strong>Cash Handling</strong> by enabling patron to easily pay for <strong>Fines</strong>, <strong>Fees</strong>, and <strong>Subscriptions</strong> through a secure online payment gateway.</li><li>Patrons have access to a number of payment methods, including <strong>Digital Wallets, Debit Cards,</strong> and <strong>Credit Cards</strong>.</li><li>Additionally, the system also provides <strong>Real-Time Updates</strong> on the status of patron accounts and <strong>Automate Payment Reminders,</strong> thereby increasing transparency and decreasing <strong>Overdue Payments</strong>. </li></ul>");
}

function seven() {
    $("#beyond-bookshell-img").attr("src", "img/LMS/alarm-system 1.png");
    $("#paragraph").html("<ul><li>Libraries may assist patron to avoid <strong>Late Fees</strong> and properly manage their borrowed items by providing <strong>Automatic Notifications</strong> about <strong>Forthcoming Returns, Overdue Books,</strong> and <strong>Due Dates</strong>.</li><li>Reminders can be delivered via <strong>WhatsApp, SMS,</strong> or <strong>Email,</strong> so that users can get timely updates in the way that suits them best.</li><li>Additionally, customers can receive <strong>Automated Updates</strong> about <strong>Future Events</strong> or <strong>Closures</strong> at the library, <strong>New Arrivals</strong> in their <strong>Favorite Genres, Fiction</strong> & <strong>Non Fiction Books</strong> and the availability of reserved items</li></ul>");
}

function eight() {
    $("#beyond-bookshell-img").attr("src", "img/LMS/pie-chart 1.png");
    $("#paragraph").html("<ul><li>Our library management system offers comprehensive insights into a range of library management areas, including <strong>User Behavior Patterns, Acquisition Trends,</strong> and <strong>Circulation Statistics</strong></li><li>Owners of libraries may simply keep an eye on the most and least popular books, periodicals, journals etc. by creating detailed reports on <strong>Book Checkouts, Returns,</strong> and <strong>Reservations,</strong> which helps them make well-informed decisions about future acquisitions.</li><li>Advanced analytics technologies allow libraries to optimize <strong>Staffing</strong> and <strong>Resource Allocation</strong> by tracking <strong>Usage Trends,</strong> such as peak hours and frequent users. </li></ul>");
}