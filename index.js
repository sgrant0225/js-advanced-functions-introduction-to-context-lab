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

 let hoursWorkedOnDate = function(employeeObj, dateWorked) {
     let clockedInEvent= employeeObj.timeInEvents.find(function(e){
         return e.date === dateWorked
     })
     let clockedOutEvent = employeeObj.timeOutEvents.find(function(e){
        return e.date === dateWorked
    })

    return (clockedOutEvent.hour - clockedInEvent.hour) / 100
 }

 let wagesEarnedOnDate = function(employee, dateSought){
    let rawWage = hoursWorkedOnDate(employee, dateSought)
        * employee.payPerHour
    return parseFloat(rawWage.toString())
}

let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)

    return payable
}

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor(rec)
    }, 0)
}