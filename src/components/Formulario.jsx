/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre_mascota, setNombreMascota] = useState("");
  const [nombre_propietario, setNombrePropietario] = useState("");
  const [email_propietario, setEmailPropietario] = useState("");
  const [fecha_alta, setFechaAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString();
    return random + fecha;
  };

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombreMascota(paciente.nombre_mascota);
      setNombrePropietario(paciente.nombre_propietario);
      setEmailPropietario(paciente.email_propietario);
      setFechaAlta(paciente.fecha_alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      [
        nombre_mascota,
        nombre_propietario,
        email_propietario,
        fecha_alta,
        sintomas,
      ].includes("")
    ) {
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      nombre_mascota,
      nombre_propietario,
      email_propietario,
      fecha_alta,
      sintomas,
    };

    if (paciente.id) {
      // esta parte es para editar
      objetoPaciente.id = paciente.id; // aqui le asigno el id que ya venia , es el paciente al que le di editar.

      // aqui busco dentro de la lista de los pacientes que ya fuera registrados, cual coincide con el id del que quiero editar
      // cuando coincide el id , con el paciente que estoy editando, entonces lo que va a hacer es sustituir lo por el objetoPaciente que es el que ya tiene los datros modificados.
      // para el caso que hayan mas pacientes y esto no van a coincider con el id del paciente que estoy editando, estos los va a dejar como estan.
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);

    } else {
      // esta parte es para agregar

      objetoPaciente.id = generarId(); // aqui asigno un id al objeto
      setPacientes([...pacientes, objetoPaciente]);
    }

    setNombreMascota("");
    setNombrePropietario("");
    setEmailPropietario("");
    setFechaAlta("");
    setSintomas("");
    setPaciente({});

    // console.log("se envia el formulario");
    // console.log(pacientes);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Información de Seguimiento
      </h2>
      <p className="text-lg mt-2 mb-6 text-center">
        Añade Pacientes y {""}{" "}
        <span className="text-indigo-600 font-bold"> Adminitralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-4"
      >
        {error && (
          <Error>
            <p>Todos los campos son requeridos</p>
          </Error>
        )}
        <div>
          <label
            htmlFor="nombre_mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Mascota
          </label>
          <input
            value={nombre_mascota}
            onChange={(e) => setNombreMascota(e.target.value)}
            id="nombre_mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className=" border-2 w-full p-2 mt-2 placeholder:text-gray-600  rounded-md"
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="nombre_propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Porpietario
          </label>
          <input
            value={nombre_propietario}
            onChange={(e) => setNombrePropietario(e.target.value)}
            id="nombre_propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className=" border-2 w-full p-2 mt-2 placeholder:text-gray-600  rounded-md"
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="email_propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Email Propietario
          </label>
          <input
            value={email_propietario}
            onChange={(e) => setEmailPropietario(e.target.value)}
            id="email_propietario"
            type="email"
            placeholder="Email del Propietario"
            className=" border-2 w-full p-2 mt-2 placeholder:text-gray-600  rounded-md"
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="fecha_alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Alta
          </label>
          <input
            value={fecha_alta}
            onChange={(e) => setFechaAlta(e.target.value)}
            id="fecha_alta"
            type="date"
            className=" border-2 w-full p-2 mt-2 placeholder:text-gray-600  rounded-md"
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="sintomas_mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            id="sintomas_mascota"
            type="date"
            placeholder="Describe los sintomas de tu mascota"
            className=" border-2 w-full p-2 mt-2 placeholder:text-gray-600  rounded-md"
          />
        </div>
        <div>
          <input
            type="submit"
            className="bg-indigo-600 text-white p-3 w-full uppercase font-bold cursor-pointer rounded-md"
            value={paciente.id ? `Editar Paciente` : `Agregar Paciente`}
          />
        </div>
      </form>
    </div>
  );
}

export default Formulario;
