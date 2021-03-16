/**
 * JS - Responsive Countdown with Animation GIF + Sound Effects
 * @author Carlos Pinho
 * 
 */
/*Creating a boolean variable to ensure countdown() 
  function won't be called again with another click
  at the button-image*/

  var firstClick = false;

function countdown(){

  /*Using Conditional scope if() to filter variable
    firstClick's value and allow the function to be 
    called only once*/
    if(firstClick == false){

    	/*Setting a var timer1 with a setInterval 
    	  Synchronization Method to call start()
    	  function repeatedly with a fix interval
    	  (in milliseconds)*/
    var timer1 = setInterval (function(){start()}, 1000);

    	//Setting a var Counter to use at the Countdown Logic

    var counter = 10;

    	/*Setting start() function to receive the Countdown Logic
    	  while being executed in loop by setInterval Method 
    	*/
    function start(){
    	beepSound();
    	/*Replacing HTML paragraph tag display content for the counter 
    	  through .innerHTML Method
    	*/
    	document.getElementById("countdown").innerHTML = counter;
    	if(counter==0){
    		/*Setting clearInterval method to interrupt setInterval 
    		  execution once the counter reaches ZERO
    	   */
    	  	clearInterval(timer1);
    	  	//Playing explosion audio
    	  	blowingSound();
    	  	//Changing button image to explosion gif once the countdown finishes
    	  	document.getElementById("beam").src = "Media/explosion.gif";
    	  	//Changing HTML's head paragraph for KA-BUM message after the explosion 
    	  	document.getElementById("countdown").innerHTML = "KA-BUM!!!";
    	  
    	   }

    	//Reducing 1 unit from var counter to support the Countdown Logic
    	counter--;

    }


    	/*changing firstClick value to close the if()
    	inside logic for any other possible new click
    	*/
    	firstClick = true;
    }
}

/*
 Using HTML Interface AudioElement in a variable with an Audio()
 Object in order play Audio Archives through HTML's Audio Element
 */

 function blowingSound(){

 	/*Creating var aux to receive Audio() Object to work with 
 	HTML's Audio Element inside JavaScrip Document*/
 	var aux = new Audio();
 	/*
 	   "Catching" the audio archive through its path using src 
 	   attribution in the Audio() Object aux
 	*/
 	aux.src= "Media/Thunder_Crack.mp3";
 	//Calling command .play() to play the aux file
 	aux.play();

 }

 function beepSound(){

 	/*Creating var aux to receive Audio() Object to work with 
 	HTML's Audio Element inside JavaScrip Document*/
 	var aux = new Audio();
 	/*
 	   "Catching" the audio archive through its path using src 
 	   attribution in the Audio() Object aux
 	*/
 	aux.src= "Media/Beep_Short.mp3";
 	//Calling command .play() to play the aux file
 	aux.play();
 	
 }