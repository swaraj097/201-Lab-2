'use strict';

// // 1. Favorite Icecream
// var favorite_icecream = prompt ('is swaraj\'s favorite icecream chocolate ?');

// var favorite_icecream_answer = 'yes' 

// if (favorite_icecream === 'yes' || favorite_icecream === 'YES' || favorite_icecream === 'y' || favorite_icecream === 'Y'){
//     alert('FANTASTIC !!!')
// } else if (favorite_icecream === 'i dont know' || favorite_icecream === 'I DONT KNOW' ){
//     alert('are you serious?')
// } else if (favorite_icecream === 'no' || favorite_icecream === 'NO' || favorite_icecream === 'N' || favorite_icecream === 'n' ){
//     alert( 'You have to be kidding me')
// }
// console.log ('This is the favorite icecream question')

// //2. The Weather
// var hows_the_weather = prompt ('is it raining in Seattle right now ?');
// var hows_the_weather_answer = 'yes'

// if (hows_the_weather === 'yes' || hows_the_weather === 'YES' || hows_the_weather === 'Y' || hows_the_weather === 'y'){
// alert('thats a usual day')}
// else if (hows_the_weather === 'no' || hows_the_weather === 'NO' || hows_the_weather === 'N' || hows_the_weather === 'n'   ){
//     alert('wow thats a miracle')}
// console.log ('Rain or no Rain in Seattle')

// //3. Do you have a dog
// var animal_pet = prompt ('are you a dog person?');
// var animal_pet_answer = 'yes'

// if (animal_pet === 'yes' || animal_pet === 'YES' || animal_pet === 'Y' || animal_pet === 'y'){
//     alert('you must hate cats')}
// else if (animal_pet === 'no' || animal_pet === 'NO' || animal_pet === 'N' || animal_pet === 'n'){
//     alert('you must be a cat person')
// }
// console.log (' Dog or a Cat person')

// //4. Drinking Beer
// var drink_type = prompt (' do you drink beer?');
// var drink_type_answer = 'yes'

// if (drink_type === 'yes' || drink_type === 'YES' || drink_type === 'Y' || drink_type === 'y')
// {alert('youre the man!!')}
// else if(drink_type === 'NO' || drink_type === 'no' || drink_type === 'N' || drink_type === 'n'){
// alert('you must like drinking whiskey')}

// console.log ('Drinking whiskey or beer')

// //5. Hiking
// var nature_lover = prompt (' do you hike often?')
// var nature_lover_answer = 'yes'

// if (nature_lover === 'yes' || nature_lover === 'YES' || nature_lover === 'y' || nature_lover === 'Y')
// {prompt (' where do you usually go?')};
// {alert('thats awesome')}

// if(nature_lover === 'NO' || nature_lover === 'no' || nature_lover === 'N' || nature_lover === 'n')
// {alert('you should think about going for one')}

// console.log ('if the person hikes or not')

//6. How many beers can I drink?

var beers = prompt ('how many beers can I drink')
 var msg;
 var roundnumber;

var i;
for (i = 0; i < 10; i++){
  switch(beers){
    case '3': msg = 'You have to be kidding me'; break;
    case '5': msg = 'you are not even close';break;
    case '8': msg = 'are you drunk?'; break;
    case '10': msg = ' Fantastic!!!'; break;
    case '1': msg = 'No way'; break;
    case '2': msg = 'Hell no'; break;
    case '4': msg = 'do you even drink?'; break;
    case '6': msg = 'you can do better'; break;
    case '7': msg = 'Not even close'; break;
    case '9': msg = 'youre getting there'; break;
    if ( beers === 10){alert('Fantastic')}  
    else if (beer > 10){alert('thats way too many')}
    

//beers === 1; beers ===2

    document.write(i);
}
