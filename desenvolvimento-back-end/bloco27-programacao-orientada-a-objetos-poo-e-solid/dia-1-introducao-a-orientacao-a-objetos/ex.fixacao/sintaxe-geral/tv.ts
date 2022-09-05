class TV {
  private brand: string;
  private size: string;
  private resolution: string;
  private connections: string;
  // connectedTo: string;

  constructor(b: string, s: string, r: string, c:string) {
    console.log(`Creating tv da marca: ${b}`);
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  turnOn() {
    console.log(`${this.brand}, ${this.size}, ${this.resolution}, ${this.connections} `);
  }
}


const tv1 = new TV('sansung', '60 polegadas', '4k', 'HDMI');
tv1.turnOn();