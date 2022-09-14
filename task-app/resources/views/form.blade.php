<!DOCTYPE html>
<html>
<head>
    <title>Our Team</title>
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">

    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
    @vite('resources/js/app.js')

</head>
<body>

{{--global error popup--}}

<div class="alert danger-alert">
    <h3>Something went wrong, this email has already been used. Please try again. </h3>
</div>



{{--form--}}

<form class="container" action="http://task/api/form/fill"  id="myForm">
    @csrf
    <div class="contact-box">
        <div class="right">
            <h2>Our Team</h2>

            <input type="text" class="full_name field" name="full_name" placeholder="Your Name">
            <p class="error full_name" ></p>

            <input type="text" class="email field" name="email" placeholder="Your Email">
            <p class="error email"></p>

            <input type="text" class="address field" name="address" placeholder="Address">
            <p class="error address"></p>

            <textarea placeholder="Notes"  name="notes" class="notes field"></textarea>
            <p class="error notes"></p>

            <input type="submit" class="btn" value="Send">

        </div>
    </div>
</form>


{{--popup--}}

<div class="popup">

    <div class="valid">
    </div>
    <h1>Welocome</h1>

    <br>
    <p>You've successfully signed </p>

    </div>
</div>



{{--javascrpit--}}

<script src="{{asset('resources/js/main.js')}}" type="text/javascript"></script>

</body>
</html>
