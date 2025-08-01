import { COLORS } from "../helpers/colors.ts";

/**
 * ! Patrón Proxy
 * Este patrón se utiliza para controlar el acceso a un objeto, es decir,
 * se crea un objeto que actúa como intermediario entre el cliente y el objeto real.
 *
 * * Es útil cuando necesitamos controlar el acceso a un objeto,
 * * por ejemplo, para verificar si el cliente tiene permiso
 * * para acceder a ciertos métodos o propiedades.
 *
 * https://refactoring.guru/es/design-patterns/proxy
 *
 */
class Player {
    public name: string;
    public level: number
    constructor(name: string, level: number) {
        this.name = name
        this.level = level
    }
}

interface Room {
    enter(player: Player): void
}

class SecretRoom implements Room {

    enter(player: Player): void {
        console.log(`%c${player.name} ha entrado a la habitacion secreta`, COLORS.blue)
    }

}

//clase Proxy que se encarga de controlar el acceso a la habitacion secreta

class MagicPortal implements Room {

    private secretRoom: SecretRoom;
    constructor(room: SecretRoom) {
        this.secretRoom = room;
    }

    enter(player: Player): void {
        if(player.level>=10){
            this.secretRoom.enter(player)
            return
        }
        console.log(`%cAcceso denegado. ${player.name}, no tienes el nivel suficiente para entrar en la habitacion secreta`,COLORS.red)

    }

}

function main(){

    const portal = new MagicPortal(new SecretRoom());

    const player1 = new Player('player1',9);
    const player2 = new Player('player2',100);

    console.log(`%cIntenta entrar en el portal el ${player1.name}`,COLORS.yellow);
    portal.enter(player1)

   

    console.log(`%cIntenta entrar en el portal el ${player2.name}`,COLORS.yellow);
    portal.enter(player2)


}
main();