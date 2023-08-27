const Paciente = () => {
  return (
    <div className="mx-5 mb-3 px-5 py-10 rounded-xl bg-white overflow-hidden">
      <p className="font-bold mb-3 uppercase text-gray-700">
        Mascota: <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Propietario:{" "}
        <span className="font-normal normal-case">Renier Vargas</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Email:{" "}
        <span className="font-normal normal-case">renier1989@gmail.com</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Fecha de Alta:{" "}
        <span className="font-normal normal-case">29 de Junio de 2020</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Sintomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolores eum nesciunt fugit vel officiis eveniet! Voluptate,
          dignissimos! Fugit dolorem quis reiciendis dolore temporibus deleniti
          ad voluptate magni illo dolorum.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
