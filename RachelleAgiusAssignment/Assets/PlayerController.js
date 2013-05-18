#pragma strict
var laser:Rigidbody;
var health:int=100;

static var score:int=0;
var laserSound:AudioClip;
var alienExplosion:AudioClip;

static var hit:int;
static var fired:int;
static var playerName:String = "";


function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "alienlaser")
	{
		health -= 5;
		
		if (health == 0)
			Application.LoadLevel(5);
	}
	
	if(other.gameObject.tag == "playerlaser")
	{
		fired++;
	}


}

function PlayAlienExplosion()
{
	this.GetComponent(AudioSource).clip = alienExplosion;		
	this.GetComponent(AudioSource).Play();
}



function OnGUI()
{
	var missed = fired - hit;

	GUI.color = Color.white;
	GUI.Label(Rect(0,0,100,50),"Health: "+health);
	
	GUI.Label(Rect(110,0,100,50),"Score: "+score);
	GUI.Label(Rect(330,0,100,50),"Shots Fired: "+fired);
	GUI.Label(Rect(440,0,100,50),"Shots Hit: "+hit);
	GUI.Label(Rect(550,0,100,50), "Shots Missed: "+missed);
	GUI.Label(Rect(660,0,100,50), "Player: "+playerName);
	
}



function Start () {
	
}

function Update () {
	
	if (Input.GetKeyDown(KeyCode.Space))
	{
		
		this.GetComponent(AudioSource).clip = laserSound;
		
		this.GetComponent(AudioSource).Play();
		
		Instantiate(laser,transform.position,transform.rotation);
	}
	
	
	var border:float=1.0;
	
	if (transform.position.x < BordersCalculator.leftmost + border)
	{
		transform.position.x = BordersCalculator.leftmost + border;
	}
	
	if (transform.position.x > BordersCalculator.rightmost - border)
	{
		transform.position.x = BordersCalculator.rightmost - border;
	}
	
	
	transform.Translate(Vector3.right * 10 * Time.deltaTime * Input.GetAxis("Horizontal"));
	
}