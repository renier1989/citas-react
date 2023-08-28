/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({}); // este state se usa para luego poder editar los datos de un registro

  useEffect(() => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    setPacientes(pacientesLS);
  }, []);

  // aqui le integramos localstorage
  useEffect(() => {
    // aqui hay que comprobar si es que ya no hay algo en los pacientes, sino siempre va a iniciar a los pacientes con un [] vacio
    if(pacientes.length > 0){
      localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };
  return (
    <>
      <div className="container mx-auto mt-10">
        <Header />
        <div className="md:flex mt-12 ">
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminar={eliminarPaciente}
          />
        </div>
      </div>
    </>
  );
}

export default App;
