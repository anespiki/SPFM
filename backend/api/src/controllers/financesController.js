


//Expenses data will be in list of maps
//For example: 
//category: 
//expenseName:
//expenseValue
//date

const expensesCateories = [
    "Gas", "Electricity", "Night Out", "Clothes", "Groceries"
];


const expensesDummyData = [
    {
        'category': 'Gas',
        'expenseName': 'Hifa Petrol',
        'expenseValue': '100',
        'date': '13 Dec 2024'
    },
    {
        'category': 'Gas',
        'expenseName': 'Hifa Petrol',
        'expenseValue': '100',
        'date': '13 Nov 2024'

    },
    {
        'category': 'Electricity',
        'expenseName': 'House Bill',
        'expenseValue': '90',
        'date': '10 Nov 2024'
    }, {
        'category': 'Electricity',
        'expenseName': 'House Bill',
        'expenseValue': '90',
        'date': '10 Nov 2024'
    },
    {
        'category': 'Hangout',
        'expenseName': 'Argelini Malta',
        'expenseValue': '15',
        'date': '19 Dec 2024'
    },
    {
        'category': 'Hangout',
        'expenseName': 'IUS Caffe',
        'expenseValue': '3',
        'date': '18 Dec 2024'
    },
    {
        'category': 'Clothes',
        'expenseName': 'SCC - Berska',
        'expenseValue': '120',
        'date': '24 Nov 2024'
    },
    {
        'category': 'Clothes',
        'expenseName': 'SCC - Buzz',
        'expenseValue': '359',
        'date': '24 Dec 2024'
    },
    {
        'category': 'Groceries',
        'expenseName': 'Penny Plus Marker',
        'expenseValue': '40',
        'date': '14 Jun 2024'
    },
    {
        'category': 'Groceries',
        'expenseName': 'Amko Komerc',
        'expenseValue': '114',
        'date': '10 Jun 2024'
    },
];


//Returinging all categories
exports.returnExpensesCategories = async (req, res) => {
    try {
        return res.status(200).json({ categories: expensesCateories });
    }
    catch (e) {
        console.error('There was error while returning categories' + e);
    }
}

//Calculate how much each category has expense

exports.returnEachCategoryWithItsExpense = async (req, res) => {

    // Object to store totals for each category
    const categoryTotals = {};

    // Iterate over the data and calculate totals
    expensesDummyData.forEach(expense => {
        const category = expense.category;
        const expenseValue = parseFloat(expense.expenseValue); // Convert to a number

        if (categoryTotals[category]) {
            categoryTotals[category] += expenseValue; // Add to existing total
        } else {
            categoryTotals[category] = expenseValue; // Initialize new category
        }
    });

    // Convert the totals object into an array of objects for easier consumption
    const categorizedExpenses = Object.entries(categoryTotals).map(([category, total]) => ({
        category,
        total
    }));

    // Respond with the result
    res.status(200).json(categorizedExpenses);

}

// Function to return expenses from a specific category
exports.returnExpensesFromCategory = async (req, res) => {
    // Receiving category name from frontend (request body)
    const { category } = req.body;

    // Filtering the dummy data to find expenses of the specific category
    const filteredExpenses = expensesDummyData.filter(expense => expense.category.toLowerCase() === category.toLowerCase());

    // Check if any expenses were found for the given category
    if (filteredExpenses.length > 0) {
        res.status(200).json(filteredExpenses); // Sending the filtered expenses as response
    } else {
        res.status(404).json({ message: `No expenses found for category: ${category}` }); // Handle case where no expenses found
    }
};

// Method to add a new category to the dummy data
exports.addExpenseCategory = async (req, res) => {
    // Retrieving the categoryName from the frontend
    const { categoryName } = req.body;

    console.log("Category recieved: " + categoryName);
    // Add the new category with an empty expenses array
    expensesDummyData.push({
        category: categoryName,
        expenseName: 'No expenses',
        expenseValue: '0',
        date: ''
    });

    // Send a response with the updated dummy data
    res.status(200).json({ message: "Category added successfully", data: expensesDummyData });
};


// Method to add expense to some category
exports.addExpenseToCategory = async (req, res) => {
    // Retrieving the categoryName from the frontend
    const { categoryName, expenseName, expenseValue, date } = req.body;

    console.log("Category recieved: " + categoryName);
    // Add the new category with an empty expenses array
    expensesDummyData.push({
        category: categoryName,
        expenseName: expenseName,
        expenseValue: expenseValue,
        date: date
    });

    // Send a response with the updated dummy data
    res.status(200).json({ message: "Category Expense added successfully", data: expensesDummyData });
}

//Method that will calculate total expenses and return it summ
exports.returnTotalExpenses = async (req, res) => {
    try {
        // Calculate the total expenses by summing the expenseValue of each expense
        const totalExpenses = expensesDummyData.reduce((total, expense) => {
            return total + parseFloat(expense.expenseValue); // Add the expenseValue to the total
        }, 0);

        // Return the total expenses in the response
        res.json({ totalExpenses });
    } catch (error) {
        console.error("Error calculating total expenses:", error);
        res.status(500).json({ message: "Error calculating total expenses" });
    }
};