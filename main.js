//Create a reference for canvas 
canvas = document.getElementById("myCanvas")
ctx = canvas.getcontext("2d")
//Give specific height and width to the car image
greencar_width =75
greencar_height = 100

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x =5
greencar_y=225
function add() {
	background_imgTag = new Image()
	background_imgTag.onload=uploadgreencar
	background_imgTag.src = background_image
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawimage(background_imgTag,0,0,canvas.width,canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawimage(greencar_imgTag,0,0,greencar_width,greencar_height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		cc
		
		
}

function up()
{if(keyPressed == '38')
{
	up();
	console.log("up");
}
}

function down()
{
	if(keyPressed == '40')
		{
			down();
			console.log("down");
		}//Define function to move the car downward
}

function left()
{
	if(keyPressed == '37')
		{
			left();
			console.log("left");
		}

}

function right()
{
	if(keyPressed == '39')
		{
			right();
			console.log("right");
		}//Define function to move the car right side
}
