#pragma strict

var leftborder:float=-12.0;

var rightborder:float=6;

var touchedrightwall:boolean=false;
var touchedleftwall:boolean=false;

var alien:Rigidbody;

function createAliens(rows:int,cols:int)
{
	
	for(var row=0;row<rows;row++)
	{
		
		for(var counter=0;counter<cols;counter++)
		{
			var tempAlien:Rigidbody;
			
			tempAlien = Instantiate(alien,Vector3(counter*2,transform.position.y-row,1),Quaternion.identity);
			
			tempAlien.transform.parent = this.transform;
		}
	}
	
}



function Start () {
	//this loop will run 5 times
	//create one row with five aliens
	createAliens(GameController.rows,GameController.cols);
	
	for(var counter=0;counter<5;counter++)
	{
		
		yield WaitForSeconds(5);
		
	
	}
}

function Update () {
	
	if (transform.position.x > rightborder)
	{
		touchedrightwall=true;
	}
	
	if (transform.position.x < leftborder)
	{
		touchedleftwall = true;
	}
	
	if (touchedrightwall == false)
	{
		
		touchedleftwall = false;
		transform.Translate(Vector3.right * 10 * Time.deltaTime);
	}
	
	if (touchedrightwall == true)
	{
		transform.Translate(Vector3.left * 10 * Time.deltaTime);
	}
	
	if (touchedleftwall == true)
	{
		touchedrightwall = false;
		transform.Translate(Vector3.right * 10 * Time.deltaTime);
	}
		

	
	
}