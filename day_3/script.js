const email = prompt('Enter your email address:');
const password = prompt('Enter your password');
//using if-else
if (email === 'dynamoroy@gmail.com' && password === '1234') {
    alert('Welcome');
}
else {
    alert('Access Denied');
}

//using switch case 
switch (email && password) {
    case 'dynamoroy@gmail.com' && '1234':
        alert('Welcome');
        break;
    default:
        alert('Access Denied');
        break;
}

//using ternary operators
(email=='dynamoroy@gmail.com' && password=='1234')?
alert('Welcome') : 
alert('Access Denied');
