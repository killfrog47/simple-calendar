function displayCalendar(dateRange) {


	var htmlContent = "";
	var FebNumberOfDays = "";
	var counter = 1;

	// console.log(typeof date);
	var startDate = typeof dateRange == 'undefined' ? new Date() : new Date(Date.parse(dateRange[0]));
	// console.log(Date.parse(dateRange[0]));
	var endDate = typeof dateRange == 'undefined' ? new Date() : new Date(Date.parse(dateRange[1]));
	var month = startDate.getMonth();

	var thisMonth = month + 1;
	var prevMonth = month - 1;
	var day = startDate.getDate();
	var startDay = startDate.getDate();
	var endDay = endDate.getDate();
	var year = startDate.getFullYear();

	if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
		FebNumberOfDays = 29;
	} else {
		FebNumberOfDays = 28;
	}

	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
	var dayPerMonth = ["31", "" + FebNumberOfDays + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

	var thisDate = new Date(Date.parse('' + thisMonth + '/1/' + year + ''));
	  console.log(thisDate);
	var thisMonthStartDay = thisDate.getDay();
	var weekdays2 = thisMonthStartDay;
	var lastDate = new Date(Date.parse(thisMonth + '/' + dayPerMonth[month] + '/' + year));
	var numOfDaysLastMonth = ((month - 1) < 0) ? dayPerMonth[11] : dayPerMonth[month - 1];
	var numOfDays = dayPerMonth[month];
	var endOfMonthDay = lastDate.getDay();

	// console.log(thisMonthStartDay);
	while (thisMonthStartDay > 0) {
		htmlContent += "<div class='day otherMonth'><span></span></div>";
		// htmlContent += "<div class='day otherMonth'><span>" + ((parseInt(numOfDaysLastMonth) + 1) - thisMonthStartDay) + "</span></div>";

		thisMonthStartDay--;
	}
	while (counter <= numOfDays) {
		if (weekdays2 > 6) {
			weekdays2 = 0;
			htmlContent += "</div><div class='week'>";
		}
		if (counter == startDay) {
			htmlContent += "<div class='day startDay'><span>" + counter + "</span></div>";
		} else if (counter > startDay && counter < endDay) {
			htmlContent += "<div class='day betweenDay'><span>" + counter + "</span></div>";
		} else if (counter == endDay) {
			htmlContent += "<div class='day endDay'><span>" + counter + "</span></div>";
		} else {
			htmlContent += "<div class='day'><span>" + counter + "</span></div>";

		}
		if (counter == numOfDays) {
			var innerCounter = endOfMonthDay + 1;
			var nextMonthCounter = 1;
			// console.log(endOfMonthDay)
			while (innerCounter <= 6) {
				htmlContent += "<div class='day otherMonth'><span></span></div>";
				// htmlContent += "<div class='day otherMonth'><span>" + nextMonthCounter + "</span></div>";
				innerCounter++;
				nextMonthCounter++;
			}
		}

		weekdays2++;
		counter++;
	}



	// building the calendar html body.
	var calendarBody = '<div class="calendarHeaderMonth"><div class="currentMonth">' + monthNames[month] + ' ' + year + '</div></div>';
	// var calendarBody = '<div class="calendarHeaderMonth"><div class="prev"><i class="fas fa-angle-left"></i></div><div class="currentMonth">' + monthNames[month] + '</div><div class="next"><i class="fas fa-angle-right"></i></div></div>';
	calendarBody += '<div class="calendarHeaderDays"><div class="dayOfWeek">S</div><div class="dayOfWeek">M</div><div class="dayOfWeek">T</div><div class="dayOfWeek">W</div><div class="dayOfWeek">T</div><div class="dayOfWeek">F</div><div class="dayOfWeek">S</div></div>';
	calendarBody += "<div class='month'>";
	calendarBody += "<div class='week'>";
	calendarBody += htmlContent;
	calendarBody += "</div>";
	return calendarBody;

}
