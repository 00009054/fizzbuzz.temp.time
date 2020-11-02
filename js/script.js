// Exercise 1
var elDistanceForm = document.querySelector('.distance-form');
var elDistanceInput = elDistanceForm.querySelector('.distance-input');
var elWalkTime = document.querySelector('.walk-time');
var elBikeTime = document.querySelector('.bike-time');
var elCarTime = document.querySelector('.car-time');
var elPlaneTime = document.querySelector('.plane-time');

// Piyoda - 3.6 km/soat
// Velosiped - 20.1 km/soat
// Mashina - 70 km/soat
// Samolyot - 800 km/soat

var walkSpeed = 3.60;
var bikeSpeed = 20.10;
var carSpeed = 70.00;
var planeSpeed = 800.00;

elDistanceForm.addEventListener('submit', function (evt){
  evt.preventDefault();
  
  var distance = parseFloat(elDistanceInput.value.trim(), 10);
  
  var walkTime = distance / walkSpeed;
  walkHour = parseInt(walkTime, 10);
  walkMinute = Math.round((parseFloat(walkTime.toFixed(2), 10) - walkHour) * 60);
  var bikeTime = distance / bikeSpeed;
  bikeHour = parseInt(bikeTime, 10);
  bikeMinute = Math.round((parseFloat(bikeTime.toFixed(2), 10) - bikeHour) * 60);
  var carTime = distance / carSpeed;
  carHour = parseInt(carTime, 10);
  carMinute = Math.round((parseFloat(carTime.toFixed(2), 10) - carHour) * 60);
  var planeTime = distance / planeSpeed;
  planeHour = parseInt(planeTime, 10);
  planeMinute = Math.round((parseFloat(planeTime.toFixed(2), 10) - planeHour) * 60);
  
  elWalkTime.textContent = `${walkHour} soat, ${walkMinute} min`;
  elBikeTime.textContent = `${bikeHour} soat, ${bikeMinute} min`;
  elCarTime.textContent = `${carHour} soat, ${carMinute} min`;
  elPlaneTime.textContent = `${planeHour} soat, ${planeMinute} min`;
});


// Exercise 2

var elTempForm = document.querySelector('.temp-form');
var elCelcyInput = elTempForm.querySelector('.celcy-input');
var elFarengeyInput = elTempForm.querySelector('.farengey-input');
var elResult = document.querySelector('.reslut');

elTempForm.addEventListener('submit', function (evt){
  evt.preventDefault();
  
  var celcy = parseFloat(elCelcyInput.value.trim(), 10);
  celcy = parseFloat(celcy.toFixed(1), 10);
  var farengey = parseFloat((celcy * 9 / 5) + 32, 10);
  farengey = parseFloat(farengey.toFixed(1), 10);
  
  elFarengeyInput.value = `${farengey}`;
});


// Exercise 3

var elMathForm = document.querySelector('.math-form');
var elValueInput = elMathForm.querySelector('.value-input');

elMathForm.addEventListener('submit', function (evt){
  evt.preventDefault();
  
  var number = parseFloat(elValueInput.value.trim(), 10);
  
  
  if (number%3 === 0 && number%5 === 0){
    elResult.classList.remove('d-none');
    elResult.textContent = `FizzBuzz`;
  } 
  else if (number%5 === 0){
    elResult.classList.remove('d-none');
    elResult.textContent = `Fizz`;
  }
  else if (number%3 === 0){
    elResult.classList.remove('d-none');
    elResult.textContent = `Buzz`;
  }
  else {
    elResult.classList.remove('d-none');
    elResult.textContent = `${number}`;
  };
  
  
});