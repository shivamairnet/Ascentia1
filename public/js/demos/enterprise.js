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
        default:
            break;
    }
}

function one() {
    $("#beyond-bookshell-img").attr("src", "img/Enterprises/award 1.png");
    $("#paragraph").html(`<ul><li>Multiple Rewards: Manage diverse reward programs with customizable rules to suit business needs.</li><li>Customizable Reward Criteria: Define reward conditions based on user behavior to encourage engagement.</li><li> Reward Expiration and Conditions: Set expiration dates and conditions to promote timely utilization of rewards.</li><li>Referral Rewards: Incentivize customers with personalized referral codes for referring friends and family.</li></ul>`);
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/Enterprises/catalogue 1.png");
    $("#paragraph").html("<ul><li>Customizable Reward Categories: Businesses can create and categorize rewards to align with audience preferences.</li> <li> Easy Point Redemption: Customers can redeem points seamlessly by scanning a QR code from their mobile devices.</li><li>Dynamic Updates: Businesses can update reward options in real time, ensuring offerings remain fresh and relevant.</li>   </ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/Enterprises/map 1.png");
    $("#paragraph").html(`<ul> <li>Efficient Route Planning: Create, assign, and manage staff routes with real-time tracking to ensure timely task completion and improved efficiency.
    </li><li> Optimized Routes: Maximize efficiency by optimizing travel routes, reducing travel time, and minimizing operational costs.</li><li>Customizable Routes: Tailor routes to meet specific needs, such as visiting key retailer locations, ensuring essential stops are prioritized.</li></ul>`);
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/Enterprises/risk-management 1.png");
    $("#paragraph").html(`<ul> 
                                        <li>Automated Regulatory Compliance: Track real-time regulatory changes and update compliance rules seamlessly to stay ahead of evolving requirements.</li>
                                        <li>Risk Assessment & Management: Simulate different risk scenarios to anticipate future outcomes and develop effective mitigation strategies.</li>
                                        <li> Continuous Monitoring & Auditing: Automate auditing with predefined checklists and criteria for efficient and accurate compliance tracking.</li></ul>`);
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/Enterprises/financial-management 1.png");
    $("#paragraph").html(`<ul>
                                        <li>Automated Financial Reporting: Generate accurate financial statements, balance sheets, and income reports automatically, reducing manual errors and saving valuable time.</li>
                                        <li> Real-Time Budgeting and Forecasting: Monitor and adjust budgets in real-time with tools that provide insights into financial performance and future projections.
  </li>
                                        <li>Comprehensive Compliance Management: Ensure regulatory adherence with built-in compliance checks, audit trails, and financial controls to minimize financial risks.</li></ul>`);
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/Enterprises/catalogue 2.png");
    $("#paragraph").html(`<ul> 
                                        <li>Effortlessly browse a detailed and well-organized catalogue to enhance the product selection experience.
</li>
                                        <li>Product Details: Access comprehensive information, including descriptions and images, directly from the mobile app for informed decision-making.</li>
                                        <li>Search and Filter: Quickly locate products with filters by category, points, or popularity, streamlining the search process.</li><li> Instant Updates: Receive real-time notifications about product availability to stay updated with the latest offerings.
                                        </li>  </ul>`);
}

function seven() {
    $("#beyond-bookshell-img").attr("src", "img/Enterprises/expert-team 1.png");
    $("#paragraph").html(`<ul>
                                        <li>Reward Points System: Enable customers to earn points with every purchase, promoting repeat business and boosting customer retention.</li>
                                        <li> Tiered Rewards System: Set up tiered reward structures to offer customized incentives based on customer engagement or spending levels, increasing loyalty and satisfaction.</li>
                                        <li>Flexible Redemption Options: Allow customers to redeem points for a variety of rewards, including discounts, freebies, and exclusive perks, delivering a personalized and rewarding experience.</li>
 </ul>`);
}

function eight() {
    $("#beyond-bookshell-img").attr("src", "img/Enterprises/data-analytics 1.png");
    $("#paragraph").html(`<ul><li>In-Depth Complaint Analysis: Gain insights into complaint trends, identify recurring issues, and evaluate consumer complaints with precision.</li>
                                        <li> Customizable Reporting Dashboards: Offer real-time visibility into key performance indicators, empowering stakeholders to make data-driven decisions.
</li><li>Proactive Intervention Tools: Facilitate continuous improvement programs by enabling timely actions based on analytical insights.
</li></ul>`);
}



