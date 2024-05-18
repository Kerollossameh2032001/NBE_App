import constantImages from "../constants/constant_images";


export type binifeciaryAccountDataType = {
    key: number;
    name: string;
    lastName: string;
    image: any;
    number: string;
    accountBalance: string;
};



export const AccountsData: binifeciaryAccountDataType[] = [
    { key: 1, name: 'Hala', lastName: 'Ahmed', image: constantImages.beneficiaryDummeyData.image1, number: '042-653214521245', accountBalance: '1,245.25' },
    { key: 2, name: 'Sam', lastName: 'Smith', image: constantImages.beneficiaryDummeyData.image2, number: '042-653214521246', accountBalance: '3,548.75' },
    { key: 3, name: 'Marten', lastName: 'Brown', image: constantImages.beneficiaryDummeyData.image3, number: '042-653214521247', accountBalance: '2,985.50' },
    { key: 4, name: 'Jose', lastName: 'Garcia', image: constantImages.beneficiaryDummeyData.image4, number: '042-653214521248', accountBalance: '4,152.00' },
    { key: 5, name: 'Casy', lastName: 'Johnson', image: constantImages.beneficiaryDummeyData.image5, number: '042-653214521249', accountBalance: '5,632.85' },
    { key: 6, name: 'Robert', lastName: 'Wilson', image: constantImages.beneficiaryDummeyData.image6, number: '042-653214521250', accountBalance: '1,985.25' },
    { key: 7, name: 'Martha', lastName: 'Martinez', image: constantImages.beneficiaryDummeyData.image7, number: '042-653214521251', accountBalance: '3,457.90' },
    { key: 8, name: 'Alexa', lastName: 'Davis', image: constantImages.beneficiaryDummeyData.image8, number: '042-653214521252', accountBalance: '2,654.50' },
    { key: 9, name: 'Yara', lastName: 'Lopez', image: constantImages.beneficiaryDummeyData.image9, number: '042-653214521253', accountBalance: '4,123.75' },
    { key: 10, name: 'Karen', lastName: 'Gonzalez', image: constantImages.beneficiaryDummeyData.image10, number: '042-653214521254', accountBalance: '1,785.60' },
    { key: 11, name: 'Khaled', lastName: 'Lee', image: constantImages.beneficiaryDummeyData.image11, number: '042-653214521255', accountBalance: '3,928.80' },
    { key: 12, name: 'Monica', lastName: 'Clark', image: constantImages.beneficiaryDummeyData.image12, number: '042-653214521256', accountBalance: '2,450.25' },
    { key: 13, name: 'Walter', lastName: 'Harris', image: constantImages.beneficiaryDummeyData.image13, number: '042-653214521257', accountBalance: '4,785.90' },
    { key: 14, name: 'Hravey', lastName: 'King', image: constantImages.beneficiaryDummeyData.image14, number: '042-653214521258', accountBalance: '1,234.75' },
    { key: 15, name: 'Mohamed', lastName: 'Scott', image: constantImages.beneficiaryDummeyData.image15, number: '042-653214521259', accountBalance: '3,564.10' },
    { key: 16, name: 'Charlet', lastName: 'Green', image: constantImages.beneficiaryDummeyData.image16, number: '042-653214521260', accountBalance: '2,789.25' },
    { key: 17, name: 'Mike', lastName: 'Baker', image: constantImages.beneficiaryDummeyData.image17, number: '042-653214521261', accountBalance: '4,152.00' },
    { key: 18, name: 'Rachel', lastName: 'Nelson', image: constantImages.beneficiaryDummeyData.image18, number: '042-653214521262', accountBalance: '1,876.50' },
    { key: 19, name: 'Ross', lastName: 'Carter', image: constantImages.beneficiaryDummeyData.image19, number: '042-653214521263', accountBalance: '3,654.85' },
    { key: 20, name: 'Omar', lastName: 'Mitchell', image: constantImages.beneficiaryDummeyData.image20, number: '042-653214521264', accountBalance: '2,345.90' },
    { key: 21, name: 'Sara', lastName: 'Perez', image: constantImages.beneficiaryDummeyData.image21, number: '042-653214521265', accountBalance: '4,562.75' },
    { key: 22, name: 'Soha', lastName: 'Roberts', image: constantImages.beneficiaryDummeyData.image22, number: '042-653214521266', accountBalance: '1,478.30' },
    { key: 23, name: 'Ayman', lastName: 'Turner', image: constantImages.beneficiaryDummeyData.image23, number: '042-653214521267', accountBalance: '3,785.45' },
    { key: 24, name: 'Lina', lastName: 'Phillips', image: constantImages.beneficiaryDummeyData.image24, number: '042-653214521268', accountBalance: '2,354.60' },
    { key: 25, name: 'Mire', lastName: 'Campbell', image: constantImages.beneficiaryDummeyData.image25, number: '042-653214521269', accountBalance: '4,231.15' },
];


