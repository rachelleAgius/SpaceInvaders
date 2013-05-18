#pragma strict

var gameOver:boolean=false;

static var rows:int=3;
static var cols:int=5;

var levelsPlayed:int=0;

function Awake()
{
	if(GameObject.FindGameObjectsWithTag("gamecontroller").Length > 1)
	{
		Destroy(this);
	}
}

function Start () {	
	DontDestroyOnLoad(this);
}

function Update () {
	var numberOfAliens:int;
	
	numberOfAliens = GameObject.FindGameObjectsWithTag("enemy").Length;
	
	//check if it is menu scene
	if(Application.loadedLevel > 0)
	{
		if (numberOfAliens == 0)
		{
			if (Application.loadedLevel < 4)
				Application.LoadLevel(Application.loadedLevel + 1);
		}
	}
}



function OnGUI()
{
	GUI.Label(Rect(0,220,100,50),"Level: "+Application.loadedLevel);

}