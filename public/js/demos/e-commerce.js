document.addEventListener('mousemove', function (e) {
    var followMouse = document.getElementById('followMouse');
    followMouse.style.top = e.clientY + 'px';
    followMouse.style.left = e.clientX + 'px';
});

function selectListItem(listItem) {
    $('#list-container li').css('color', 'white');
    $(listItem).css('color', '#0052CD');

    var index = $(listItem).index();
    switch (index) {
        case 0:
            productCatalogue();
            break;
        case 1:
            aggregatorPortals();
            break;
        case 2:
            multiLanguageMultiCurrency();
            break;
        case 3:
            securePayment();
            break;
        case 4:
            personalizedProducts();
            break;
        case 5:
            OrderTracking();
            break;
        case 6:
            userFriendlyRecommendation();
            break;
        case 7:
            catalogManagement();
            break;
        case 8:
            productSearch();
            break;
        case 9:
            customerSupport();
            break;
        default:
            break;
    }
}

function productCatalogue() {
    $("#beyond-bookshell-img").attr("src", "img/e-commerce/catalog 1.png");
    $("#paragraph").html("<ul><li>With our ecommerce platform product catalog management ecommerce businesses can simplify the process of adding <strong>New Products</strong> to their catalog. </li><li>With product catalog management ecommerce businesses can <strong>Track </strong> and <strong>Manage Their Ecommerce Products Inventory,</strong> including <strong>Stock Updates, Low-Stock Alerts,</strong> with <strong>Backorders Management.</strong></li><li>This feature also allows ecommerce businesses  to <strong>Define</strong> and <strong>Manage</strong> various ecommerce product features, and provide their customers with detailed ecommerce product information.</li></ul>");
}

function aggregatorPortals() {
    $("#beyond-bookshell-img").attr("src", "img/e-commerce/internet 1.png");
    $("#paragraph").html("<ul><li>Our aggregator portal allows e-commerce businesses to aggregate <strong> Ecommerce Product Catalogs, Deals</strong> and <strong>offers from Multiple B2B Ecommerce Vendors, Brands</strong> or sources and provide their users with a wide range of options in one place.</li><li>Our aggregator portal allows customers to compare prices of the similar products offered from different b2b sellers so that customers can find <strong>Best Deals</strong> and <strong>Save Money.</strong></li><li>Our aggregator portal allows e-commerce businesses to gather <strong>Special Offers,</strong> and <strong>Discounts</strong> from different <strong>B2B Ecommerce Sellers</strong> or <strong>Brands,</strong> which attracts more users to their platform and encourages impulse purchases.</li></ul>");
}

function multiLanguageMultiCurrency() {
    $("#beyond-bookshell-img").attr("src", "img/e-commerce/heart 1.png");
    $("#paragraph").html("<ul><li>With <strong>Multilingual and Multi-Currency</strong> support feature, our e-commerce platform enable e-commerce businesses to serve a diverse global audience.</li><li>By offering content and transactions in users preferred languages and currencies, our ecommerce platform provides a <strong>Personalized & Seamless Experience,</strong> leading to higher customer satisfaction.</li><li>Using integrated <strong>Currency Conversion</strong> tools, our platform automatically converts product prices to the currency of the user's choice.</li></ul>");
}

