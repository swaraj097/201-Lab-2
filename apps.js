'use strict';

// // 1. Favorite Icecream
var iceCream_fn = function () {
  

  var favorite_icecream = prompt ('is swaraj\'s favorite icecream chocolate ?');

  favorite_icecream = favorite_icecream.toLowerCase();

  var wrong_icecream = 'no';



  if (favorite_icecream === wrong_icecream || favorite_icecream === 'n'){
      alert('FANTASTIC !!!')
  } 
  else if (favorite_icecream === 'yes' || favorite_icecream === 'y'){
      alert('are you serious?')
  }
}
console.log ('This is the favorite icecream question')
iceCream_fn();






//2. The Weather
var weather_fn = function (){
  var hows_the_weather = prompt ('is it raining in Seattle right now ?');

  var sunny_weather = 'yes';

  hows_the_weather = hows_the_weather.toLowerCase();

  if (hows_the_weather === 'yes' || sunny_weather || hows_the_weather === 'y'){
  alert('thats amzing!')}
  else if (hows_the_weather === 'no' || hows_the_weather === 'n'   ){
      alert('Thats usual')}
  console.log ('Rain or no Rain in Seattle')
}
weather_fn();





  //3. Do you have a dog
function animal_lover (){
    var animal_pet = prompt ('are you a dog person?');
    var animal_pet_answer = 'yes'

    animal_pet = animal_pet.toLowerCase();
    
    if (animal_pet === 'yes' || animal_pet_answer || animal_pet === 'y'){
        alert('you must hate cats')}
    else if (animal_pet === 'no' || animal_pet === 'n'){
        alert('you must be a cat person')
    }
    console.log (' Dog or a Cat person')
  }
animal_lover();








//4. Drinking Beer
function my_drink (){
  var drink_type = prompt (' do you drink beer?');
  var drink_type_answer = 'yes'

  if (drink_type === 'yes' || drink_type === 'YES' || drink_type === 'Y' || drink_type === 'y')
  {alert('youre the man!!')}
  else if(drink_type === 'NO' || drink_type === 'no' || drink_type === 'N' || drink_type === 'n'){
  alert('you must like drinking whiskey')}

  console.log ('Drinking whiskey or beer')
}
my_drink();








//5. Hiking
function nature_boy (){
  var nature_lover = prompt (' do you hike often?')
  var nature_lover_answer = 'yes'

  if (nature_lover === 'yes' || nature_lover === 'YES' || nature_lover === 'y' || nature_lover === 'Y')
  {prompt (' where do you usually go?')};
  {alert('thats awesome')}

  if(nature_lover === 'NO' || nature_lover === 'no' || nature_lover === 'N' || nature_lover === 'n')
  {alert('you should think about going for one')}

  console.log ('if the person hikes or not')
}
nature_boy();









// 6. How many beers can I drink?
function my_beers (){
  var beers = prompt ('how many beers can I drink')
  var msg;
  var roundnumber;

  var i;
  for (i = 0; i < 10; i++){


      if ( beers === '9' ) {alert('Fantastic');
      break;
  }
      if (beer === '10' || beer === '8'){
        alert('thats way too many');
        continue;
        }
      


  //beers === 1; beers ===2

      document.write(i);
  }
}