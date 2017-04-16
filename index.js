function dwarfRollCall(dwarves) {
  var numDwarves = [];
  for(var i = 0; i < dwarves.length; i++) {
  numDwarves.push(`${i + 1}. ${dwarves[i]}`)
  }
    return `${numDwarves.join(' ') + ` `}`;
  }

function summonCaptainPlanet(planeteerCalls){
  for(var i = 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + '!';
  }
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++) {
    if(words.length >= 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese(foods) {
  var myCheese = ["cheddar","gouda","camembert"];
  for(var i = 0; i < foods.length; i++) {
      for(var j = 0; j < myCheese.length; j++) {
        if(foods[i] === myCheese[j]){
          return foods[i];
        }
    }
  }
  return "no cheese!"
}
