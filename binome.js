function binominator(n) {
  var binome = [[1], [1, 1]];
  var str = [ ];
  for (let i = 1; i <= n-1; i++) {
    binome.push([]);
    binome[i+1].push(1);
    for (j = 2; j < i+2; j ++){
      binome[i+1].push(binome[i][j-2] + binome[i][j-1]);
    }
    binome[i+1].push(1);
    
    
  }
  return binome;
}

function add_spaces(n){
  var all_values = "" ;
  go = binominator(n);
  for (let i = 0; i <= go.length - 1; i++) { 
    all_values += go[i].toString() + "<br>";
    }
  return all_values;
}


function returnText(){
    let input = document.getElementById("userInput")
    .value
    var x = document.getElementById("output");
    x.innerHTML = add_spaces(input);
}