function securePayment() {
    $("#beyond-bookshell-img").attr("src", "img/e-commerce/payment-method 1.png");
    $("#paragraph").html("<ul><li>Our e-commerce platform supports multiple payment methods through <strong>Credit/Debit</strong> cards, <strong>Digital Wallets, Bank Transfers</strong> and more.</li><li>For secure ecommerce payment processing, we have integrated our ecommerce platform with reputable payment gateways, securing sensitive payment information such as <strong>Credit/Debit Card Information, E-Wallet</strong> information and more.</li><li>We've also integrated the feature for international payments by supporting multiple currencies, complying with <strong>Cross-Border</strong> payment rules to help expand your ecommerce business global reach.</li></ul>");
}
function personalizedProducts() {
    $("#beyond-bookshell-img").attr("src", "img/e-commerce/social-media 1.png");
    $("#paragraph").html("<ul><li>Personalized Ecommerce Products recommendation, utilizes ecommerce businesses customer data, including customers  <strong>Past Ecommerce Products Purchases, Browsing History,</strong> and <strong>Search Queries,</strong> to generate personalized ecommerce products recommendations for customers. </li><li>The <strong>Dynamic Ecommerce Products  Recommendation</strong> feature allows the system to dynamically change the product listings based on the user's <strong>Real-Time</strong> actions on the platform. If a customer is interested in a certain category or ecommerce product, the algorithm can instantly adapt to offer & show related ecommerce products to customers.</li><li>With our platform ecommerce businesses can segment ecommerce product recommendations to target different customer groups based on <strong>Demographics, Psychographics</strong> or <strong>Customer Purchase Lifecycle.</strong></li></ul>");
}
function OrderTracking() {
    $("#beyond-bookshell-img").attr("src", "img/e-commerce/tracking 1.png");
    $("#paragraph").html("<ul><li>With order tracking feature customers can receive <strong>Real-Time</strong> updates at every stage of the order process, from <strong>Confirmation</strong> to <strong>Packaging, Shipping </strong>and <strong>Delivery.</strong></li><li>We have integrated <strong>Order Tracking System</strong> with <strong>Logistics Providers System,</strong> ensuring that the information provided to the customer is as accurate and timely as possible.</li><li>We have also integrated a <strong>Visual Tracking Interface</strong> in our ecommerce platform order tracking, where customers can see a <strong>Map-Based View</strong> of the progress from their product order to its destination.</li></ul>");
}
function userFriendlyRecommendation() {
    $("#beyond-bookshell-img").attr("src", "img/e-commerce/maps 1.png");
    $("#paragraph").html("<ul><li>With our ecommerce platform, we have provided a <strong>Consistency</strong> in menu design for all pages to help ecommerce business users to easily understand how to navigate anywhere on the ecommerce platform.</li><li>Within our ecommerce platform, we have provided an accessible and efficient search bar that allows users, to quickly search for specific items by entering <strong>Keywords</strong> or <strong>Phrases</strong> related to the ecommerce products.</li><li>We have also provided options to <strong>Filter</strong> and sort ecommerce products by different criteria <strong>(eg Price, Popularity, & more).</strong></li></ul>");
}
function catalogManagement() {
    $("#beyond-bookshell-img").attr("src", "img/e-commerce/inspection 1.png");
    $("#paragraph").html("<ul><li>With <strong>Advanced Product Search,</strong> our ecommerce platform allow users to refine their ecommerce product search results based on multiple criteria/tags based on your e-commerce business.</li><li>With <strong>Faceted Navigation</strong> ecommerce businesses can dynamically adjust filter options based on available ecommerce product <strong>Attributes,</strong> allowing users to easily narrow down their ecommerce product search.</li><li>Our platform also provides <strong>Automatic Product Suggestions</strong> as users type their search queries, helping them find relevant products faster.</li></ul>");
}
function productSearch() {
    $("#beyond-bookshell-img").attr("src", "img/e-commerce/complain 1.png");
    $("#paragraph").html("<ul><li>Through our complaint management system, customers can register their <strong>Complaints, Queries,</strong> or questions through various channels such as <strong>Email, Online Forms,</strong> or direct messages.</li><li>With our system, the e-commerce businesses can classify complaints in different categories (e.g. <strong>Product Quality, Delivery Problems, Payment Issues</strong>) and prioritize them according to severity or impact on the customer experience.</li><li>Our complaint management system allows e-commerce companies to automatically create individual tickets for each complaint received, enabling efficient <strong>Tracking</strong> and resolution of customer complaints.</li><li>Our system also allows customers to track the status of complaints in <strong>Real-Time,</strong> providing transparency and certainty during the resolution process.</li></ul>");
}
function customerSupport() {
    $("#beyond-bookshell-img").attr("src", "img/e-commerce/customer-service 1.png");
    $("#paragraph").html("<ul><li>Our platform offers multiple channels for customers to contact with your business, including <strong>Live Chat, Email Support, Phone Support</strong> and much more.</li><li>With our built-in <strong>AI Customer Support Chat</strong> feature, it ensures 24/7 support and access to help your customers at any time of day or night.</li><li>We have also connected our customer support systems with our <strong>CRM</strong> software so that you can maintain a comprehensive <strong>Customer Record</strong> and provide endless support across all touch points.</li></ul>");
}
