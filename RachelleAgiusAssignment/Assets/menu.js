#pragma strict

var x:int;
var y:int;

var nameInput:boolean;

var theme:GUISkin;

function Start () {
	nameInput=false;
}

function Update () {

}

function OnGUI(){
	//apply theme
	GUI.skin = theme;
	
	var xLength = Screen.width/2;
	var yLength = Screen.height/2;	
	
	if(!nameInput){
		if(GUI.Button(Rect(xLength-50,yLength-40,100,30),"New Game"))
		{
			nameInput=true;
		}
		
		if(GUI.Button(Rect(xLength-50,yLength,100,30),"Exit"))
		{
			//new game was clicked
			Application.Quit();
		}
	}
	else
	{
		PlayerController.playerName = GUI.TextField(Rect(x+120, y+180, 120, 25), PlayerController.playerName);
		
		if(GUI.Button(Rect(xLength-50,yLength-40,100,30), "Back"))
		{
			nameInput=false;
		}
		if(GUI.Button(Rect(xLength-50,yLength,100,30), "Ok"))
		{
			Application.LoadLevel(1);
		}
	}
}