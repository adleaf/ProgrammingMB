var current = "X";

function has(id, check) {
	if (document.getElementById(id).innerHTML == check) {
		return true;
	}else{
		return false;
	}
}

function checkWin(cur) {
	
	var check = cur;
	
	var one = "r1c1";
	var two = "r1c2";
	var three = "r1c3";
	
	var four = "r2c1";
	var five = "r2c2";
	var six = "r2c3";
	
	var seven = "r3c1";
	var eight = "r3c2";
	var nine = "r3c3";
	
	var wins = false;
	
	if (has(one, check) && has(two, check) && has(three, check)) {
		wins = true;
	}
	
	if (has(four, check) && has(five, check) && has(six, check)) {
		wins = true;
	}
	
	if (has(seven, check) && has(eight, check) && has(nine, check)) {
		wins = true;
	}
	
	if (has(one, check) && has(four, check) && has(seven, check)) {
		wins = true;
	}
	
	if (has(two, check) && has(five, check) && has(eight, check)) {
		wins = true;
	}
	
	if (has(three, check) && has(six, check) && has(nine, check)) {
		wins = true;
	}
	
	if (has(one, check) && has(five, check) && has(nine, check)) {
		wins = true;
	}
	
	if (has(three, check) && has(five, check) && has(seven, check)) {
		wins = true;
	}
	
	return wins;
	
}

function updateHTML(id) {
	document.getElementById(id).innerHTML = current;
}

function buttonClicked(id) {
	updateHTML(id);
	document.getElementById(id).disabled = 'true';
	
	setTimeout(function() {
		var won = checkWin(current);
		if (won) {
			alert(current + " wins!");
		}
		if (current == "X") {
			current = "O";
		}else{
			current = "X";
		}
	}, 100);
}