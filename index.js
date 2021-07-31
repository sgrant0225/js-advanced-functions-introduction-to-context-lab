// Your code here

 function createEmployeeRecord(arr){
   return {
       firstName: arr[0],
       familyName: arr[1],
       title: arr[2],
       payPerHour: arr[3],
       timeInEvents: [],
       timeOutEvents: []
       
   }
}

let createEmployeeRecords = function(employeeRowData){
      return employeeRowData.map(row => {
          return createEmployeeRecord(row)
      })
}

function createTimeInEvent(employeeObj, dateStamp){
    let [date, hour] = dateStamp.split(' ') 
   //add the employee record object with keys to the timeInEvents array
    employeeObj.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date,
    })
    return employeeObj
} 


function createTimeOutEvent(employeeObj, dateStamp){
    let [date, hour] = dateStamp.split(' ') 
   //add the employee record object with keys to the timeOutEvents array
    employeeObj.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date,
    })
    return employeeObj
} 