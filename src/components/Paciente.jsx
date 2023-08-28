/* eslint-disable react/prop-types */
const Paciente = ({paciente, setPaciente, eliminar}) => {
    const {nombre_mascota, nombre_propietario, email_propietario, fecha_alta, sintomas, id} = paciente;
    const handleEliminar = ()=>{
        const respuesta = confirm('¿ Segur@ desea eliminar a este Paciente ?');
        respuesta ? eliminar(id) : null;
    }
  return (
    <div className="mx-5 mb-3 px-5 py-10 rounded-xl bg-white overflow-hidden">
      <p className="font-bold mb-3 uppercase text-gray-700">
        Mascota: <span className="font-normal normal-case">{nombre_mascota}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Propietario:{" "}
        <span className="font-normal normal-case">{nombre_propietario}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Email:{" "}
        <span className="font-normal normal-case">{email_propietario}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Fecha de Alta:{" "}
        <span className="font-normal normal-case">{fecha_alta}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Sintomas:{" "}
        <span className="font-normal normal-case">
          {sintomas}
        </span>
      </p>

      <div className="flex justify-between mt-10">
        <button onClick={()=>setPaciente(paciente)} type="button" className="py-2 px-10 bg-indigo-700 text-white font-bold uppercase rounded-lg">Editar</button>
        <button onClick={handleEliminar} type="button" className="py-2 px-10 bg-red-700 text-white font-bold uppercase rounded-lg">Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;
