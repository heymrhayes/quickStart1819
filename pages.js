// page data

const pages = [
    { "name": "Home"},
    { "name": "Student Profile" },
    { "name": "Contacts" },
    { "name": "Documents" },
    { "name": "Directory Opt-In/Out" },
    { "name": "Recruiter Opt-In/Out" }
];

var pageDetails = {
    "home" : {"index": 0, "displayName": "Home", "desc" : "Shows your progress through the process"},
    "profile" : {"index": 1, "displayName": "Student Profile", "desc": "View and update basic student information"},
    "pgcontacts" : {"index": 2, "displayName": "Parent/Guardian Contacts", "desc" : "View and update parent/guardian contact information"},
    "econtacts" : {"index": 3, "displayName": "Emergency Contacts", "desc" : "View and update emergency contact information"},
    "medcontact": {"index": 4, "displayName": "Medical Contact", "desc" : "View and update medical contact information"},
    "docs" : {"index": 5, "displayName": "Documents", "desc" : "Upload birth certificate and two proof of residency documents" },
    "diropt": {"index": 6, "displayName": "Directory Opt-In/Out", "desc" : ""},
    "recopt": {"index": 7, "displayName": "Recruiter Opt-In/Out", "desc" : "" },
    "propolicy": {"index": 8, "displayName": "Promotion Policy", "desc" : "" }
}


var arrayPageCodes = [];

//  need array for various displays
$.each(pageDetails, function(k,v) {
    arrayPageCodes[v.index] = k;
});

