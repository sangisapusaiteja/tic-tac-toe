// putting X or O accordingly
click = 1; 
function one() { 
	if (click == 1) { 
		document.getElementById("b1").value = "X"; 
		document.getElementById("b1").disabled = true;
		document.getElementById("b1").style.backgroundColor="rgb(187, 149, 222)" 
		click= 0; 
	} 
	else { 
		document.getElementById("b1").value = "O"; 
		document.getElementById("b1").disabled = true; 
		document.getElementById("b1").style.backgroundColor="rgb(187, 149, 222)"
		click = 1; 
	} 
} 
function two() { 
	if (click == 1) { 
		document.getElementById("b2").value = "X"; 
		document.getElementById("b2").disabled = true; 
		document.getElementById("b2").style.backgroundColor="rgb(187, 149, 222)"
		click = 0; 
	} 
	else { 
		document.getElementById("b2").value = "O"; 
		document.getElementById("b2").disabled = true; 
		document.getElementById("b2").style.backgroundColor="rgb(187, 149, 222)"
		click = 1; 
	} 
} 
function three() { 
	if (click == 1) { 
		document.getElementById("b3").value = "X"; 
		document.getElementById("b3").disabled = true; 
		document.getElementById("b3").style.backgroundColor="rgb(187, 149, 222)"
		click = 0; 
	} 
	else { 
		document.getElementById("b3").value = "O"; 
		document.getElementById("b3").disabled = true; 
		document.getElementById("b3").style.backgroundColor="rgb(187, 149, 222)"
		click = 1; 
	} 
} 
function four() { 
	if (click == 1) { 
		document.getElementById("b4").value = "X"; 
		document.getElementById("b4").disabled = true;
		document.getElementById("b4").style.backgroundColor="rgb(187, 149, 222)" 
		click = 0; 
	} 
	else { 
		document.getElementById("b4").value = "O"; 
		document.getElementById("b4").disabled = true; 
		document.getElementById("b4").style.backgroundColor="rgb(187, 149, 222)"
		click = 1; 
	} 
} 
function five() { 
	if (click == 1) { 
		document.getElementById("b5").value = "X"; 
		document.getElementById("b5").disabled = true; 
		document.getElementById("b5").style.backgroundColor="rgb(187, 149, 222)"
		click = 0; 
	} 
	else { 
		document.getElementById("b5").value = "O"; 
		document.getElementById("b5").disabled = true;
		document.getElementById("b5").style.backgroundColor="rgb(187, 149, 222)" 
		click = 1; 
	} 
} 
function six() { 
	if (click == 1) { 
		document.getElementById("b6").value = "X"; 
		document.getElementById("b6").disabled = true; 
		document.getElementById("b6").style.backgroundColor="rgb(187, 149, 222)"
		click = 0; 
	} 
	else { 
		document.getElementById("b6").value = "O"; 
		document.getElementById("b6").disabled = true;
		document.getElementById("b6").style.backgroundColor="rgb(187, 149, 222)" 
		click = 1; 
	} 
} 
function seven() { 
	if (click == 1) { 
		document.getElementById("b7").value = "X"; 
		document.getElementById("b7").disabled = true; 
		document.getElementById("b7").style.backgroundColor="rgb(187, 149, 222)"
		click = 0; 
	} 
	else { 
		document.getElementById("b7").value = "O"; 
		document.getElementById("b7").disabled = true; 
		document.getElementById("b7").style.backgroundColor="rgb(187, 149, 222)"
		click = 1; 
	} 
} 
function eight() { 
	if (click == 1) { 
		document.getElementById("b8").value = "X"; 
		document.getElementById("b8").disabled = true; 
		document.getElementById("b8").style.backgroundColor="rgb(187, 149, 222)"
		click = 0; 
	} 
	else { 
		document.getElementById("b8").value = "O"; 
		document.getElementById("b8").disabled = true; 
		document.getElementById("b8").style.backgroundColor="rgb(187, 149, 222)"
		click = 1; 
	} 
} 
function nine() { 
	if (click == 1) { 
		document.getElementById("b9").value = "X"; 
		document.getElementById("b9").disabled = true; 
		document.getElementById("b9").style.backgroundColor="rgb(187, 149, 222)"
		click = 0; 
	} 
	else { 
		document.getElementById("b9").value = "O"; 
		document.getElementById("b9").disabled = true; 
		document.getElementById("b9").style.backgroundColor="rgb(187, 149, 222)"
		click = 1; 
	} 
} 


