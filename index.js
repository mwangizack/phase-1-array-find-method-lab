// code your solution here
function superbowlWin(record){
    const everWon = record.find(element => element.result === 'W')
    // console.log(everWon)
    if (everWon){
        return everWon.year;
    }else{
        return everWon;
    }
}

// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]

//   console.log(superbowlWin(record))