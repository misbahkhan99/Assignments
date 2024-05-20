"use strict";
/////*****    Part 3: Array with Types and Indexing - Employee Salaries     ****/////
// Challenge:
// You are managing employee salaries for a company. Implement logic to calculate salaries and
// handle bonuses.
// 1. Define a type alias named Employee with the following properties:
// • name (string): The name of the employee.
// • hoursWorked (number): The number of hours the employee worked.
// • hourlyRate (number): The hourly rate of the employee.
// • salary (number): The base salary of the employee.
// 2. Define an array named employees containing employee objects. Each employee
// object should include a name, hoursWorked, hourlyRate, and salary.
// 3. Implement a function named calculateSalary that calculates the salary for each
// employee based on the hours worked and hourly rate.
// 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.
const employees = [
    {
        name: "misbah",
        hoursWorked: 40,
        hourlyRate: 25,
        salary: 50000,
    },
    {
        name: "ayesha",
        hoursWorked: 15,
        hourlyRate: 30,
        salary: 60000,
    }
];
function calculateSalary(employee) {
    let totalSalary = employee.salary;
    totalSalary = totalSalary + employee.hourlyRate * employee.hoursWorked;
    if (employee.hoursWorked >= 20) {
        totalSalary = totalSalary + totalSalary * 0.1;
    }
    return totalSalary;
}
for (const employee of employees) {
    const employeeTotalSalary = calculateSalary(employee);
    console.log(`${employee.name}'s total salary: $${employeeTotalSalary.toFixed(2)}`);
}
