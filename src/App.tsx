import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import logo from './logo.svg';
import './App.css';
import { studentSchema, mappedStates, mappedGrades, mappedGroups, mappedGenders } from './validations/studentSchema';

type FormData = {
  id_student: string;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  birthdate: string;
  gender: string;
  grade: string;
  group: string;
  attendant: string;
  state: string;
};

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(studentSchema),
  });

  const statesOptions = Object.entries(mappedStates).map(([key, value]) => <option value={key} key={key}>{value}</option>);
  const gradesOptions = Object.entries(mappedGrades).map(([key, value]) => <option value={key} key={key}>{value}</option>);
  const groupsOptions = Object.entries(mappedGroups).map(([key, value]) => <option value={key} key={key}>{value}</option>);
  const gendersOptions = Object.entries(mappedGenders).map(([key, value]) => <option value={key} key={key}>{value}</option>);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <form className='App-form' onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="id_student">Identificación</label>
          <input type="text" id="id_student" {...register('id_student')} />
          {errors.id_student?.message && <p>{errors.id_student.message}</p>}
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" {...register('name')} />
          {errors.name?.message && <p>{errors.name.message}</p>}
          <label htmlFor="last_name">Apellidos</label>
          <input type="text" id="last_name" {...register('last_name')} />
          {errors.last_name?.message && <p>{errors.last_name.message}</p>}
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" {...register('email')} />
          {errors.email?.message && <p>{errors.email.message}</p>}
          <label htmlFor="phone">Teléfono</label>
          <input type="phone" id="phone" {...register('phone')} />
          {errors.phone?.message && <p>{errors.phone.message}</p>}
          <label htmlFor="birthdate">Fecha de Nacimiento</label>
          <input type="date" id="birthdate" {...register('birthdate')} />
          {errors.birthdate?.message && <p>{errors.birthdate.message}</p>}
          <label htmlFor="gender">Genero</label>
          <select id="gender" {...register('gender')}>
            {gendersOptions}
          </select>
          {errors.gender?.message && <p>{errors.gender.message}</p>}
          <label htmlFor="grade">Grado</label>
          <select id="grade" {...register('grade')}>
            {gradesOptions}
          </select>
          {errors.grade?.message && <p>{errors.grade.message}</p>}
          <label htmlFor="group">Grupo</label>
          <select id="group" {...register('group')}>
            {groupsOptions}
          </select>
          {errors.group?.message && <p>{errors.group.message}</p>}
          <label htmlFor="attendant">Acudiente</label>
          <input type="text" id="attendant" {...register("attendant")} />
          {errors.attendant?.message && <p>{errors.attendant.message}</p>}
          <label htmlFor="state">Estado</label>
          <select id="state" {...register('state')}>
            {statesOptions}
          </select>
          {errors.state?.message && <p>{errors.state.message}</p>}
        <button className='App-button' type="submit">Registrar Estudiante</button>
      </form>
    </div>
  );
}

export default App;
