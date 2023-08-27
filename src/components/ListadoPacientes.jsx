/* eslint-disable react/prop-types */
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes , setPaciente }) => {
  const renderNHP = () => {
    return (
      <>
        <h2 className="font-black text-3xl text-center">Ho hay pacientes</h2>
        <p className="text-lg mt-2 mb-6 text-center">
          Aqui veras el registro de{" "}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
      </>
    );
  };

  const renderSHP = () => {
    return (
      <>
        <h2 className="font-black text-3xl text-center">
          Listado de Pacientes
        </h2>
        <p className="text-lg mt-2 mb-6 text-center">
          Administra tus{" "}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
      </>
    );
  };

  const renderElement = () =>
    pacientes && pacientes.length ? renderSHP() : renderNHP();

  return (
    <div className="md:w-1/2 lg:h-3/5 ">
      {renderElement()}
      <div className="m-0 md:h-screen overflow-y-scroll">
        {pacientes.map((paciente) => (
          <Paciente paciente={paciente} setPaciente={setPaciente} key={paciente.id} />
        ))}
      </div>
    </div>
  );
};

export default ListadoPacientes;
