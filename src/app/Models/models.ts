export interface Cliente {
    nombre: string;
    apellido: string;
    correo: string;
    auto: string;
}

export interface Auto {
    color: string;
    modelo: string;
    marca: string;
    año: number;
    kilometraje?: number;
}


