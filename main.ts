    /*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
    • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
    • Add one new guest to the beginning of your array.
    • Add one new guest to the middle of your array. 
    • Use append() to add one new guest to the end of your list. 
    • Print a new set of invitation messages, one for each person in your list.*/

    let guests:string[] = ["Juned", "Bilal", "Zeeshan"]
    console.log(`Good news guys,We have found a bigger dinner table`)

    // add one new guest to the begining of the array.
    guests.unshift("Asad");

    //add one new guest to the middle of the array.
    let middleguest= guests.length/2;
    guests.splice(middleguest,0,"Daud");

    //add one new guest to the end of the list.
    guests.push("kumail")
    //print a new set of invitation.
    console.log(`new set of invitation\n`)
    guests.forEach((guest) => {
        console.log(`Dear ${guest},\n you are cordially invited for dinner at my house. I would be glad if you could make it `)
    })


