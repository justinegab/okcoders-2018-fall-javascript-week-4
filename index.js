// Objects

var user1 = {
    firstname: 'Justine',
    lastname: 'Gab',
    age: 25
}

// console.log(user1.age);

var user2 = {
    firstname: 'Mollie',
    lastname: 'Smith',
    age: 27
}

// Arrays

var weddinglist = [
    'old',
    'new',
    'borrowed',
    'blue'
]

// console.log(weddinglist[2]);

// Combine Arrays and Objects

var userList = [
    user1,
    user2
]

// console.log(userList[1].firstname);



// Address Book List Objects in an Array

var addressbook = [
    {
        firstname: 'Justine',
        lastname: 'Gab',
        phonenumber: '701-690-8818'
    },
    {
        firstname: 'Mollie',
        lastname: 'Smith',
        phonenumber: '513-288-7093'
    },
    {
        firstname: 'Cole',
        lastname: 'Nesbitt',
        phonenumber: '585-721-2345'
    }
]

// console.log(addressBook[1].phonenumber);


// Functions

function printFirstNames(add){
    console.log(add)
}

// printFirstNames(addressbook);

function printFirstNames(add){
    for(var i=0; i<add.length; i++){
        console.log(add[i].addressbook)
    }
}

// printFirstNames(addressbook);

var ourFunction = function(thing){
    for(var i=0; i<thing.length; i++){
        console.log(thing[i].lastname);  
    };
}

// printFirstNames(addressbook);

// ourFunction(addressbook);

function ourConsole(message1){
    return function(message2){
        console.log('This is our message out. ' + message1);
        console.log('This is our message out. ' + message2);
    }
}

var mgs = ourConsole('Hello');
// mgs('Goodbye')

function forEach(arr1, func1){
    for(var i=0; i<arr1.length; i++){
        func1(arr1[i]);
    }
}

function printName(x){
    console.log(x.firstname, x.lastname)
}

function printPhone(x){
    console.log(x.phonenumber)
}

forEach(addressbook,printName);
forEach(addressbook,printPhone);

var func2 = function(x){console.log(x.phonenumber)}

forEach(addressbook, func2);
forEach(addressbook,function(x){console.log(x.phonenumber)});