
    export interface Propiedad {
        LOCALIDAD: string;
        CODIGO_PROPIEDAD: string;
        PASES_LIBRES: number;
    }

    export interface Response {
        CODIGO?: number;
        NOMBRE?: string;
        EMAIL?: string;
        PROPIEDADES?: Propiedad[];
    }

    export interface PropietarioResponse {
        CODE: number;
        STATUS: string;
        MESSAGE: string;
        RESPONSE: Response;
    }


