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
	var str = ("Type")

}