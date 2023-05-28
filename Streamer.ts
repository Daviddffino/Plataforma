// Definición de la clase Streamer

class Streamer {
  nickname: string;
  description: string;
  socialMedia: SocialMedia[];
  streamCategories: Category[];

  constructor(nickname: string, description: string, socialMedia: SocialMedia[], streamCategories: Category[]) {
    this.nickname = nickname;
    this.description = description;
    this.socialMedia = socialMedia;
    this.streamCategories = streamCategories;
  }
}

// Ejemplo de uso

const socialMedia: SocialMedia[] = [
  { name: "Twitter", url: "https://twitter.com/EjemploStreamer" },
  { name: "Instagram", url: "https://instagram.com/EjemploStreamer" },
  { name: "Twitch", url: "https://twitch.tv/EjemploStreamer" },
];

const categories: Category[] = [
  { name: "Juegos", description: "Transmisión de videojuegos en vivo", image: "juegos.jpg" },
  { name: "En estudio.", description: "Transmisión desde un estudio", image: "estudio.jpg" },
  { name: "Música", description: "Transmisión de sesiones de música en vivo", image: "musica.jpg" },
];

const streamer = new Streamer("EjemploStreamer", "¡Bienvenidos a mi canal de streaming!", socialMedia, categories);

// Acceso a los atributos

console.log(streamer.nickname); // EjemploStreamer
console.log(streamer.description); // ¡Bienvenidos a mi canal de streaming!
console.log(streamer.socialMedia); // [{ name: "Twitter", url: "https://twitter.com/EjemploStreamer" }, { name: "Instagram", url: "https://instagram.com/EjemploStreamer" }, { name: "Twitch", url: "https://twitch.tv/EjemploStreamer" }]
console.log(streamer.streamCategories); // [{ name: "Juegos", description: "Transmisión de videojuegos en vivo", image: "juegos.jpg" }, { name: "En estudio.", description: "Transmisión desde un estudio", image: "estudio.jpg" }, { name: "Música", description: "Transmisión de sesiones de música en vivo", image: "musica.jpg" }]
