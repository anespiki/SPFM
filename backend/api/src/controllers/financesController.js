


//Expenses data will be in list of maps
//For example: 
//category: 
//expenseName:
//expenseValue
//date

const expensesCateories = [
    "Gas", "Electiricy", "Night Out", "Clothes"
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
        'category': 'Night Out',
        'expenseName': 'Argelini Malta',
        'expenseValue': '15',
        'date': '19 Dec 2024'
    },
    {
        'category': 'Night Out',
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
];



//Returinging all categories
exports.returnExpensesCategories = async (req, res) => {
    try {
        if (expensesCateories.isEmpty) {
            return res.status(401).json({ message: "Categories are empty!" });
        }
        else {
            return res.status(200).json({ categories: expensesCateories });
        }
    }
    catch (e) {
        console.error('There was error while returning categories' + e);
    }
}



//Returning expenses from some specific category
exports.returnExpensesFromCategory = async (req, res) => {
    //recieveing from frontend category name 
    const { category } = req.body;
    //searching throught dummy data and returning list of expensees

}

//Method that will add expenses to dummy data we created previously 
exports.addExpenses = async (req, res) => {
    //retrieveing from froneted values for expense
    const { category, expenseName, expenseValue, date } = req.body;


}