// Write your solution in this file!
const employee = {
  name: "Sally",
  streetAddress: "123 Alabaster Way",
}


function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
  return {
    ...employeeObject,
    [key]: value
  }
}



function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value
    return employeeObject
}

function deleteFromEmployeeByKey(employeeObject, key) {
  let employeeObject2 = { ...employeeObject }
  delete employeeObject2[key]

  console.log("EMPLOYEE OBJ: ", employeeObject)
  console.log("EMPLOYEE OBJ 2: ", employeeObject2)

  return employeeObject2
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
  delete employeeObject[key]
  return employeeObject
}