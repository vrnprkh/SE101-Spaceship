import Sprite from "../sprite.js";
import Vector2 from "../helpers/Vector2.js";

import RenderedObject from "../renderedObject.js";
export default class WarpGate extends RenderedObject {
	constructor(destinationSolarystem, ...args) {
		super(...args);
		this.image = this.game.images["warpgate"];
		this.ctx = "planets";
		this.size = new Vector2(5, 5);
		this.radius = 1.5;
		this.destinationSolarSystem = destinationSolarystem;
        this.gravitySignature = 1;
	}
	update() {
		//Add special update code here if needed
		// super.update();
	}
	warp(ship){
		let newProcess;
		this.game.processes.forEach((process) => {
			if (process.solarSystem.name === this.destinationSolarSystem) {
				newProcess = process;
			}
		})
		ship.solarSystem = newProcess.solarSystem;
		newProcess.appendShip(ship);
		ship.process.dealocateShip(ship);
		if (ship.primary) {
			this.game.drawnProcess = newProcess;
			newProcess.rerenderStatic();
		}
		ship.process = newProcess;
	}
}
