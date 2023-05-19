import { useNavigate, Form, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function action({ request }) {
 const formData = await request.formData();
 const datos = Object.fromEntries(formData);

 //validacion
 const errores = [];
 if (Object.values(datos).includes("")) {
  errores.push("Todos los campos son obligatorios");
 }
 //Retornar el error
 if (Object.keys(errores).length) {
  return errores;
 }
 return null;
}

function NuevoCliente() {
 const errores = useActionData();
 const navigate = useNavigate();

 return (
  <>
   <h1 className='Font-black text-4xl text-gray-900 font-bold'>
    Nuevo cliente
   </h1>
   <p className='mt-3'>
    Llena todos los campos para registrar un nuevo cliente
   </p>
   <div className='flex justify-end'>
    <button
     className='bg-gray-800 hover:bg-gray-900 text-white rounded-md px-3 py-1 uppercase font-bold'
     onClick={() => navigate(-1)}
    >
     Volver
    </button>
   </div>
   <div className='text-white bg-gray-600 shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
    {errores?.length &&
     errores.map((error, i) => <Error key={i}>{error}</Error>)}
    <Form method='POST'>
     <Formulario />
     <input
      type='submit'
      value='Registrar cliente'
      className='text-lg mt-5 w-full bg-gray-800 p-3 uppercase font-bold text-white cursor-pointer hover:bg-gray-900 rounded-md'
     />
    </Form>
   </div>
  </>
 );
}

export default NuevoCliente;
