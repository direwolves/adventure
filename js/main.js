// alert('Working test');

$(document).ready(function(){


var removeClutter = function(){
	var removeChoices = document.getElementsByClassName('img-container')[0];
	removeChoices.style.display = 'none';
	var resultOne = document.getElementById('main-text');
	resultOne.style.display = 'none';
}

var classOne = document.getElementById('img-choice-1');
	classOne.addEventListener('click', function(){
	handleSelection(1);
});

var classTwo = document.getElementById('img-choice-2');
	classTwo.addEventListener('click', function(){
	handleSelection(2);
	});

var classThree = document.getElementById('img-choice-3');
	classThree.addEventListener('click', function(){
	handleSelection(3);
	});

var classFour = document.getElementById('img-choice-4');
	classFour.addEventListener('click', function(){
	handleSelection(4);
	});

	handleSelection = function(optionChosen){
		if (optionChosen === 1){
			removeClutter();
			var showResultOne = document.getElementById('result-one');
			showResultOne.style.display = 'block';

		} else if(optionChosen === 2){
			removeClutter();
			var showResultTwo = document.getElementById('result-two');
			showResultTwo.style.display = 'block';

		} else if(optionChosen === 3){
			removeClutter();
			var showResultThree = document.getElementById('result-three');
			showResultThree.style.display = "block";

		} else if(optionChosen === 4){
			removeClutter();
			var showResultFour = document.getElementById('result-four');
			showResultFour.style.display = 'block';

		};

	};

}); // closes doc.ready