// of working and checking conditon
function main() { 
	var b1, b2, b3, b4, b5, b6, b7, b8, b9; 
	b1 = document.getElementById("b1").value;	
	b2 = document.getElementById("b2").value; 	
	b3 = document.getElementById("b3").value; 	
	b4 = document.getElementById("b4").value; 
	b5 = document.getElementById("b5").value; 
	b6 = document.getElementById("b6").value; 
	b7 = document.getElementById("b7").value; 	
	b8 = document.getElementById("b8").value; 
	b9 = document.getElementById("b9").value; 
	var disable1,disable2, disable3,disable4,disable5,disable6,disable7,disable8,disable9;	
	disable1 = document.getElementById("b1"); 
	disable2 = document.getElementById("b2"); 
	disable3 = document.getElementById("b3"); 
	disable4 = document.getElementById("b4"); 
	disable5 = document.getElementById("b5"); 
	disable6 = document.getElementById("b6"); 
	disable7 = document.getElementById("b7"); 
	disable8 = document.getElementById("b8"); 
	disable9 = document.getElementById("b9"); 
	// Checking if Player X won 
	if ((b1 == 'X' ) && (b2 == 'X' ) && (b3 == 'X' )) { 
		document.getElementById('print').innerHTML = "Player X won"; 
		disable1.style.color = "blueviolet"; 
		disable2.style.color = "blueviolet"; 
		disable3.style.color = "blueviolet"; 
		disable4.disabled = true; 
		disable5.disabled = true; 
		disable6.disabled = true; 
		disable7.disabled = true; 
		disable8.disabled = true; 
		disable9.disabled = true; 	
	} 
	else if ((b4 == 'X') && ( b5 == 'X') && (b6 == 'X')) { 
	document.getElementById('print').innerHTML = "Player X won"; 
	disable4.style.color = "blueviolet"; 
	disable5.style.color = "blueviolet"; 
	disable6.style.color = "blueviolet"; 
	disable1.disabled = true; 
	disable2.disabled = true; 
	disable3.disabled = true; 
	disable7.disabled = true; 
	disable8.disabled = true; 
	disable9.disabled = true; 	
   } 
   else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) { 
   document.getElementById('print').innerHTML = "Player X won"; 
   disable7.style.color = "blueviolet"; 
   disable8.style.color = "blueviolet"; 
   disable9.style.color = "blueviolet"; 
   disable1.disabled = true; 
   disable2.disabled = true; 
   disable3.disabled = true; 
   disable4.disabled = true; 
   disable5.disabled = true; 
   disable6.disabled = true; 	
} 
	else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) { 
		document.getElementById('print').innerHTML = "Player X won";
		disable1.style.color = "blueviolet"; 
		disable4.style.color = "blueviolet"; 
		disable7.style.color = "blueviolet";  
		disable2.disabled = true; 
		disable3.disabled = true; 
		disable5.disabled = true; 
		disable6.disabled = true; 
		disable9.disabled = true; 
		disable8.disabled = true; 
	} 
	else if ((b2 == 'X') && ( b5 == 'X') && (b8 == 'X')) { 
	document.getElementById('print').innerHTML = "Player X won"; 
	disable2.style.color = "blueviolet"; 
	disable5.style.color = "blueviolet"; 
	disable8.style.color = "blueviolet"; 
	disable1.disabled = true; 
	disable3.disabled = true; 
	disable4.disabled = true; 
	disable6.disabled = true; 
	disable7.disabled = true; 
	disable9.disabled = true; 	
} 

	else if ((b3 == 'X') && ( b6 == 'X') && (b9 == 'X')) { 
		document.getElementById('print').innerHTML = "Player X won"; 
		disable3.style.color = "blueviolet"; 
		disable6.style.color = "blueviolet"; 
		disable9.style.color = "blueviolet"; 
		disable1.disabled = true; 
		disable2.disabled = true; 
		disable4.disabled = true; 
		disable5.disabled = true; 
		disable7.disabled = true; 
		disable8.disabled = true; 	
	} 
	else if ((b1 == 'X') && ( b5 == 'X') && (b9 == 'X')) { 
		document.getElementById('print').innerHTML = "Player X won"; 
		disable1.style.color = "blueviolet"; 
		disable5.style.color = "blueviolet"; 
		disable9.style.color = "blueviolet"; 
		disable2.disabled = true; 
		disable3.disabled = true; 
		disable4.disabled = true; 
		disable6.disabled = true; 
		disable7.disabled = true; 
		disable8.disabled = true; 
	} 
	else if ((b3 == 'X') && ( b5 == 'X') && (b7 == 'X')) { 
		document.getElementById('print').innerHTML = "Player X won"; 
		disable3.style.color = "blueviolet"; 
		disable5.style.color = "blueviolet"; 
		disable7.style.color = "blueviolet";
		disable1.disabled = true; 
		disable2.disabled = true; 
		disable4.disabled = true; 
		disable6.disabled = true; 
		disable8.disabled = true; 
		disable9.disabled = true; 	 
	} 



	// Checking for Player O  
	else if ((b1 == 'O' ) && (b2 == 'O') && (b3 == 'O' )) { 
		document.getElementById('print').innerHTML = "Player 0 won"; 
		disable1.style.color = "blueviolet"; 
		disable2.style.color = "blueviolet"; 
		disable3.style.color = "blueviolet"; 
		disable4.disabled = true; 
		disable5.disabled = true; 
		disable6.disabled = true; 
		disable7.disabled = true; 
		disable8.disabled = true; 
		disable9.disabled = true; 	
	} 
	else if ((b4 == 'O') && (b5 == 'O') && (b6 == 'O')) { 
	document.getElementById('print').innerHTML = "Player 0 won"; 
	disable4.style.color = "blueviolet"; 
	disable5.style.color = "blueviolet"; 
	disable6.style.color = "blueviolet";
	disable1.disabled = true; 
	disable2.disabled = true; 
	disable3.disabled = true; 
	disable7.disabled = true; 
	disable8.disabled = true; 
	disable9.disabled = true; 	 
}  
else if ((b7 == 'O') && (b8 == 'O') && (b9 == 'O')) { 
		document.getElementById('print').innerHTML = "Player 0 won"; 
		disable7.style.color = "blueviolet"; 
		disable8.style.color = "blueviolet"; 
		disable9.style.color = "blueviolet";
		disable1.disabled = true; 
		disable2.disabled = true; 
		disable3.disabled = true; 
		disable4.disabled = true; 
		disable5.disabled = true; 
		disable6.disabled = true; 	 
	} 

	else if ((b1 == 'O' ) && (b4 == 'O') && (b7 == 'O' )) { 
		document.getElementById('print').innerHTML = "Player 0 won"; 
		disable1.style.color = "blueviolet"; 
		disable4.style.color = "blueviolet"; 
		disable7.style.color = "blueviolet";
		disable2.disabled = true; 
		disable3.disabled = true; 
		disable5.disabled = true; 
		disable6.disabled = true; 
		disable8.disabled = true; 
		disable9.disabled = true; 	 
	} 
	else if ((b2 == 'O' ) && (b5 == 'O') && (b8 == 'O')) { 
		document.getElementById('print').innerHTML = "Player 0 won"; 
		disable2.style.color = "blueviolet"; 
		disable5.style.color = "blueviolet"; 
		disable8.style.color = "blueviolet";
		disable1.disabled = true; 
		disable3.disabled = true; 
		disable4.disabled = true; 
		disable6.disabled = true; 
		disable7.disabled = true; 
		disable9.disabled = true; 	 
	} 
	else if ((b3 == 'O' ) && (b6 == 'O' ) && (b9 == 'O')) { 
		document.getElementById('print').innerHTML = "Player 0 won"; 
		disable3.style.color = "blueviolet"; 
		disable6.style.color = "blueviolet"; 
		disable9.style.color = "blueviolet"; 
		disable1.disabled = true; 
		disable2.disabled = true; 
		disable4.disabled = true; 
		disable5.disabled = true; 
		disable7.disabled = true; 
		disable8.disabled = true; 	
	} 
	else if ((b1 == 'O' ) && (b5 == 'O' ) && (b9 == 'O' )) { 
		document.getElementById('print').innerHTML = "Player 0 won"; 
		disable1.style.color = "blueviolet"; 
		disable5.style.color = "blueviolet"; 
		disable9.style.color = "blueviolet"; 
		disable2.disabled = true; 
		disable3.disabled = true; 
		disable4.disabled = true; 
		disable6.disabled = true; 
		disable7.disabled = true; 
		disable8.disabled = true; 	
	} 
	else if ((b3 == 'O' ) && (b5 == 'O') && (b7 == 'O')) { 
		document.getElementById('print').innerHTML = "Player 0 won"; 
		disable3.style.color = "blueviolet"; 
		disable5.style.color = "blueviolet"; 
		disable7.style.color = "blueviolet"; 
		disable1.disabled = true; 
		disable2.disabled = true; 
		disable4.disabled = true; 
		disable6.disabled = true; 
		disable8.disabled = true; 
		disable9.disabled = true; 	
	} 
	

	// Checking about Tie 
	else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'|| b2 == 'O') 
	      && (b3 == 'X' || b3 == 'O') && (b4 == 'X' || b4 == 'O') 
		  && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') 
		  && (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') 
		  && (b9 == 'X' || b9 == 'O')) { 
		document.getElementById('print').innerHTML = "Match Tie"; 
	} 
	
	// setting instructions 
	else { 
		if (click == 1) { 
			document.getElementById('print').innerHTML = "Player X Turn"; 
		} 
		else { 
			document.getElementById('print').innerHTML = "Player O Turn"; 
		} 
	} 
} 

