function dwarfRollCall(dwarves) {
  var newStr = "";
  dwarves.forEach(function(name, i) {
  	newStr += (i+1 + ". " + name + " ");
  });
  return newStr;
}


function summonCaptainPlanet(array) {
	return array.map(function(elements) {
		return elements.toUpperCase() + "!";
	});
}

function longPlaneteerCalls(words) {
	for(var i = 0; i < words.length; i++){ 
	if(words[i].length > 4) 
	return true;
	}
	return false;
}

function findTheCheese(foods) {
	var cheese = ["camembert", "cheddar", "gouda"];
	for(var i = 0; i < foods.length; i++) {
	var cheeseI = cheese.indexOf(foods[i]);
	if(cheeseI !== -1) {
	return foods[i];}
	}
	return "no cheese!";
}
