	var vd = document.getElementsByTagName("video")[0];
	vd.playbackRate = 1.6;
	function keyDown(){
	switch(event.keyCode){
		case 37: vd.currentTime-=5;
		break;
		case 39: vd.currentTime+=5;
		break; 
		case 83: 
		var num=Number(prompt("What speed do you want? my dear guy"));
		vd.playbackRate = (num == 0 ? 1.6 : num);
		break;
		default: 
		break;
	}
}
	document.onkeydown = keyDown; 
