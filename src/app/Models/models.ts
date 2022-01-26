export interface Cliente {
    nombre: string;
    apellido: string;
    correo: string;
    auto: string;
    
}

export interface Useri {
    nombre: string;
    apellido: string;
    correo:string;
    password:string;
    uid:string;
    auto:string;
    perfil:'visitante'|'admin';
}

export interface Auto {
    color: string;
    modelo: string;
    marca: string;
    tipo: string;
    fechaAd: string;
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