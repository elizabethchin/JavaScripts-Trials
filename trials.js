// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

// Add some phone numbers to our map
const phoneNumbers = new Map([
    ['home', '510-867-5309'],
    ['mobile', '415-555-1212'],
    ['business', '415-123-4567']
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
// console.log(showAddresses(['123 Sutter Street', '683 Sutter Street', '1600 Pennsylvania Ave']))

// Add function to print phone types and numbers
function showPhoneNums(phoneNum){ 
    console.log('Phone Numbers:');
    for (const num of phoneNum){
    console.log(num)
    console.log(`${num[0]} : ${num[1]}`);
    }
}

// console.log(showPhoneNums(phoneNumbers))



// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const transactions = new Map();

// Add function to add transactions
function addTransactions(date, amount) {
	return transactions.set(date, amount)
}

// Use the function to add transactions
addTransactions('May-2', -500)
addTransactions('May-13', 1200)
addTransactions('May-15', -100)
addTransactions('May-21', -350)
addTransactions('May-29', 2200)


// Add function to show balance status

function showBalanceStatus(balance) {
	console.log('Balance: ')
	if (balance < 0){
		console.log('YOU ARE OVERDRAWN');
	}else if (balance < 20) {
		console.log('Warning: You are close to zero balance');
	}else {
		console.log('Thank you for your business.');
	}
}

// Add function to show transactions
function showTransactions(map, begBal) {
	console.log(begBal);
	let depositType;
	let runningBalance = 0;
	for (const transaction of transactions) {
		runningBalance += transaction[1];
		if (transaction[1] < 0) {
			depositType = 'withdrawal';
		} else {
			depositType = "deposit"
		}
	}
}

console.log(`${transaction[0]}, ${transaction[1]}`);{

console.log()

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




