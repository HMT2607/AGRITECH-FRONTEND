function forcast(){
  loadJSON("http://dataservice.accuweather.com/locations/v1/cities/mu/search?apikey=IgaaSTBKxllVLXKKJafcGrYXkdSiWUZR&q=Phoenix&details=true", getData, 'jsonp');
}

function getData(data){
  alert(data);
  console.log(data);
}
forcast();
