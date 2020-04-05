let obj = moment();
let userInputCalender = $(".description").text;
let months = obj._locale._months;
let time = obj._locale._relativeTime.h
let currentCalenderInfo = obj.toObject();
let empty = [];
let timeOfDay = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5pm"]
let svBtn = $(".saveBtn");

//displayCalender();
$('#currentDay').append(obj._d);
show();

// function displayCalender() {
//     timeOfDay.forEach(function (timeOfDay) {
//         let setRow = $('<div class="row time-block" col-9></div>');
//         let setHour = $("<div>").addClass("hour col-md-1").text(timeOfDay);
//         let textInput = $("<textarea id=text-area class= col-md-10 'description'>");
//         let saveButton = $("<div>").addClass("btn saveBtn col-md-1").append($("<i class= 'fas fa-save'>"));
//         setRow.append(setHour).append(textInput).append(saveButton);
//         $(".container").append(setRow);
//     })
// }

$(document).ready(function(){
displayBlocks()
var todayDate = moment().format('dddd' + "," + 'LL');
document.getElementById("currentDay").innerHTML = todayDate;
var saveComment = localStorage.getItem('9AM')
$("#9AM").val(saveComment)
var saveComment = localStorage.getItem('10AM')
$("#10AM").val(saveComment)
var saveComment = localStorage.getItem('11AM')
$("#11AM").val(saveComment)
var saveComment = localStorage.getItem('12PM')
$("#12PM").val(saveComment)
var saveComment = localStorage.getItem('1PM')
$("#1PM").val(saveComment)
var saveComment = localStorage.getItem('2PM')
$("#2PM").val(saveComment)
var saveComment = localStorage.getItem('3PM')
$("#3PM").val(saveComment)
var saveComment = localStorage.getItem('4PM')
$("#4PM").val(saveComment)
var saveComment = localStorage.getItem('5PM')
$("#5PM").val(saveComment)



})

$(document).on("click", ".saveBtn", function () {
    // value of the siblgs
    // get the id of the siblings
    var value = $(this).siblings('.description').val();
    var id = $(this).siblings('.description').attr('id');
    localStorage.setItem(id, value)
});

function show(){
    let dataToShow = localStorage.getItem('data');
    $('.description').append(dataToShow);
    alert('saved value is ' + dataToShow);
    console.log(dataToShow);
}


function decideTime (){
    
    if(hourNow<now){
        $('.description').addClass("past");
    }else if(hourNow>now){
        changeColor = "future"
    }else{
        changeColor = "present"
    }
    return;
    (tB.children("textarea")[0].classList.add(changeColor))
}
function plannerColor() {
    $('.description').addClass("presesnt");
}
plannerColor();

let currentTime = moment().format('HH');

console.log(timeOfDay);
let todayDate = moment().format('dddd' + ", " + 'LL');
displayBlocks();
$('#currentDay').append(todayDate);

function displayBlocks() {
    timeOfDay.forEach(function(time){
        var $row = $(`<div class="row time-block col-12 hour"></div>`);
        var stringTime = (Number(String(time).substring(0, time.length - 2)));
        if(stringTime < 9){
            stringTime = stringTime + 12;
        }
        //console.log("CurrenTime: ", currentTime);
        //console.log("Time from array: ", time);
        console.log("Shortened time from array :", stringTime);
        if (stringTime === currentTime){
            var $text = $(`<textarea id='${time}' class='present morning description  col-9'>`);
        } else if (stringTime > currentTime){
            var $text = $(`<textarea id='${time}' class='future afternoon description  col-9'>`);
        }else {
            var $text = $(`<textarea id='${time}' class='past night description  col-9'>`);
        }
        var $hour = $("<div>").addClass("hour col-2").text(`${time}`);
        //var $text = $(`<textarea id='${time}' class='description  col-9'>`);
        console.log("Typed Text: ", $text);
        var $saveBtn = $("<button>").addClass("saveBtn col-1 fas fa-save")
        $row.append($hour)
            .append($text)
            .append($saveBtn)
        $(".container").append($row)
    });
}