import { z } from 'zod';

//Select arrays
const states = ['A', 'E', 'R'] as const;
const grades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] as const;
const groups = ['A', 'B', 'C', 'D', 'E', 'F'] as const;
const genders = ['M', 'F', 'NB']

//Exported types for use in other files.
export type States = (typeof states)[number];
export type Grades = (typeof grades)[number];
export type Groups = (typeof groups)[number];
export type Genders = (typeof genders)[number];

//Mapped types to create a union of all possible combinations.
export const mappedStates: { [key in States]: string } = { A: "Activo", E: "Egresado", R: "Retirado" };
export const mappedGrades: { [key in Grades]: string } = {
    1: "Primero",
    2: "Segundo",
    3: "Tercero",
    4: "Cuarto",
    5: "Quinto",
    6: "Sexto",
    7: "Septimo",
    8: "Octavo",
    9: "Noveno",
    10: "Decimo",
    11: "Undecimo",
    12: "Duodecimo"
};
export const mappedGroups: { [key in Groups]: string } = { A: "Grupo A", B: "Grupo B", C: "Grupo C", D: "Grupo D", E: "Grupo E", F: "Grupo F" };
export const mappedGenders: { [key in Genders]: string } = { M: "Masculino", F: "Femenino", NB: "No binario" };

//Schema definition for the student object, using Zod library
export const studentSchema = z.object({
    id_student: z.string().min(3, { message: 'Ingrese el número de documento' }),
    name: z.string().min(3, { message: 'Ingrese un nombre' }).max(50, { message: 'Nombre demasiado largo' }),
    last_name: z.string().min(3, { message: 'Ingrese los apellidos' }).max(100, { message: 'Apellido demasiado largo' }),
    email: z.string().email({ message: 'Ingrese un correo valido' }),
    phone: z.string().min(7,{message: 'Ingrese un numero de teléfono sea fijo o celular'}).max(10, {message: 'No se puede superar los un numero de teléfono'}),
    birthdate: z.string().refine(dob => new Date(dob).toString() !==  'Fecha Invalida', {message: 'Ingrese una fecha valida'}),
    grade: z.enum(grades, { errorMap: () => ({ message: 'Seleccione el grado del estudiante' }), }),
    group: z.enum(groups, { errorMap: () => ({ message: 'Seleccione el grupo correspondiente' }), }),
    attendant: z.string().min(3, { message: 'Ingrese un acudiente' }),
    state: z.enum(states, { errorMap: () => ({ message: 'Seleccione el estado actual del estudiante' }), }).default(states[0]),
});