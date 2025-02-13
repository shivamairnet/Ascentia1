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
    $("#beyond-bookshell-img").attr("src", "img/interior/room 1.png");
    $("#paragraph").html("<ul><li>Drag-and-Drop & Pre-Built Templates: Easy-to-use tools for creating accurate floor and wall designs.</li><li> Measurement Tools: Ensure proper scale and proportions of design elements.</li> <li> Grid & Snap Tools: Organize and align elements with precision.</li><li> Layering Systems: Organize different design components for clarity.</li><li> View Modes: Visualize floors and walls from multiple perspectives.</li></ul>");
}

function two() {
    $("#beyond-bookshell-img").attr("src", "img/interior/model 1.png");
    $("#paragraph").html("<ul><li> Advanced 3D Modeling: Create intricate structures and objects with precise dimensions.</li><li>  Texture Mapping Integration: Apply realistic surface finishes like wood, metal, fabric, and glass.</li><li> High-Quality Rendering: Generate realistic images using techniques like ray tracing and global illumination for accurate light and shadow simulations.</li></ul>");
}

function three() {
    $("#beyond-bookshell-img").attr("src", "img/interior/fabric 1.png");
    $("#paragraph").html("<ul><li>Extensive Material & Finish Libraries: A wide range of materials, fabrics, textures, and patterns for interior design.</li><li>Categorized & Searchable Database: Easily search and find specific materials or finishes for home projects.</li><li>Informed Decision-Making: Access detailed information on durability, maintenance, and cost to choose materials based on both functionality and aesthetics.</li></ul>");
}

function four() {
    $("#beyond-bookshell-img").attr("src", "img/interior/package 1.png");
    $("#paragraph").html("<ul><li>Inventory Management: Helps interior architects and businesses track supplies, manage materials, and streamline procurement.</li><li> Vendor Management & Integration: Integrates with suppliers and vendors for efficient procurement and timely delivery of materials.</li><li>Stock Availability Tracking: Provides real-time updates on material availability, ensuring accurate information for designers and clients.</li></ul>");
}

function five() {
    $("#beyond-bookshell-img").attr("src", "img/interior/spending 1.png");
    $("#paragraph").html("<ul><li> Interactive Design Tools: Enables clients to customize elements like furniture layout, color schemes, and textures in real-time.</li><li>Real-Time Collaboration: Facilitates sharing design progress with clients and team members for immediate feedback and collaborative decisions.</li><li>Personalization Options: Offers an extensive library of furniture, fixtures, and finishes for clients to tailor designs to their individual preferences.</li></ul>");
}

function six() {
    $("#beyond-bookshell-img").attr("src", "img/interior/rent 1.png");
    $("#paragraph").html("<ul><li>Interactive Furniture Design: Clients can customize furniture pieces, including size, materials, and finishes, directly within the platform.</li><li>Catalog Integration: Allows businesses to integrate furniture supplier catalogs, enabling clients to select, customize, and visualize items in real-time.</li><li>3D Rendered Product Views: Clients can view custom-designed furniture and fixtures in 3D within the context of their interior layout.</li></ul>");
}

function seven() {
    $("#beyond-bookshell-img").attr("src", "img/interior/broker 1.png");
    $("#paragraph").html("<ul><li>Customizable Presentation Templates: Businesses can build visually attractive presentations tailored to specific projects and client requirements.</li><li>3D Modeling & Rendering Integration: Allows businesses to present realistic simulations of designs, showcasing furniture, finishes, and lighting.</li><li>Annotation Tools: Enables the use of notes, labels, and annotations to highlight critical design components and explain concepts to clients.</li></ul>");
}

function eight() {
    $("#beyond-bookshell-img").attr("src", "img/interior/estimation 1.png");
    $("#paragraph").html("<ul><li>Cost Estimation Management: Allows businesses to estimate project costs based on materials, labor, and other expenses.</li><li> Pricing Databases & Supplier Catalogs: Provides access to pricing databases and supplier catalogs for accurate cost estimates. </li><li>Budgeting Tools: Enables users to create project budgets, track expenditures, and compare expenses to allocated funds in real-time.</li></ul>");
}

function nine() {
    $("#beyond-bookshell-img").attr("src", "img/interior/holographic 1.png");
    $("#paragraph").html("<ul><li>Automatic Invoicing: Generates and sends invoices automatically upon project completion or predefined milestones.</li><li> Online Payment Processing: Supports various payment methods like credit cards, bank transfers, etc., for customer convenience.</li><li>Payment Reminders & Alerts: Automates reminders for late payments to ensure healthy cash flow.</li><li>Reporting & Analysis Tools: Provides insights into revenue trends, outstanding balances, and payment performance.</li></ul>");
}

function ten() {
    $("#beyond-bookshell-img").attr("src", "img/interior/devices 1.png");
    $("#paragraph").html("<ul><li> Mobile Compatibility: Offers a responsive interface for smooth and intuitive experience on mobile devices.</li><li> Real-Time Project Updates: Businesses can view and modify floor plans, furniture layouts, and materials on the go.</li><li> Cloud-Based Integration: Synchronizes project data across devices for easy access to the latest information and updates.</li></ul>");
}