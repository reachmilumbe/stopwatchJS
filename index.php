<!DOCTYPE html>
<html>
<head>
	<title>Stop Watch</title>
	<link rel="stylesheet" type="text/css" href="app.css">
</head>
<body>
	<div class="sw_wrapper">
		<h1>STOP WATCH 1.0</h1>
		<input type="text" name="sw_hours" id="sw_hours" class="input_style" disabled="" >
		<input type="text" name="sw_minutes" id="sw_minutes" class="input_style" disabled="" >
		<input type="text" name="sw_seconds" id="sw_seconds" class="input_style" disabled="" >
		<input type="text" name="sw_milli_seconds" id="sw_milli_seconds" class="input_style" disabled="" >
		
		<div id="tha_btn">
			<input type="button" name="sw_btn" id="sw_btn" class="sw_btn">
			<br>
			<input type="button" name="sw_stop" id="sw_stop" class="sw_stop">
		</div>		
	</div>

<script src="app.js"></script>
</body>
</html>