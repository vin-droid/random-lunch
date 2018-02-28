var levels = {
	"level0": [1],
	"level1": [5,6,7,8],
	"level2": [2,3,9,10,11],
	"level3": [4,12,18,19,13],
	"level4": [14,16,15,17,20]
}
var noFood = [7,1] 
var levelWeight = { '0': 50,"1":20,"2":20,"3":10,"4":10}
wieghtedLevels = [];
for(i=0; i < Object.keys(levelWeight).length; i++){
	var currentLevel = levels["level"+i] 
	var perWeight = levelWeight[i] / currentLevel.length
	for(j=0;j< perWeight;j++){
		for(k=0; k< currentLevel.length;k++){
			wieghtedLevels.push(currentLevel[k])
		}
	}
}
img = document.querySelector('img');
msg = document.querySelector('h4');
time_id = '';
var imageClickHandler = function(){
	msg.innerHTML = '';
	var round = randNum() * randNum() + 1;
	for(i = 0; i <= round; i++ ){
		var ele = this;
		this.onclick = null;
		 (function(index) {
        time_id = setTimeout(function() { 
        	setRandomImage(ele, index, round) }, index * 100);
    })(i);
	}
}
img.onclick = imageClickHandler
function randNum(){
	return (Math.floor(Math.random() * 10));
}
function setRandomImage(element, currentIndex, lastIndex){
	randomPointer = wieghtedLevels[Math.floor(Math.random() * 100)]
	element.setAttribute('src', "image"+ randomPointer +".jpg");
	if (currentIndex == lastIndex){
		element.onclick = imageClickHandler
		if (noFood.indexOf(randomPointer) != -1){
			msg.innerHTML = "There is no food for you."
		}else{
			msg.innerHTML = 'Congrats...Enjoy your food.'
			
		}
	}
}