const pinToStateMap = {
    "110001": "Delhi",               // Delhi
    "400001": "Maharashtra",         // Mumbai, Maharashtra
    "700001": "West Bengal",         // Kolkata, West Bengal
    "600001": "Tamil Nadu",          // Chennai, Tamil Nadu
    "560001": "Karnataka",           // Bangalore, Karnataka
    "302001": "Rajasthan",           // Jaipur, Rajasthan
    "144001": "Punjab",              // Jalandhar, Punjab
    "492001": "Chhattisgarh",        // Raipur, Chhattisgarh
    "500001": "Telangana",           // Hyderabad, Telangana
    "751001": "Odisha",              // Bhubaneswar, Odisha
    "226001": "Uttar Pradesh",       // Lucknow, Uttar Pradesh
    "160001": "Chandigarh",          // Chandigarh
    "180001": "Jammu & Kashmir",     // Jammu, J&K
    "682001": "Kerala",              // Kochi, Kerala
    "362001": "Gujarat",             // Junagadh, Gujarat
    "380001": "Ahmedabad, Gujarat",  // Ahmedabad, Gujarat
    "313001": "Udaipur, Rajasthan",  // Udaipur, Rajasthan
    "560001": "Bangalore, Karnataka",// Bangalore, Karnataka
    "492001": "Raipur, Chhattisgarh",// Raipur, Chhattisgarh
    "781001": "Assam",               // Guwahati, Assam
    "500001": "Hyderabad, Telangana",// Hyderabad, Telangana
    "795001": "Manipur",             // Imphal, Manipur
    "734001": "Sikkim",              // Gangtok, Sikkim
    "793001": "Meghalaya",           // Shillong, Meghalaya
    "737101": "Sikkim",              // Gangtok, Sikkim
    "790001": "Arunachal Pradesh",   // Itanagar, Arunachal Pradesh
    "797001": "Nagaland",            // Kohima, Nagaland
    "798001": "Mizoram",             // Aizawl, Mizoram
    "744101": "Andaman & Nicobar",   // Port Blair, A&N Islands
    "362001": "Daman & Diu",         // Diu, Daman & Diu
    "403001": "Goa",                 // Panaji, Goa
};

// Event listener to populate state based on PIN code
document.getElementById('pin-code').addEventListener('input', function() {
    const pinCode = this.value;
    const stateField = document.getElementById('state');

    if (pinToStateMap[pinCode]) {
        stateField.value = pinToStateMap[pinCode];
    } else {
        stateField.value = '';  // Clear the state field if no match is found
    }
});
