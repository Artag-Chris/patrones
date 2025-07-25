// Interfaz que espera el sistema
interface Reproductor {
  reproducir(audioType: string, nombreArchivo: string): void;
}

// Clase existente con una interfaz incompatible
class ReproductorAvanzado {
  reproducirMp4(nombreArchivo: string) {
    console.log(`Reproduciendo mp4 archivo: ${nombreArchivo}`);
  }

  reproducirVlc(nombreArchivo: string) {
    console.log(`Reproduciendo vlc archivo: ${nombreArchivo}`);
  }
}

// Adaptador que adapta ReproductorAvanzado a la interfaz Reproductor
class AdaptadorReproductor implements Reproductor {
  reproductorAvanzado: ReproductorAvanzado;

  constructor() {
    this.reproductorAvanzado = new ReproductorAvanzado();
  }

  reproducir(audioType: string, nombreArchivo: string): void {
    if (audioType === "mp4") {
      this.reproductorAvanzado.reproducirMp4(nombreArchivo);
    } else if (audioType === "vlc") {
      this.reproductorAvanzado.reproducirVlc(nombreArchivo);
    } else {
      console.log(`Formato de audio ${audioType} no soportado`);
    }
  }
}

// Clase cliente que usa la interfaz Reproductor
class ReproductorAudio implements Reproductor {
  adaptador: AdaptadorReproductor;

  constructor() {
    this.adaptador = new AdaptadorReproductor();
  }

  reproducir(audioType: string, nombreArchivo: string): void {
    // Solo admite mp3 y usa adaptador para otros tipos
    if (audioType === "mp3") {
      console.log(`Reproduciendo mp3 archivo: ${nombreArchivo}`);
    } else if (audioType === "vlc" || audioType === "mp4") {
      this.adaptador.reproducir(audioType, nombreArchivo);
    } else {
      console.log(`Formato de audio ${audioType} no soportado por ReproductorAudio.`);
    }
  }
}

// Pruebas

const reproductor = new ReproductorAudio();

reproductor.reproducir("mp3", "cancion.mp3");   // Reproduce mp3 directamente
reproductor.reproducir("mp4", "video.mp4");     // Usa adaptador para reproducir mp4
reproductor.reproducir("vlc", "pelicula.vlc");  // Usa adaptador para reproducir vlc
reproductor.reproducir("avi", "archivo.avi");   // Formato no soportado
