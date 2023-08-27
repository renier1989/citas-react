/* eslint-disable no-unused-vars */
import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({}); // este state se usa para luego poder editar los datos de un registro
  return (
    <>
      <div className="container mx-auto mt-10">
        <Header />
        <div className="md:flex mt-12 ">
          <Formulario  pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} />
          <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} />
        </div>
      </div>
    </>
  );
}

export default App;
