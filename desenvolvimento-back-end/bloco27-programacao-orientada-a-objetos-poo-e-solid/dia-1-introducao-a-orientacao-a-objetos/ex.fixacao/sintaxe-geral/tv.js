var TV = /** @class */ (function () {
    // connectedTo: string;
    function TV(b, s, r, c) {
        console.log("Creating tv da marca: ".concat(b));
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = c;
    }
    TV.prototype.turnOn = function () {
        console.log("".concat(this.brand, ", ").concat(this.size, ", ").concat(this.resolution, ", ").concat(this.connections, " "));
    };
    return TV;
}());
var tv1 = new TV('sansung', '60 polegadas', '4k', 'HDMI');
tv1.turnOn();
