// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

// Add some phone numbers to our map
const phoneNumbers = new Map([
    ['home', 510-867-5309],
    ['mobile', 415-555-1212],
    ['business', 415-123-4567]
    ]);

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information
function accountInformation(name, number, businessName) {
    console.log(`Account Holder Name: ${name}`);
    console.log(`Account Holder Number: ${number}`);
    console.log(`Business Name: ${businessName}`);
}

//console.log(accountInformation('Balloonicorn', 123456, "Balloonicorn's Cupcake Shop"))


// Add function to print all addresses, including a header
function showAddresses(addresses){
    console.log(`Addresses:`);
    for (const address of addresses){
        console.log(address);
    }
}
console.log(showAddresses(['123 Sutter Street', '683 Sutter Street', '1600 Pennsylvania Ave']))

// Add function to print phone types and numbers


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions


// Add function to add transactions


// Use the function to add transactions


// Add function to show balance status


// Add function to show transactions


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week


// Add a function for weekly hours




