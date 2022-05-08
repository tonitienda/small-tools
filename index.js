
const { format, addDays } = require('date-fns')

const startDate = new Date('2022-05-01')

const hours = [
    0,      0,      0,      7,      4,      0,      0, 
    0,      5,      5.5,    0,      0,      0,      7,
    0,      5.5,    0,      7,      0,      5.5,    0,
    5.5,    0,      5.5,    5.5,    0,      5.5,    0,
    5,      5,      0,
    
]

const totalWorkingHours = hours.reduce((total, n)=> n + total, 0)

const result = []

for (let i =0; i < hours.length; i++) {
    let totalHours = 0
    let date = new Date(startDate.valueOf());

    date.setDate(date.getDate() + i);
    for (let j = i; j < i + 7; j ++) {
        totalHours += hours[j] || 0
    }

    result.push({
        date,
        totalHours
        
    })
}

for(let row of result) {
    console.log(format(row.date, 'yyyy-MM-dd'), '->', format(addDays(row.date, 6), 'yyyy-MM-dd'), row.totalHours, 'hours')
}

console.log(`Total working hours:`, totalWorkingHours)