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

export interface Grua {
    Nombre: string;
    PrecioMinimo: string;
    Telefono: number;
}

export interface MecanicoAutomotriz {
    Nombre: string;
    PrecioMinimo: string;
    Telefono: number;
}

export interface MecanicoElectrico {
    Nombre: string;
    PrecioMinimo: string;
    Telefono: number;
}

export interface MecanicoGeneral {
    Nombre: string;
    PrecioMinimo: string;
    Telefono: number;
}