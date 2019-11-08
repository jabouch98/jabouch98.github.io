//script to calculate the subtotal

//var subtot = 0;

function calcSub(){
	var unpopped = document.getElementById("unpopped").value;
	var caramel = document.getElementById("caramel").value;
	var carNut = document.getElementById("carNut").value;
	var toffey = document.getElementById("toffey").value;
	var total = 0;

	total = total + (unpopped * 3.00) + (caramel * 3.50) + (carNut * 4.50) + (toffey * 5.00);
	var rounded = total.toFixed(2);
	document.getElementById("output").innerHTML = rounded;
	//subtot = rounded;

}

function calcGrand(){
	
	var total = parseFloat(document.getElementById("output").innerHTML);
	var grand = (total * .07);
	var newGrand = grand + total;
	var grandTotal = newGrand.toFixed(2); 

	document.getElementById("grand").innerHTML = grandTotal;

}

function confirmation(){
	var grandTotal = parseFloat(document.getElementById("grand").innerHTML);
	
	if(!document.getElementById("check").checked){
		if(confirm("There is a 2.50 surcharge, do you wish to continue?")){	
			var creditTotal = grandTotal + 2.50;
			var finalTotal = creditTotal.toFixed(2);
			document.getElementById("grand").innerHTML = finalTotal;
		}else{

		}	
	}else{

	}

	
}