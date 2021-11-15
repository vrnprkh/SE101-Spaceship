import Sprite from "../sprite.js";
import Vector2 from "../helpers/Vector2.js";

import RenderedObject from "../renderedObject.js";
export default class WarpGate extends RenderedObject {
	constructor(...args) {
		super(...args);
		this.image = this.game.images[""];
		this.height = 50;
		this.width = 50;
		this.destinationSolarSystem;
	}
	update() {
		//Add special update code here if needed
		super.update();
	}
	warp(){
		//send signal to game to start new solarSystem
	}
}