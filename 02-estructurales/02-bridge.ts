import { COLORS } from "../helpers/colors.ts";


/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */
interface Ability {
    use(): void;
}

class SwordAttack implements Ability {

    use(): void {
        console.log('%cAtaca con una espada ferozmente', COLORS.blue)
    }

}
class axeAttack implements Ability {

    use(): void {
        console.log('%cAtaca con una Hacha ferozmente', COLORS.cyan)
    }

}

class MagicSpell implements Ability {
    use(): void {
        console.log('Lanza un hechizo magico poderoso', COLORS.green)
    }

}

abstract class Character {
    protected ability: Ability

    constructor(ability: Ability) {
        this.ability = ability
    }

    setAbility(ability: Ability) {
        console.log('el personaje cambia de habilidad')
        this.ability = ability
    }

    abstract performAbility(): void
}

class Warrior extends Character {
    override performAbility(): void {
        console.log('El Guerrero esta listo para luchar')
        this.ability.use()
    }
}

class Mage extends Character {
    override performAbility(): void {
        console.log('El Mago esta listo para luchar')
        this.ability.use()
    }
}
function main() {
    const warrior = new Warrior(new SwordAttack())
    warrior.performAbility()
    warrior.setAbility(new axeAttack())
    warrior.performAbility()
}
main()