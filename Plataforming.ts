class Plataforming {
  nombre: string;
  logo: string;
  descripcion: string;
  empresaPatrocinadora: string;
  canales: Canal[];

  constructor(nombre: string, logo: string, descripcion: string, empresaPatrocinadora: string, canales: Canal[]) {
    this.nombre = nombre;
    this.logo = logo;
    this.descripcion = descripcion;
    this.empresaPatrocinadora = empresaPatrocinadora;
    this.canales = canales;
  }
}

// Crear instancias de plataformas y canales
const plataforma1 = new Plataforming(
  "Plataforma 1",
  "logo-plataforma1.png",
  "Descripción de la Plataforma 1.",
  "Empresa A",
  [
    new Canal("Canal 1", "banner-canal1.png", "Nombre del Streamer 1", "Descripción detallada del Canal 1."),
    // Agregar más canales según sea necesario
  ]
);

// Agregar más instancias de plataformas según sea necesario

// Acceder a los atributos de las instancias
console.log(plataforma1.nombre);
console.log(plataforma1.logo);
console.log(plataforma1.descripcion);
console.log(plataforma1.empresaPatrocinadora);
console.log(plataforma1.canales);

console.log(plataforma1.canales[0].nombre);
console.log(plataforma1.canales[0].banner);
console.log(plataforma1.canales[0].streamer);
console.log(plataforma1.canales[0].descripcion);
