#pragma strict
var alienlaser:Rigidbody;


function Start () {
	var shootdelay:float=0;

	shootdelay = Random.Range(1.0,3.0);
	InvokeRepeating("shootlaser",shootdelay,shootdelay);

}
  
function shootlaser()
{
	Instantiate(alienlaser,transform.position,transform.rotation);
}


function Update () {

}