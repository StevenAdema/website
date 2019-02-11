CountDownTimer('02/12/2019 9:00 AM', 'countdown');

function CountDownTimer(date, id) {
     var end = new Date(date);

     var _second = 1000;
     var _minute = _second * 60;
     var _hour = _minute * 60;
     var _day = _hour * 24;
     var timer;

     function showRemaining() {
         var now = new Date();
         var distance = end - now;
         if (distance < 0) {

             clearInterval(timer);
             document.getElementById(id).innerHTML = 'DONE!!!';
            
             return;
         }
         var days = Math.floor(distance / _day);
         var hours = Math.floor((distance % _day) / _hour);
         var minutes = Math.floor((distance % _hour) / _minute);
         var seconds = Math.floor((distance % _minute) / _second);

         document.getElementById(id).innerHTML = days + 'days ';
         document.getElementById(id).innerHTML += hours + 'hrs ';
         document.getElementById(id).innerHTML += minutes + 'mins ';
         document.getElementById(id).innerHTML += seconds + 's';
     }

     timer = setInterval(showRemaining, 1000);
 }

 
 