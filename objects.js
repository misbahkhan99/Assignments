"use strict";
///////****** Assignment Part 1: Employee Data     *******///////// 
var _a;
let studentData = {
    name: "Asifa",
    department: "HR",
    role: "Student",
    contact: {
        phoneNo: 123456789,
        emailAddress: "abcdefgh@gmail.com",
    },
    skills: ["HTML", "CSS", "Javascript", "Typescript"]
};
console.log(studentData.name);
console.log((_a = studentData.contact) === null || _a === void 0 ? void 0 : _a.phoneNo);
