/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */
import { COLORS } from '../helpers/colors.ts';
interface Hamburger {
    prepare(): void;
}

class ChickenHamburger implements Hamburger {

    prepare(): void {
        console.log('preparando una hamburguesa de %cpollo', COLORS.cyan)
    }

}

class BeefHamburger implements Hamburger {

    prepare(): void {
        console.log('preparando una hamburguesa de %cRes', COLORS.brown)
    }

}

class LentejasHamburger implements Hamburger {

    prepare(): void {
        console.log('preparando una hamburguesa de %cLentejas', COLORS.gray)
    }

}

abstract class Restaurant {
    abstract createHamburguer(): Hamburger

    orderHamburguer(): void {
        const hamburger = this.createHamburguer();
        hamburger.prepare()
    }
}

class ChickenRestaurant extends Restaurant {
    override createHamburguer(): Hamburger {
        return new ChickenHamburger();
    }
}
class BeefRestaurant extends Restaurant {
    override createHamburguer(): Hamburger {
        return new BeefHamburger();
    }
}
class LentejasRestaurant extends Restaurant {
    override createHamburguer(): Hamburger {
        return new LentejasHamburger();
    }
}

function main() {
    let restaurant: Restaurant;

    const burguerType = prompt('que tipo de hamburguesa quieres? ( chicken/beef/lentejas)')

    switch (burguerType) {
        case `chicken`:
            restaurant = new ChickenRestaurant();
           
            break;
        case `beef`:
            restaurant = new BeefRestaurant();
           
            break
        case`lentejas`:
        restaurant=new LentejasRestaurant()
        break
        default:
            throw new Error('opcion no valida')
    }

}
 
main()