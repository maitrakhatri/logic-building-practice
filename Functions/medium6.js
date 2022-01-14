// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

const minDate = (date1,date2) => {

    const dateSplitter = date => {
        const splittedDate = date.split("/")
        const dateObj  = {
            day: Number(splittedDate[0]),
            month: Number(splittedDate[1]),
            year: Number(splittedDate[2])
        }; 
        return dateObj
    }

    const date1Com = dateSplitter(date1);
    const date2Com = dateSplitter(date2);

    if(date1Com.year < date2Com.year) {
        console.log(date1);
    }
    else if (date1Com.year === date2Com.year) {
        if(date1Com.month < date2Com.month) {
            console.log(date1)
        }
        else if (date1Com.month === date2Com.month) {
            if(date1Com.day < date2Com.day) {
                console.log(date1)
            }
            else {
                console.log(date2)
            }
        }
        else {
            console.log(date2)
        }
    }
    else {
        console.log(date2)
    }

}

minDate('02/02/2021', '24/04/2021')