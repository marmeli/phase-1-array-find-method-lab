const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]

function superbowlWin(record){
if (record.find(obj => obj.result === "W")){
return (record.find(obj => obj.result === "W")).year;
} 
    else {
        return undefined;
    }
}