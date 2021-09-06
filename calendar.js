const date = new Date();
var days = "";
var selectedDate = "";
var selectedDay = 0;
var selectedMonth = date.getMonth();
var selectedYear = date.getFullYear();
var eventBeginTime = [];
var eventEndTime = [];
var eventTypes = [];
var eDates = [];

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
 

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");
    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January" + " " + date.getFullYear(),
        "February" + " " + date.getFullYear(),
        "March" + " " + date.getFullYear(),
        "April" + " " + date.getFullYear(),
        "May" + " " + date.getFullYear(),
        "June" + " " + date.getFullYear(),
        "July" + " " + date.getFullYear(),
        "August" + " " + date.getFullYear(),
        "September" + " " + date.getFullYear(),
        "October" + " " + date.getFullYear(),
        "November" + " " + date.getFullYear(),
        "December" + " " + date.getFullYear()
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = "Today's Date: " + new Date().toDateString().substring(3, new Date().toDateString().length);

		days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
			var dayid = ('date' + i).toString();
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            days += `<div class="today" id=` + dayid + `>${i}</div>`;
        } else {
						
            days += `<div class="month-days" id=` + dayid + `>${i}</div>`;
        }
    }


    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;

		$(function() {	
    	$("#date1").click(function() {
				selectedDay = 1;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});

		$(function() {	
    	$("#date2").click(function() {
     	 	selectedDay = 2;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});

		$(function() {	
    	$("#date3").click(function() {
     	 	selectedDay = 3;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});

		$(function() {	
    	$("#date4").click(function() {
     	 	selectedDay = 4;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});

		$(function() {	
    	$("#date5").click(function() {
     	 	selectedDay = 5;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});

		$(function() {	
    	$("#date6").click(function() {
     	 	selectedDay = 6;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});

		$(function() {	
    	$("#date7").click(function() {
     	 	selectedDay = 7;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});

		$(function() {	
    	$("#date8").click(function() {
     	 	selectedDay = 8;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});
		
		$(function() {	
    	$("#date9").click(function() {
     	 	selectedDay = 9;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});		
		
		$(function() {	
    	$("#date10").click(function() {
     	 	selectedDay = 10;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});		
		
		$(function() {	
    	$("#date11").click(function() {
     	 	selectedDay = 11;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});

		$(function() {	
    	$("#date12").click(function() {
     	 	selectedDay = 12;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});
		
		$(function() {	
    	$("#date13").click(function() {
     	 	selectedDay = 13;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});		
		
		$(function() {	
    	$("#date14").click(function() {
     	 	selectedDay = 14;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});		
		
		$(function() {	
    	$("#date15").click(function() {
     	 	selectedDay = 15;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});
		
    $(function() {	
    	$("#date16").click(function() {
     	 	selectedDay = 16;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});

		$(function() {	
    	$("#date17").click(function() {
     	 	selectedDay = 17;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});
		
		$(function() {	
    	$("#date18").click(function() {
     	 	selectedDay = 18;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});
		
		$(function() {	
    	$("#date19").click(function() {
     	 	selectedDay = 19;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});		
		
		$(function() {	
    	$("#date20").click(function() {
     	 	selectedDay = 20;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});		
		
		$(function() {	
    	$("#date21").click(function() {
     	 	selectedDay = 21;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});

		$(function() {	
    	$("#date22").click(function() {
     	 	selectedDay = 22;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});
		
		$(function() {	
    	$("#date23").click(function() {
     	 	selectedDay = 23;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});		
		
		$(function() {	
    	$("#date24").click(function() {
     	 	selectedDay = 24;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});		
		
		$(function() {	
    	$("#date25").click(function() {
     	 	selectedDay = 25;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});

		$(function() {	
    	$("#date26").click(function() {
     	 	selectedDay = 26;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});		
		
		$(function() {	
    	$("#date27").click(function() {
     	 	selectedDay = 27;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});		
		
		$(function() {	
    	$("#date28").click(function() {
     	 	selectedDay = 28;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});

    $(function() {	
    	$("#date29").click(function() {
     	 	selectedDay = 29;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
  	});		
		
		$(function() {	
    	$("#date30").click(function() {
     	 	selectedDay = 30;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
		});

    $(function() {	
    	$("#date31").click(function() {
     	 	selectedDay = 31;
				if (selectedDay < 10 && selectedMonth + 1 >= 10) {
					selectedDate = ((selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedMonth + 1 < 10  && selectedDay >= 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				} else if (selectedDay < 10 && selectedMonth + 1 < 10) {
					selectedDate = ("0" + (selectedMonth + 1) + "/0" + selectedDay + "/" + selectedYear).toString();
				} else {
					selectedDate = ((selectedMonth + 1) + "/" + selectedDay + "/" + selectedYear).toString();
				}
				console.log(selectedDate);
    	});
		});
		/*
		document.querySelector(".date1").addEventListener("click", () => {
  		console.log("hi");
		});
		*/
}


document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
	if (selectedMonth == 0) {
		selectedMonth = 11;
		selectedYear--;
	} else {
		selectedMonth--;
	}
	
  renderCalendar();
});

  
document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
	if (selectedMonth == 11) {
		selectedMonth = 0;
		selectedYear++;
	} else {
		selectedMonth++;
	}

  renderCalendar();
});


document.querySelector(".days").addEventListener("click", () => {
  shift();
	fadein();
	getBreakTimes();
});


renderCalendar();


//this is the shift function that has a ease animation
function shift() {
    const elem = document.getElementById("animate");
    elem.style.animation = "shift-left 1s 1 forwards"; 
}

function init() {
  eventTypes[0] = 'a';
  eventBeginTime[0] = 'a';
  eventEndTime[0] = 'a';
  eDates[0] = 'a';
  var json_str = JSON.stringify(eventTypes);
  createCookie('eventTypesC', json_str);
  json_str = JSON.stringify(eventBeginTime);
  createCookie('beginTimeC', json_str);
  json_str = JSON.stringify(eventEndTime);
  createCookie('endTimeC', json_str);
  json_str = JSON.stringify(eDates);
  createCookie('datesC', json_str);
  console.log("Yes");
}



function addDate() {
  a = document.getElementById('dateIn').value;
  console.log(a);
  var json_str = getCookie('datesC');
  eDates = JSON.parse(json_str);
  eDates.push(a);  
  console.log(eDates);
  var json_str = JSON.stringify(eDates);
  createCookie('datesC', json_str);
  return false; 
}


function addEventType() {
  a = document.getElementById('eventIn').value;
  console.log(a);
  var json_str = getCookie('eventTypesC');
  eventTypes = JSON.parse(json_str);
  eventTypes.push(a);  
  console.log(eventTypes);
  var json_str = JSON.stringify(eventTypes);
  createCookie('eventTypesC', json_str);
  return false; 
}

function addBeginTime() {
  a = document.getElementById('beginIn').value;
  console.log(a);
  var json_str = getCookie('beginTimeC');
  eventBeginTime = JSON.parse(json_str);
  eventBeginTime.push(a);  
  console.log(eventBeginTime);
  var json_str = JSON.stringify(eventBeginTime);
  createCookie('beginTimeC', json_str);
  return false; 
}

function addEndTime() {
  a = document.getElementById('endIn').value;
  console.log(a);
  var json_str = getCookie('endTimeC');
  eventEndTime = JSON.parse(json_str);
  eventEndTime.push(a);  
  console.log(eventEndTime);
  var json_str = JSON.stringify(eventEndTime);
  createCookie('endTimeC', json_str);
}

function getTimeAsString(hr) {
  var res = "";
	var pm = false;
  var hour = Math.floor(hr / 60);
  var min = (hr % 60); 
  
  if (hour == 0) {
    res += "12:";
  } else if (hour > 12) {
    res += (hour - 12).toString() + ":"; 
		pm = true;
  } else {
    res += hour.toString() + ":"; 
  }

	if (min == 0) {
		res += "00";
	} else {
    if (min.toString().length == 1) {
      res += "0";
    }
		res += (min).toString();
	}

	if (pm) {
		res += " PM";
	} else {
		res += " AM";
	}

	return res;
}

function getBreakTimes() {
  console.log("Looking at the date:" + selectedDate);

  var json_str = getCookie('datesC');
  eDates = JSON.parse(json_str);

  json_str = getCookie('eventTypesC');
  eventTypes = JSON.parse(json_str);

  json_str = getCookie('beginTimeC');
  eventBeginTime = JSON.parse(json_str);

  json_str = getCookie('endTimeC');
  eventEndTime = JSON.parse(json_str);

  console.log(eDates);
  console.log(eventTypes);
  console.log(eventBeginTime);
  console.log(eventEndTime);
  eft = [];
  est = [];
  bft = [];
  bst = [];



  // add all events if they are in the same day (units = minutes). 
  for (let i = 1; i < eventBeginTime.length; i += 1) {
		//wait also it should be split by '/ cause thats how the dates are formatted rn <-- no i'm doing it my own way for the array i created 

    var betterDate = eDates[i].split('-');
    eDates[i] = betterDate[1] + "/" + betterDate[2] + "/" + betterDate[0];
    console.log(eDates[i]);
    console.log(selectedDate);

    if (eDates[i] == selectedDate) {
      console.log("come on man");
      var hms = eventBeginTime[i];
      var a = hms.split(':');
			//why (+a[0]) shouldnt it just be (a[0])
      var minutes = (+a[0]) * 60 + (+a[1]);
      console.log(minutes); 
      eft.push(minutes);
      hms = eventEndTime[i];
      a = hms.split(':');
      minutes = (+a[0]) * 60 + (+a[1]);
      console.log(minutes); 
      est.push(minutes);
    }
  }
  
  console.log(eft);
  console.log(est);

  startBT = [];
  endBT = [];

  for (let i = 0; i < eft.length; i += 1) {
    if ((est[i] - eft[i]) > 8 && eventTypes[i] != "meeting") {
      console.log(eft[i]);
      startBT.push(eft[i] + Math.floor(((est[i] - eft[i]) / 2)));
      endBT.push(eft[i] + Math.floor(((est[i] - eft[i]) / 2) + 8));
    }
  }

  for (let i = 0; i < eft.length; i += 1) {
    let ttt = eft[i], mx = 0;
    for (let j = 0; j < est.length; j += 1) {
      if (i == j) {
        continue; 
      }
      if (est[j] <= eft[i]) {
        mx = Math.max(mx, est[j]);
      }
    }
    if (ttt - mx > 0) {
      startBT.push(mx);
      endBT.push(ttt);
    }
  }

  // sort the list based on start time 
  for (let i = 0; i < startBT.length; i += 1) {
    for (let j = i + 1; j < startBT.length; j += 1) {
      if (startBT[i] > startBT[j]) {
        let tmp1 = startBT[j];
        let tmp2 = endBT[j];
        startBT[j] = startBT[i];
        endBT[j] = endBT[i];
        startBT[i] = tmp1;
        endBT[i] = tmp2; 
      }
    }
  }

  document.getElementById("curDate").innerHTML = "Break Schedule For " + selectedDate;

  if (startBT.length == 0) {
    document.getElementById("first").innerHTML = "There seems to be no events planned for today, or you just don't have enough time to fit in breaks for today. If you think this is a mistake, add your events. If not, enjoy your day!!!";
    
    document.getElementById("second").innerHTML = "";
    document.getElementById("third").innerHTML = "";
    document.getElementById("fourth").innerHTML = "";
    document.getElementById("fifth").innerHTML = "";
  }

  if (startBT.length - 1 > 0) {
    document.getElementById("first").innerHTML = "Start your break at " + getTimeAsString(startBT[1]) + " for " + (endBT[1] - startBT[1]) + " minutes";
    document.getElementById("second").innerHTML = "Looks like you have the rest of the day for yourself!";
    document.getElementById("third").innerHTML = "Looks like you have the rest of the day for yourself!";
    document.getElementById("fourth").innerHTML = "Looks like you have the rest of the day for yourself!";
    document.getElementById("fifth").innerHTML = "Looks like you have the rest of the day for yourself!";
  }
  if (startBT.length - 1 > 1) {
    document.getElementById("second").innerHTML = "Start your break at " + getTimeAsString(startBT[2]) + " for " + (endBT[2] - startBT[2]) + " minutes";
    document.getElementById("third").innerHTML = "Looks like you have the rest of the day for yourself!";
    document.getElementById("fourth").innerHTML = "Looks like you have the rest of the day for yourself!";
    document.getElementById("fifth").innerHTML = "Looks like you have the rest of the day for yourself!";
  }
  if (startBT.length - 1 > 2) {
    document.getElementById("third").innerHTML = "Start your break at " + getTimeAsString(startBT[3]) + " for " + (endBT[3] - startBT[3]) + " minutes";
    document.getElementById("fourth").innerHTML = "Looks like you have the rest of the day for yourself!";
    document.getElementById("fifth").innerHTML = "Looks like you have the rest of the day for yourself!";
  }
  if (startBT.length - 1 > 3) {
    document.getElementById("fourth").innerHTML = "Start your break at " + getTimeAsString(startBT[4]) + " for " + (endBT[4] - startBT[4]) + " minutes";
    document.getElementById("fifth").innerHTML = "Looks like you have the rest of the day for yourself!";
  }
  if (startBT.length - 1 > 4) {
    document.getElementById("fifth").innerHTML = "Start your break at " + getTimeAsString(startBT[5]) + " for " + (endBT[5] - startBT[5]) + " minutes";
  }
}


function fadein() {
	const elem = document.getElementById("fadein");
	elem.style.display = 'inline-block';
	//elem.style.position = 'relative';
	//elem.style.flex = "1";
  //elem.style.zindex = 2000;
	//elem.style.transform = "translateY(-112.5%)";
  //elem.style.top = (window.innerHeight) + 'px';
	//elem.style.left = (window.innerWidth / 2 + 10) + 'px';
  //elem.style.animation = "fade-in 2s 1 ease-in-out"; 
}

function TestsFunction() {
    var T = document.getElementById("MoreQuestions");
    T.style.display = "block";  // <-- Set it to block
}


/*
.calendar {
width: 45rem;
height: 52rem;
background: rgba(255, 255, 255, 0.1);
box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.1);
border: 1px solid rgba(255, 255, 255, 0.4);
border-right: 1px solid rgba(255, 255, 255, 0.2);
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 20px;
backdrop-filter: blur(25px);

position: relative;
z-index: 1000;

animation: fade-in 1s 1 ease-in-out;
animation-fill-mode: forwards;
}
*/



// function shift() {
//   let id = null;
//   const elem = document.getElementById("animate");
//   clearInterval(id);
//   id = setInterval(frame, 0.75);
//   function frame() {
//     if (pos == -300) {
//       clearInterval(id);
//     } else {
//       pos--;
//       elem.style.left = pos + 'px';
//     }
//   }
// }
