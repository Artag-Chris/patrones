import { COLORS } from '../helpers/colors.ts';

class SmartDevice {
    public screenSize: string = 'sin pantalla'
    public companyService: string = 'sin servicio'
    public CPU: string = 'sin cpu'
    public earPugs?: string;

    showSpecifications() {
        console.log(` este dispositivo tiene:
        pantalla medida en ${this.screenSize}
        cpu de ${this.CPU}
        company de ${this.companyService}
        y viene con audifonos ${this.earPugs}`)
    }
}

class SmartPhoneBuilder {

    private smartDevice: SmartDevice

    constructor() {
        this.smartDevice = new SmartDevice
    }

    setCompany(companyService: string) {
        this.smartDevice.companyService = companyService
        return this
    }

    setScreenSize(screenSize: string) {
        this.smartDevice.screenSize = screenSize
        return this
    }
    setCPU(CPU: string) {
        this.smartDevice.CPU = CPU
        return this
    }

    setEarpugs(earPugs: string) {
        this.smartDevice.earPugs = earPugs
        return this
    }
    build() {
        return this.smartDevice
    }
}

class TabletBuilder {
    private tablet: SmartDevice
    constructor() {
        this.tablet = new SmartDevice
    }
    setCPU(CPU: string) {
        this.tablet.CPU = CPU;
        return this
    }
    setCompany(companyService: string) {
        this.tablet.companyService = companyService
        return this
    }
    setScreenSize(screenSize: string) {
        this.tablet.screenSize = screenSize
        return this
    }
    setEarPug(earPugs: string) {
        this.tablet.earPugs = earPugs 
        return this
    }
    playGames() {
        console.log(`jugando en la pantalla de ${this.tablet.screenSize} `)
        return this.tablet
    }
    build() {
        return this.tablet
    }
}

function main() {
    const redmi15: SmartDevice = new SmartPhoneBuilder()
        .setCPU("snapDragon 7")
        .setCompany('claro')
        .setEarpugs('inalambricos')
        .setScreenSize('16 cm')
        .build()

    console.log(`%cCelular xiaomi:`, COLORS.red)
    redmi15.showSpecifications()

    const ipad: SmartDevice = new TabletBuilder()
        .setCPU('18 nucleos')
        .setCompany('tigo')
        .setEarPug('no')
        .setScreenSize('24 pulgadas')
        .playGames()
        
        console.log(`%ctable Ipad:`, COLORS.blue)
        
        
}
main()