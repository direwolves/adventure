// alert('Working test');

$(document).ready(function(){


var removeClutter = function(){
	var removeChoices = document.getElementsByClassName('img-container')[0];
	removeChoices.style.display = 'none';
	var resultOne = document.getElementById('main-text');
	resultOne.style.display = 'none';
}

var classOne = document.getElementById('test-1');
	classOne.addEventListener('click', function(){
	handleSelection(1);
});

var classTwo = document.getElementById('test-2');
	classTwo.addEventListener('click', function(){
	handleSelection(2);
	});

// var classTwo = document.getElementById('test-2');
// 	classTwo.addEventListener('click', function(){
// 	var resultTwo = document.getElementById('main-text');
// 	resultTwo.innerHTML = 'This is the second story result!';
// 	optionChosen = 2;
// 	});

// var classThree = document.getElementById('test-3')
// 	classThree.addEventListener('click', function(){
// 	var resultThree = document.getElementById('main-text');
// 	resultThree.innerHTML = 'This is the third story result!';
// 	optionChosen = 3;
// 	});

// var classFour = document.getElementById('test-4')
// 	classFour.addEventListener('click', function(){
// 	var resultFour = document.getElementById('main-text');
// 	resultFour.innerHTML = 'This is the fourth story result!';
// 	optionChosen = 4;
// 	});

	handleSelection = function(optionChosen){
		if (optionChosen === 1){
			removeClutter();
			var showResultOne = document.getElementById('text-test-1');
			showResultOne.style.display = 'block';
		} else if(optionChosen === 2){
			removeClutter();
			var showResultTwo = document.getElementById('text-test-2');
			showResultTwo.style.display = 'block';
		};

	};


	

	// } else if(){

	// }else if(){

	// } else {

	// };

}); // closes doc.ready