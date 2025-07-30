/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

class Projector {
    turnOn(){
        console.log('Proyector encendido');
    }

    turnOff(){
        console.log('Proyector apagado');
    }
}

class SoundSystem{

    on(){
        console.log(`sistema de sonido encendido`)
    }

    off(){
        console.log(`sistema de sonido apagado`)
    }
}

class VideoPlayer {

    on(){
        console.log(`reproductor de video encendido`)
    }

    play(movie:string){
        console.log(`reproduciendo la pelicula ${movie}`)
    }

    stop(){
        console.log(`reproductor de video detenido`)
    }

    off(){
        console.log(`repoructor de  video apagado`)
    }
}

class PopCornMaker{
    poppingPopcorn(){
        console.log(`haciendo palomitas`)
    }
    turnOffPoppingPopcorn(){
        console.log(`apagando la maquina de palomitas de maiz`)
    }
}

interface HomeTheaterFacadeProps{
    projector:Projector;
    soundSystem:SoundSystem;
    videoPlayer:VideoPlayer;
    popcornMaker:PopCornMaker
}


class HomeTheaterFacade{

    private projector:Projector;
    private soundSystem:SoundSystem;
    private videoPlayer:VideoPlayer;
    private popcornMaker:PopCornMaker;

constructor({projector,soundSystem,videoPlayer,popcornMaker}:HomeTheaterFacadeProps){
this.projector=projector;
this.soundSystem=soundSystem;
this.videoPlayer=videoPlayer
this.popcornMaker=popcornMaker
}

watchMovie(movie:string){
    console.log(`Preparando para ver la pelicula`);
    this.projector.turnOn();
    this.soundSystem.on();
    this.popcornMaker.poppingPopcorn();
    this.videoPlayer.on();
    this.videoPlayer.play(movie);
    console.log(`disfrute la pelicula`)
}

stopWatchMovie(){
    console.log(`Preparando para detener la pelicula`);
    this.projector.turnOff();
    this.soundSystem.off();
    this.popcornMaker.turnOffPoppingPopcorn();
    this.videoPlayer.stop();
    this.videoPlayer.off();
    console.log(`sistema apagado`)
}
}

function main(){
    const projector=new Projector();
    const soundSystem=new SoundSystem();
    const videoPlayer= new VideoPlayer();
    const popcornMaker=new PopCornMaker();

    const nocheDePeliculas= new HomeTheaterFacade({projector,soundSystem,videoPlayer,popcornMaker})
    nocheDePeliculas.watchMovie(`el se;or de la noche`)
    nocheDePeliculas.stopWatchMovie();

}
main()