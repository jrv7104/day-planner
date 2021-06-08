//Display current day
var currentDay = document.getElementById("currentDay")
currentDay.innerText = moment().format("dddd, MMMM Do YYYY");
var saveBtn = document.querySelectorAll(".saveBtn")
var currentHour = moment().format('H')

//Display hourly blocks
var hour = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];

//Change color of hour block based off of if hour is current, the past or the future (see CSS file)
//var present = ;
//var past = ;
//var future = ;//


for(j=0; j<hour.length; j++){
    var inputArea = document.querySelector("#entry-" + hour[j])

    //future present or past
    if(j+9 < currentHour){
        console.log("past")
        inputArea.setAttribute("class", "past")
    }else if (j+9 == currentHour){
        console.log("present")
    }else {
        console.log("future")
        inputArea.setAttribute("class", "future")
    }

    inputArea.value = localStorage.getItem("entry-" + hour[j])
}


//Add ability to edit events in every hour block

function enterEvent() {
    entryBox.addEventListener("click", enter)
    document.getElementsByClassName("entryBox")

}
//Save events where they will still be present when page refreshes

function saveEvent(e) {
    console.log(e.target.id)
    var entry = document.querySelector("#entry-"+e.target.id).value
    // document.getElementsByClassName("saveBtn")
    localStorage.setItem("entry-"+e.target.id, entry)
}

// Hopeful goals for tutoring session
// Be able to enter and save text in tasks column (and keep text displayed when refreshed)
// Change color of hour block based off of what time it is 
for(i=0; i< saveBtn.length; i++){
    saveBtn[i].addEventListener("click", saveEvent)
}