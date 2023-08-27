/* eslint-disable no-unused-vars */
import { useState } from "react";

function Formulario() {
  const [nombre_mascota, setNombreMascota] = useState("");
  const [nombre_propietario, setNombrePropietario] = useState("");
  const [email_propietario, setEmailPropietario] = useState("");
  const [fecha_alta, setFechaAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
  console.log(nombre_mascota, nombre_propietario);

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

    console.log("se envia el formulario");
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
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            <p>Todos los campos son obligatorios</p>
          </div>
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
            value="Agregar Paciente"
          />
        </div>
      </form>
    </div>
  );
}

export default Formulario;
