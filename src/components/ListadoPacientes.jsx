import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:h-3/5 ">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-lg mt-2 mb-6 text-center">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      <div className="m-0 md:h-screen overflow-y-scroll">
        <Paciente />
        <Paciente />
        <Paciente />
        
      </div>
    </div>
  );
};

export default ListadoPacientes;
