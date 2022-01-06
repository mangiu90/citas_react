import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {

    const [nombreMascota, setNombreMascota] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombreMascota(paciente.nombreMascota);
            setNombrePropietario(paciente.nombrePropietario);
            setEmail(paciente.email);
            setAlta(paciente.alta);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombreMascota, nombrePropietario, email, alta, sintomas].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        const objetoPaciente = {
            nombreMascota,
            nombrePropietario,
            email,
            alta,
            sintomas,
        }

        if (paciente.id) {
            objetoPaciente.id = paciente.id;

            const pacientesActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

            setPacientes(pacientesActualizado);
            setPaciente({});
        } else {
            objetoPaciente.id = generarId();

            setPacientes([...pacientes, objetoPaciente]);
        }

        setNombreMascota('');
        setNombrePropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');
    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 ml-1"
                onSubmit={handleSubmit}
            >
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}

                <div className="mb-5">
                    <label htmlFor="nombre_mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>

                    <input id="nombre_mascota" type="text" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombreMascota}
                        onChange={(e) => setNombreMascota(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="nombre_propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>

                    <input id="nombre_propietario" type="text" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombrePropietario}
                        onChange={(e) => setNombrePropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">E-Mail</label>

                    <input id="email" type="email" placeholder="E-Mail Contacto Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>

                    <input id="alta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>

                    <textarea id="sintomas" placeholder="Describe los síntomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-colors">
                    {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                </button>
            </form>
        </div>
    )
}

export default Formulario
