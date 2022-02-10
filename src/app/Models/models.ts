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
    celular?: number;
    password:string;
    uid:string;
    auto:string;
    perfil:'visitante'|'admin';
}

export interface Servicio {
    Nombre: string;
    PrecioMinimo: string;
    Telefono: number;
}

export interface Pedido {
    uid: string;
    usuario: Useri;
    servicio: Servicio;
    estado:EstadoPedido;
    fecha: Date;
}

export type EstadoPedido = 'enviado'|'En camino'|'Entregado'|'En espera';

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