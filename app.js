"use strict";
window.addEventListener("load", init);

// Grab the DOM elements into variables
let tha_hours = document.querySelector("#sw_hours");
let tha_minutes = document.querySelector("#sw_minutes");
let tha_seconds = document.querySelector("#sw_seconds");
let tha_milli_seconds = document.querySelector("#sw_milli_seconds");
let tha_startBtn = document.querySelector("#sw_btn");
let tha_stopBtn = document.querySelector("#sw_stop");

// The Times
let hrs  = 0,	mins = 0,	secs = 0,	msecs = 0;
let isRunning = true;

function init()
{
	tha_hours.value = "00";
	tha_minutes.value = "00";
	tha_seconds.value = "00";
	tha_milli_seconds.value = "00";
	tha_startBtn.value = "START";
	tha_stopBtn.value = "STOP";
}

tha_startBtn.addEventListener("click", run);
tha_stopBtn.addEventListener("click", stop)

function run()
{
	if(isRunning)
	{
		tha_startBtn.disabled = true;
		msecs++;
		if(msecs < 9)
		{
			tha_milli_seconds.value = "0" + msecs
		}
		else
		{
			tha_milli_seconds.value = msecs;
		}

		if(msecs == 10)
		{		
			secs++;
			msecs = 0;
			if(secs <10)
				{
					tha_seconds.value = "0" + secs;
				}
				else
				{
					tha_seconds.value = secs;
				}

			if(secs == 60)
			{
				tha_seconds.value = "00";
				mins++;
				secs = 0;
				if(mins <10)
				{
					tha_minutes.value = "0" + mins;
				}
				else
				{
					tha_minutes.value = mins;
				}

				if(mins == 60)
				{
					tha_minutes.value = "00";
					hrs++;
					mins = 0;
					if(hrs < 10)
					{
						tha_hours.value = "0" + hrs;
					}
					else
					{
						tha_hours.value = hrs;
					}
				}

			}
		}

		timer();
	}

}

function stop()
{
	isRunning = false;
	tha_startBtn.disabled = false;
	tha_startBtn.addEventListener("mousedown", function(){isRunning = true});
}

function timer()
{
	setTimeout(run, 100);
}