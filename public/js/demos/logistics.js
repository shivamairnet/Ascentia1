
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
     
      default:
          break;
  }
}

function one() {
  $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Logistics Order Management.png");
  $("#paragraph").html("<ul><li>Order Processing & Distribution: Smooth processing and accurate order distribution from initial order to final delivery.</li><li>Digital Order Tracking: Digital order processing system creates digital receipts with QR codes for easy shipment tracking. </li><li>Back Order Management: Manage backorders and facilitate order return processing. </li><li>Business Analytics & Reporting: In-depth data for logistics business analysis and reporting.</li> </ul>");
}

function two() {
  $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Inventory Management.png");
  $("#paragraph").html("<ul> <li>Automatic Identification & Data Capture (AIDC): Tag orders with unique AIDC codes for streamlined inventory tasks such as receiving, picking, packing, and shipping.</li><li>Direct Transfer of Inventory: Reduce handling costs by transferring inventory directly from inbound to outbound shipments without the need for storage. </li><li>Mobile Access to Inventory Data: Perform inventory tasks and access data on the go, improving operational efficiency and flexibility.</li></ul>");
}

function three() {
  $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Shipment Management.png");
  $("#paragraph").html("<ul> <li>Shipping Label Generation: Create carrier-specific labels with AIDC codes for efficient package tracking and order integration. </li><li>Batch Processing: Process multiple shipments at once, saving time and reducing manual handling of bulk orders.</li><li>Return Shipment Management: Easily manage return shipments by generating return labels to distinguish them from regular orders.</li></ul>");
}

function four() {
  $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Fleet Logistics Fuel Management.png");
  $("#paragraph").html("<ul> <li>AIDC for Fleet Vehicles: Assign AIDC codes to fleet vehicles for real-time tracking and order association.</li><li>Route Optimization: Plan and optimize delivery routes to minimize fuel consumption and reduce driving time.</li><li>ELD Compliance: Use Electronic Logging Devices (ELDs) to track driver hours and ensure compliance with Hours of Service (HOS) regulations, reducing risks of fines.</li></ul>");
}

function five() {
  $("#beyond-bookshell-img").attr("src", "img/real-estate/Real Estate Icons-latest/Feature - Booking & Scheduling.png");
  $("#paragraph").html("<ul> <li>Real-Time Fuel Monitoring: Monitor fleet fuel consumption and vehicle utilization in real time.</li><li>Fuel Price Optimization: Adjust shipping routes based on real-time fuel prices for optimal efficiency.</li><li>Theft Detection: Detects and deter fuel theft with advanced monitoring and alert systems.</li><li>Mobile Access: Access fleet fuel management features and data on-the-go via mobile devices.</li></ul>");
}

function six() {
  $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Vehicle Health Management.png");
  $("#paragraph").html("<ul> <li>Real-Time Performance Monitoring: Access real-time metrics like tyre pressure, oil pressure, coolant levels, and engine temperature to identify issues early.</li><li>Efficiency Optimization: Analyze vehicle usage patterns to reduce idle time and maximize productivity. </li><li>Compliance Tracking: Oversee vehicle compliance with emissions and safety standards to avoid penalties and reduce overhead costs.</li></ul>");
}

// function seven() {
//     $("#beyond-bookshell-img").attr("src", "img/real-estate/secure-payment 1.png");
//     $("#paragraph").html("<ul> <li>To facilitate safe online transactions for <strong>Deposits, Rent</strong>, and property acquisitions, our real estate management service has been integrated with <strong>Reputable, Secure, Trusted Payment and Unified Payment Interface and Gateways.</strong></li> <li>Consumers have access to various modes of payments, including <strong> E-Wallets, Online Banking, Credit/Debit Cards, and Bank Transfers for Faster Payments.</strong> </li><li>Our system generates <strong>Instant Payment Receipts</strong> and provides <strong>Real-Time Notifications</strong> to all the parties involved in the transaction.</li></ul>");
// }

function seven() {
  $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Agency and Warehouse.png");
  $("#paragraph").html("<ul> <li>Centralized Network Management: Efficiently manage multiple agencies and warehouses, ensuring smooth coordination across the logistics network.</li><li>Batch & Lot Tracking: Track inventory by batch or lot numbers for enhanced traceability and regulatory compliance.</li><li>Automation Integration: Implement automation technologies like barcode scanning, RFID, and AS/RS to boost efficiency and accuracy in warehouse operations.</li></ul>");
}


function eight() {
  $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Digital Lock Solution.png");
  $("#paragraph").html("<ul> <li>Secure Access Control: Keyless entry, biometric authentication, or digital key access ensures only authorized personnel can access goods and facilities.</li><li>Audit Trail: Maintain a detailed record of access events, including timestamps and user identities, for enhanced security and accountability.</li><li>Real-Time Monitoring: Receive immediate alerts for unauthorized access attempts or security breaches, ensuring prompt responses to potential threats.</li></ul>");
}

function nine() {
  $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Expense Management.png");
  $("#paragraph").html("<ul> <li>Track Logistics Expenses: Monitor transportation, fuel, and labor costs to calculate overall profit in the shipping process.</li><li>Multi-Currency Support: Accurately convert and report expenses in various currencies for international operations.</li><li>Audit Trail: Maintain a detailed record of expense transactions, including approvals, modifications, and adjustments, ensuring compliance and audit readiness.</li></ul>");
}

function ten() {
  $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Driver Behavior Management.png");
  $("#paragraph").html("<ul> <li>Real-Time Location Tracking: Know the exact location of vehicles to ensure drivers follow assigned routes and schedules.</li><li>Driver Behavior Monitoring: Track vehicle speed, harsh braking, and driver fatigue to identify improvement areas and provide targeted coaching.</li><li>Instant Alerts: Alert drivers about speed limit violations, seat belt use, or unusual driving behavior for better safety and compliance.</li></ul>");
}

function eleven() {
  $("#beyond-bookshell-img").attr("src", "img/Logistics Industry Page (1)/Logistics Industry Page/Feature - Customer Support.png");
  $("#paragraph").html("<ul> <li>Multi-Channel Query Logging: Customers can log queries via Email, WhatsApp, AI Chatbot, or Calls.</li><li>Automated Order Updates: Customers receive automated status updates on Dispatch, Transit, and Delivery.</li><li>Seamless Communication: Internal teams and customers can communicate effectively, ensuring all critical information is available and actionable.</li></ul>");
}







