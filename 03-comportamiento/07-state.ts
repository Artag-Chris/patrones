import { COLORS } from "../helpers/colors.ts";
import { sleep } from "../helpers/sleep.ts";

interface State {

    name: string;

    insertMoney(): void;
    selectProduct(): void;
    dispenseProduct(): void;


}

class VendingMachine {
    private state: State;

    constructor() {
        this.state = new WaitingForMoney(this)

    }
    insertMoney() {
        this.state.insertMoney();
    }
    selectProduct() {
        this.state.selectProduct();
    }
    dispenseProduct() {
        this.dispenseProduct();
    }
    getStateName(): string {
        return this.state.name
    }
    setSate(newState: State) {
        this.state = newState;
        console.log(`Estado cambiado a: %c${newState.name}`, COLORS.yellow)
    }
}

class WaitingForMoney implements State {
    public name: string = 'Esperando Dinero'
    private vendingMachine: VendingMachine;

    constructor(vendingMache: VendingMachine) {
        this.vendingMachine = vendingMache
    }
    insertMoney(): void {
        console.log(`dinero insertado ahora puedes seleccionar producto`)
        this.vendingMachine.setSate(new ProductSeletedState(this.vendingMachine))
        //cambiar el estado
    }
    selectProduct(): void {
        console.log(`%cPrimero debes de insertar dinero.`, COLORS.red)
    }
    dispenseProduct(): void {
        console.log(`%cPrimero debes de seleccionar el producto`, COLORS.red)
    }


}

class ProductSeletedState implements State {
    public name: string = 'Seleccionando Producto'
    private vendingMachine: VendingMachine;

    constructor(vendingMache: VendingMachine) {
        this.vendingMachine = vendingMache
    }
    insertMoney(): void {
        console.log(`por favor seleciona un producto dinero ya ingresado`)
        //cambiar el estado
    }
    selectProduct(): void {
        this.vendingMachine.setSate(new DispensingProductState(this.vendingMachine))
    }
    dispenseProduct(): void {
        console.log(`%cPrimero debes de seleccionar el producto`, COLORS.red)
    }


}

class DispensingProductState implements State {
    public name: string = 'despachando Producto'
    private vendingMachine: VendingMachine;

    constructor(vendingMache: VendingMachine) {
        this.vendingMachine = vendingMache
    }
    insertMoney(): void {
        console.log(`por favor seleciona un producto dinero ya ingresado`)
        //cambiar el estado
    }
    selectProduct(): void {
        console.log(`producto ya seleccionado`)
    }
    dispenseProduct(): void {
        console.log(`%centregando producto`, COLORS.red)
        this.vendingMachine.setSate(new WaitingForMoney(this.vendingMachine))
    }


}

async function main() {
    const vendingMachine = new VendingMachine();

    let selectedOption: string | null = '4'

    do {
 console.clear();
    console.log(`Selecciona una opcion: ${vendingMachine.getStateName()}`)

    selectedOption = prompt(
        `
    1. Insertar dinero
    2. seleccionar Producto
    3. DispensarProducto
    4. Salir

    Opcion:
    
    `
    )
    switch (selectedOption) {
        case `1`:
            vendingMachine.insertMoney()
            break;
        case `2`:
            vendingMachine.selectProduct()
            break;
        case`3`:
        vendingMachine.dispenseProduct()
        break
        case`4`:
        console.log(`saliendo del sistema`)
        break
        default:
            console.log(`opcion no valida`)
    }
   await sleep(3000);
    } while (selectedOption !== `4`)
   

}
main()