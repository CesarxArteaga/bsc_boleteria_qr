
    export interface Response {
        contrato?: number;
        tipo_identificacion?: string;
        identificacion?: string;
        apellidos?: string;
        nombres?: string;
        email?: string;
        nombre?: string;
        localidad?: string;
        pases_libres?: number;
        pases_med_tarifa?: number;
        cuotas_vencidas?: number;
    }

    export interface SociosResponse {
        message: string;
        status: number;
        data?: Response;
    }



