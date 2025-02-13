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
            patientManagement();
            break;
        case 1:
            electronicMedicalRecord();
            break;
        case 2:
            remoteConsultationManagement();
            break;
        case 3:
            medicalClaimManagement();
            break;
        case 4:
            patientPortal();
            break;
        case 5:
            prescriptionManagement();
            break;
        case 6:
            billingInnovation();
            break;
        case 7:
            laboratoryManagement();
            break;
        case 8:
            opdIpdManagement();
            break;
        case 9:
            analyticsReporting();
            break;
        case 10:
             development();
            break;
        default:
            break;
    }
}

function patientManagement() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/patient 1.png");
    $("#paragraph").html("<ul><li>Our healthcare management system enables healthcare providers to efficiently register patients, capturing essential details and medical information.</li><li> It streamlines patient flow, appointment scheduling, and related operations.</li><li>Through the integrated Patient Portal, patients can access their medical records, request prescription refills, and explore educational health resources, improving overall care and engagement.</li></ul>");
}

function electronicMedicalRecord() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/medical-record 1.png");
    $("#paragraph").html("<ul><li>Our healthcare management system centralizes patient records, allowing healthcare providers to access vital patient information, including demographics, medical history, and clinical data, electronically.</li><li>With the EMRM (Electronic Media Record Management) system, providers can issue e-prescriptions, enabling easy future updates to prescriptions.</li><li> Integration of Medication and Order Management enhances clinical decision-making, empowering healthcare service providers to deliver better care and optimize operations.</li></ul>");
}

function remoteConsultationManagement() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/hospital 1.png");
    $("#paragraph").html("<ul><li>Our system enables virtual consultations, allowing patients to connect with healthcare professionals for effective healthcare solutions. </li><li> Integration with video conferencing tools supports real-time communication for online medical diagnoses.</li><li> Additionally, document sharing and annotation tools enhance collaboration, enabling healthcare professionals to make informed decisions about the patient's health during virtual consultations.</li></ul>");
}

function medicalClaimManagement() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/health-insurance (1) 1.png");
    $("#paragraph").html("<ul><li> Our system allows healthcare providers to electronically submit patient health claims to medical insurance companies or payers.</li><li>It includes real-time medical insurance claims tracking and denial management tools, improving medical finances and preventing fraud. </li><li> Additionally, healthcare providers can generate reports on claims, processing, and reimbursement metrics to optimize their revenue cycle.</li></ul>");
}

function patientPortal() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/systems 1.png");
    $("#paragraph").html("<ul><li>With our patient portal, patients can easily schedule, reschedule, or cancel their medical appointments.</li><li>Patients can also manage medical billing requests, check insurance coverage, and receive guidance on understanding medical bills and insurance requirements.</li><li> Patient portal also offers follow-up support for post-appointment needs, including medication assistance and scheduling follow-up visits.</li><li>Additionally, our integrated multilingual support ensures seamless communication between patients and healthcare professionals, eliminating language barriers.</li></ul>");
}

function prescriptionManagement() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/medical-prescription 1.png");
    $("#paragraph").html("<ul><li> Our healthcare system includes prescription management, allowing healthcare providers to electronically prepare and transmit prescriptions to pharmacies, ensuring accuracy and reducing errors. </li><li>The system also stores patient medication history, including current and past medications, allergies, and adverse reactions, enabling healthcare professionals to make informed decisions and improve overall patient care.</li></ul>");
}

function billingInnovation() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/invoice 2.png");
    $("#paragraph").html("<ul><li>Our system enables healthcare providers to generate and manage medical bills, process insurance claims, and facilitate payment through various methods such as cards, UPI, and e-wallets.</li><li>With automatic billing features, the system streamlines the medical billing process, improving efficiency. </li><li>Providers can also create and send billing statements to patients, summarizing due dates, payments made, and other financial details related to their healthcare services.</li></ul>");
}

function laboratoryManagement() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/management-service (1) 1.png");
    $("#paragraph").html("<ul><li>Our OPD/IPD management system allows healthcare providers to schedule OPD visits and manage real-time bed allotment for IPD patients.</li><li> With built-in analysis and reporting, providers can monitor KPIs like patient volumes, wait times, and bed occupancy rates.</li><li> The clinical support feature ensures timely medication delivery to patients, enhancing care efficiency.</li></ul>");
}

function opdIpdManagement() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/patient (1) 1.png");
    $("#paragraph").html("<ul><li> Our analytics and reporting module provides healthcare service providers with detailed insights into patient health reports and overall business performance.</li><li>Integrated across all systems, ensures timely and accurate reporting.</li><li> By analyzing KPIs, healthcare providers can track patient satisfaction scores, resource allocation, and treatment costs, helping to identify areas for future improvement in medical care.</li></ul>");
}

function analyticsReporting() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/data 1.png");
    $("#paragraph").html("<ul><li>Our mobile app enables healthcare professionals to access patient medical records, appointment scheduling, and real-time communication with both patients and staff.</li><li>Features like medication reminders, health tracking, and encrypted messaging help patients manage their health conveniently.</li><li> Integrated telemedicine functionality allows patients to virtually consult with healthcare professionals for enhanced care.</li></ul>");
}
function development() {
    $("#beyond-bookshell-img").attr("src", "img/healthcare/data 1.png");
    $("#paragraph").html("<ul><li>Through our mobile app healthcare professionals can easily access the <strong> Medical Records/History, Appointment Scheduling</strong>, of the patients with real-time communication facility with patient and healthcare professional. </li><li><strong>Medication Reminders, Health Tracking</strong>, and encrypted messaging help patients manage their health more effectively and conveniently.</li> <li>With the integration of telemedicine functionality patients can virtually consult with the healthcare professionals easily.</li></ul>");
}

