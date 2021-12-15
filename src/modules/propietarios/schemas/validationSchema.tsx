import * as yup from 'yup';

export const beneficiarioSchema = yup.object({
    email: yup
        .string()
        .email('Ingrese un email valido')
        .required('Email es requerido'),
    cedula: yup
        .number()
        .required('Email es requerido'),
    nombres: yup
        .string()
        .required('Nombres es requerido'),
    apellidos: yup
        .string()
        .required('Apellidos es requerido'),
});