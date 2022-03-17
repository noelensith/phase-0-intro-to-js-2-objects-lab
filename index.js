// Write your solution in this file!
//set const for employee 
const employee = {
    name: '',
    streetAdress: '',
}
//function updates the Employee name and street address (key) with the values 
//by returning a new value pair without affecting the original const employee
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}
//function deletes the key value affecting the original const employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
//function deletes from employee non-destructively. deletes key and returns with deleted key
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}
//function deletes key from origianl const destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}