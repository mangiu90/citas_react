const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombreMascota, nombrePropietario, email, alta, sintomas } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('Desea eliminar este paciente?');

        if (respuesta) {
            eliminarPaciente(paciente.id);
        }
    }

    return (
        <div className="mx-3 mb-3 bg-white shadow-md py-10 px-5 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{nombreMascota}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">{nombrePropietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                E-Mail: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Alta: {''}
                <span className="font-normal normal-case">{alta}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente
