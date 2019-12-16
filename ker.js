function cg(){
	var x = prompt("Pick any year");
	var y =(x/100)
	var z =(Math.floor(y + 1))
	if (z == 12){
		alert("This year is in the" + " " + Math.floor(z) + "th Century")
	} else if (z == 13){
		alert("This year is in the" + " " + Math.floor(z) + "th Century")
	} else if (z == 11){
		alert("This year is in the" + " " + Math.floor(z) + "th Century")
	} else if (z % 10 == 1){
		alert("This year is in the" + " " + Math.floor(z) + "st Century")
	} else if (z % 10 == 2){
		alert("This year is in the" + " " + Math.floor(z) + "nd Century")
	} else if (z % 10 == 3){
		alert("This year is in the" + " " + Math.floor(z) + "rd Century")
	} else {
		alert("This year is in the" + " " + Math.floor(z) + "th Century")
	}
}


function angle(){
var x = prompt("Enter an angle belonging to a triangle (Just the Number)");
var y = prompt("Enter the other angle of that same triangle (Just the Number)");

alert(180 - x - y + " " + "degrees is the 3rd angle of your triangle");
	}



function o(){
	var x = 0;
	while (x <= 99){
		x = x + 1;
		if(x % 4 == 0 && x % 10 == 0){
			console.log("fourten");
		}else if(x % 10 == 0){
			console.log("ten");
		}else if(x % 4 == 0){
			console.log("four");
		}else{
			console.log(x);
		}
	}
}



function length(){
	var y = prompt("Type anything and I will tell you the length");
	alert(y.length);
}


function Login(){
  var user = prompt("Type the username");
  var loweruser = user.toLowerCase();
  var password = prompt("Now type the password");
  if(loweruser == "pais" && password == "iscool"){
    alert("True");
  }
  else{
    alert("False");
  }
}
		

var str = 'hello im kerimi';

function toUpperCase(str) {
  return str.split('').map((v, i) => i % 2 == 0 ? v.toLowerCase() : v.toUpperCase()).join('');
}

console.log(toUpperCase(str));


function guess_number(){
		var secret = 5 ;
		var guess;
		while(guess != secret){
			guess = prompt("How old is my cat?");

		if(guess == secret){
				alert("Damn it, you got it!");
	    }
		else if(guess < secret){
					alert("Guess Higher");
   		 }
		else if(guess > secret){
					alert("Guess Lower");
	 	}
		else{
			alert("Type in a number");
		}
	}
}



function encrypt(){
	var rawtext = document.getElementById("myinput").value;
	var temptext = "";
	for(i = 0; i < rawtext.length; i++){
		temptext += enc(rawtext[i]);
	}
	document.getElementById("result").innerHTML = temptext;
}

function decrypt(){
	var rawtext = document.getElementById("myinput").value;
	var temptext = "";
	for(i = 0; i < rawtext.length; i++){
		temptext += dec(rawtext[i]);
	}
	document.getElementById("result").innerHTML = temptext;
}


function enc(x){
	switch(x){
		case "a" :
			return "z";
			break;
		case "b" :
			return "y";
			break;
		case "c" :
			return "x";
			break;
		case "d" :
			return "w";
			break;
		case "e" :
			return "v";
			break;
		case "f" :
			return "u";
			break;
		case "g" :
			return "t";
			break;
		case "h" :
			return "s";
			break;
		case "i" :
			return "r";
			break;
		case "j" :
			return "q";
			break;
		case "k" :
			return "p";
			break;
		case "l" :
			return "o";
			break;
		case "m" :
			return "n";
			break;
		case "n" :
			return "m";
			break;
		case "o" :
			return "l";
			break;
		case "p" :
			return "k";
			break;
		case "q" :
			return "j";
			break;
		case "r" :
			return "i";
			break;
		case "s" :
			return "h";
			break;
		case "t" :
			return "g";
			break;
		case "u" :
			return "f";
			break;
		case "v" :
			return "e";
			break;
		case "w" :
			return "d";
			break;
		case "x" :
			return "c";
			break;
		case "y" :
			return "b";
			break;
		case "z" :
			return "a";
			break;
		

		case "A" :
			return "Z";
			break;
		case "B" :
			return "Y";
			break;
		case "C" :
			return "X";
			break;
		case "D" :
			return "W";
			break;
		case "E" :
			return "V";
			break;
		case "F" :
			return "U";
			break;
		case "G" :
			return "T";
			break;
		case "H" :
			return "S";
			break;
		case "I" :
			return "R";
			break;
		case "J" :
			return "Q";
			break;
		case "K" :
			return "P";
			break;
		case "l" :
			return "O";
			break;
		case "M" :
			return "N";
			break;
		case "N" :
			return "M";
			break;
		case "O" :
			return "L";
			break;
		case "P" :
			return "K";
			break;
		case "Q" :
			return "J";
			break;
		case "R" :
			return "I";
			break;
		case "S" :
			return "H";
			break;
		case "T" :
			return "G";
			break;
		case "U" :
			return "F";
			break;
		case "V" :
			return "E";
			break;
		case "W" :
			return "D";
			break;
		case "X" :
			return "X";
			break;
		case "Y" :
			return "B";
			break;
		case "Z" :
			return "A";
			break;
		
		


	}
}



function dec(x){
	switch(x){
		case "z" :
			return "a";
			break;
		case "y" :
			return "b";
			break;
		case "x" :
			return "c";
			break;
		case "w" :
			return "d";
			break;
		case "v" :
			return "e";
			break;
		case "u" :
			return "f";
			break;
		case "t" :
			return "g";
			break;
		case "s" :
			return "h";
			break;
		case "r" :
			return "i";
			break;
		case "q" :
			return "j";
			break;
		case "p" :
			return "k";
			break;
		case "o" :
			return "l";
			break;
		case "n" :
			return "m";
			break;
		case "m" :
			return "n";
			break;
		case "l" :
			return "o";
			break;
		case "k" :
			return "p";
			break;
		case "j" :
			return "q";
			break;
		case "i" :
			return "r";
			break;
		case "h" :
			return "s";
			break;
		case "g" :
			return "t";
			break;
		case "f" :
			return "u";
			break;
		case "e" :
			return "v";
			break;
		case "d" :
			return "w";
			break;
		case "c" :
			return "x";
			break;
		case "b" :
			return "y";
			break;
		case "a" :
			return "z";
			break;


		case "Z" :
			return "A";
			break;
		case "Y" :
			return "B";
			break;
		case "X" :
			return "C";
			break;
		case "W" :
			return "D";
			break;
		case "V" :
			return "E";
			break;
		case "U" :
			return "F";
			break;
		case "T" :
			return "G";
			break;
		case "S" :
			return "H";
			break;
		case "R" :
			return "I";
			break;
		case "Q" :
			return "J";
			break;
		case "P" :
			return "K";
			break;
		case "O" :
			return "L";
			break;
		case "N" :
			return "M";
			break;
		case "M" :
			return "N";
			break;
		case "L" :
			return "O";
			break;
		case "K" :
			return "P";
			break;
		case "J" :
			return "Q";
			break;
		case "I" :
			return "R";
			break;
		case "H" :
			return "S";
			break;
		case "G" :
			return "T";
			break;
		case "F" :
			return "U";
			break;
		case "E" :
			return "V";
			break;
		case "D" :
			return "W";
			break;
		case "C" :
			return "X";
			break;
		case "B" :
			return "Y";
			break;
		case "A" :
			return "Z";
			break;



	}
}