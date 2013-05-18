#pragma strict
var xLength = Screen.width/2;
var yLength = Screen.height/2;
function Start () {

}

function Update () {

}

function OnGUI(){
	if(GUI.Button(Rect(xLength-50,yLength-40,100,30),"Main Menu"))
	{
		Application.LoadLevel(0);
	}
}