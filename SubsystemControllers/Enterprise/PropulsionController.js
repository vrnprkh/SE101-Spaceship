import Vector2 from "../../src/helpers/Vector2.js";
import SubsystemController from "../../src/subsystemController.js";
export default class PropulsionController extends SubsystemController{
	constructor(...args){
    	super(...args);
  	}
	/* To get other subsystem information, use the following functions:
	this.defence
	this.navigation
	this.sensors
	see SandBox/Scripts/Ship/README.md for an explanation of return values.
	*/
	propulsionUpdate(shipStatusInfo, setThrusters){
		setThrusters("mainThruster", 10);
		//Student code goes here
	}
}