import SensorsController from "../../src/subsystems/sensorsController.js";
export default class YourSensorsController extends SensorsController {
    sensorsUpdate(activeScan, passiveScan) {
        if (this.navigation.angle === undefined)
            return;
        const scanResult = passiveScan();
        if (!(scanResult instanceof Error))
            this.target = scanResult[0];
        const activeScanResult = activeScan(this.navigation.angle - Math.PI / 2, Math.PI, 100);
        if (!(activeScanResult instanceof Error)) {
            this.targetDetails = activeScanResult.find((r) => { var _a; return r.angle === ((_a = this.target) === null || _a === void 0 ? void 0 : _a.heading); });
            console.log(this.targetDetails);
            this.activeScan = activeScanResult.sort((r1, r2) => r1.distance - r2.distance);
        }
    }
}