export type historyDataType = {
    id: number;
    title: string;
    date: string;
    amount: any;
};

export type accountHistoryDataType = {
    accountId: number;
    historyData: historyDataType[];
}

export const transactionsHistoryData: accountHistoryDataType[] = [
    {
        accountId: 1,
        historyData: [
            { id: 1, title: 'Flat Rent', date: '15-12-2021', amount: '$892.48' },
            { id: 2, title: 'House Fixes', date: '15-12-2021', amount: '$764.92' },
            { id: 3, title: 'New Laptop', date: '20-5-2021', amount: '$647.67' },
            { id: 4, title: 'College Expenses', date: '08-04-2021', amount: '$563.62' },
            { id: 5, title: 'Car Loan', date: '12-02-2021', amount: '$755.45' },
            { id: 6, title: 'Mom wants some money', date: '10-02-2021', amount: '$743.45' },
            { id: 7, title: 'New dress', date: '03-02-2021', amount: '$25.76' },
            { id: 8, title: 'Birthday gift for Ross and Rachel', date: '25-01-2021', amount: '$538.96' },
            { id: 9, title: 'Rent', date: '01-07-2021', amount: '$850.00' },
            { id: 10, title: 'Groceries', date: '10-07-2021', amount: '$75.50' },
        ]
    },
    { accountId: 2, historyData: [] },
    {
        accountId: 3,
        historyData: [
            { id: 1, title: 'Groceries', date: '10-11-2021', amount: '$120.45' },
            { id: 2, title: 'Gym Membership', date: '01-11-2021', amount: '$60.00' },
        ]
    },
    { accountId: 4, historyData: [] },
    {
        accountId: 5,
        historyData: [
            { id: 1, title: 'Electricity Bill', date: '10-10-2021', amount: '$45.32' },
            { id: 2, title: 'Water Bill', date: '10-10-2021', amount: '$32.10' },
        ]
    },
    { accountId: 6, historyData: [] },
    {
        accountId: 7,
        historyData: [
            { id: 1, title: 'Travel Expenses', date: '25-09-2021', amount: '$1500.00' },
        ]
    },
    {
        accountId: 8,
        historyData: [
            { id: 1, title: 'Insurance Payment', date: '15-09-2021', amount: '$500.00' },
            { id: 2, title: 'Flat Rent', date: '01-09-2021', amount: '$900.00' },
        ]
    },
    { accountId: 9, historyData: [] },
    {
        accountId: 10,
        historyData: [
            { id: 1, title: 'Phone Bill', date: '10-08-2021', amount: '$50.00' },
            { id: 2, title: 'Internet Bill', date: '10-08-2021', amount: '$60.00' },
        ]
    },
    { accountId: 11, historyData: [] },
    {
        accountId: 12,
        historyData: [
            { id: 1, title: 'Holiday Shopping', date: '20-12-2020', amount: '$300.00' },
            { id: 2, title: 'Gifts', date: '15-12-2020', amount: '$200.00' },
        ]
    },
    { accountId: 13, historyData: [] },
    {
        accountId: 14,
        historyData: [
            { id: 1, title: 'Pet Supplies', date: '15-07-2021', amount: '$120.00' },
        ]
    },
    { accountId: 15, historyData: [] },
    {
        accountId: 16,
        historyData: [
            { id: 1, title: 'Rent', date: '01-07-2021', amount: '$850.00' },
            { id: 2, title: 'Groceries', date: '10-07-2021', amount: '$75.50' },
        ]
    },
    {
        accountId: 17,
        historyData: [
            { id: 1, title: 'Medical Bill', date: '01-06-2021', amount: '$300.00' },
        ]
    },
    { accountId: 18, historyData: [] },
    {
        accountId: 19,
        historyData: [
            { id: 1, title: 'Subscription Fee', date: '01-05-2021', amount: '$15.00' },
        ]
    },
    { accountId: 20, historyData: [] },
    {
        accountId: 21,
        historyData: [
            { id: 1, title: 'Investment', date: '01-04-2021', amount: '$1000.00' },
        ]
    },
    { accountId: 22, historyData: [] },
    {
        accountId: 23,
        historyData: [
            { id: 1, title: 'Dining Out', date: '20-03-2021', amount: '$60.00' },
            { id: 2, title: 'Taxi Fare', date: '25-03-2021', amount: '$20.00' },
        ]
    },
    {
        accountId: 24,
        historyData: [
            { id: 1, title: 'Fuel', date: '10-02-2021', amount: '$45.00' },
            { id: 2, title: 'Car Maintenance', date: '15-02-2021', amount: '$150.00' },
        ]
    },
    { accountId: 25, historyData: [] },
];