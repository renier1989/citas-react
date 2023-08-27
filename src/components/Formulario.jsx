function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Información de Seguimiento</h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Añade Pacientes y {""} <span className="text-indigo-600 font-bold"> Adminitralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5">
        <div >
          <label htmlFor="nombre_mascota" className="block text-gray-700 uppercase font-bold"> Nombre de Mascota</label>
          <input id="nombre_mascota" type="text" placeholder="Nombre de la Mascota" className=" border-2 w-full p-2 mt-2 placeholder:text-gray-600  rounded-md"/>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
