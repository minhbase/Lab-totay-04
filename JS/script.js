alert("Hello, World!");
let formatted = true;
if(formatted){
    console.log('JavaScript sao de qua ma!!!');
}
let message="Welcome to my website";
console.log(message)
if (window.localStorage){
    console.log('JavaScript support LocalStorage');
}

let a1;
let a_b;
let abc$;

/* Block
Comments
here */

let counter =100;
console.log(typeof(counter));

let data;
console.log(data);
console.log(typeof(data));

//

let num= 100;
let price= 20.2;
let discount = 0.05;
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log('T'/2);
console.log(NaN/2);

let str='Java';
str=str+'Script';
console.log(str);

let s='JavaScript';
s[0]='j';
console.log(s);

console.log(Boolean('connect'));
console.log(Boolean(''));

let studentObject = {};
console.log(typeof(studentObject));
// employee doi tuong; firstName, lastName la thuoc tinh cua doi tuong (object)
let employee = {
    firstName : 'Nguyen',
    lastName : 'Phu Trong'
};

console.log(employee.firstName);
console.log(employee.lastName);

let contact = {
    firstName : 'Nguyen',
    lastName : 'Minh Chinh',
    email: 'chinh@gmail.com',
    address: {
        building: '1000',
        street: 'HBT',
        city: 'Hue'
    }
};
// de truy cap vao thuoc tinh cua doi tuong su dung . hoac []: contact.firstName hoac contact['firstName']


delete contact.email;
console.log(contact['age']);//undefined;
contact.age =25;//adding property
contact.firstName='Ngo';
console.log(contact);

let student = {
    firstName: 'Dao',
    lastName: 'Hai',
    studentId: 100
}
console.log('age'in student);//false
console.log('studentId'in student);//true

let j=1;
for(;;){
    if(j>15){ break;}
    console.log(j);
    j += 2;
}

let count= 0;
do{
    console.log(count);
    count++;
} while (count<10);
