import {
 Form,
 useNavigate,
 useLoaderData,
 redirect,
 useActionData,
} from "react-router-dom";
import { obtenerCliente, actualizarCliente } from "../data/clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function loader({ params }) {
 const cliente = await obtenerCliente(params.clienteId);
 if (Object.values(cliente).length === 0) {
  throw new Response("", {
   status: 404,
   statusText: "El cliente no fue encontrado",
  });
 }
 return cliente;
}

export async function action({ request, params }) {
 const formData = await request.formData();
 const datos = Object.fromEntries(formData);
 const email = formData.get("email");

 //validacion
 const errores = [];
 if (Object.values(datos).includes("")) {
  errores.push("Todos los campos son obligatorios");
 }

 let regex = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
 );
 console.log(regex.test(email));
 if (!regex.test(email)) {
  errores.push("El email no es valido");
 }

 //Retornar el error
 if (Object.keys(errores).length) {
  return errores;
 }

 await actualizarCliente(params.clienteId, datos);
 return redirect("/");
}

function EditarCliente() {
 const navigate = useNavigate();
 const cliente = useLoaderData();
 const errores = useActionData();
 
 return (
  <>
   <h1 className='Font-black text-4xl text-gray-900 font-bold'>
    Editar Cliente
   </h1>
   <p className='mt-3'>
    A continuación podrás modificar los datos de un cliente
   </p>
   <div className='flex justify-end'>
    <button
     className='bg-gray-800 hover:bg-gray-900 text-white rounded-md px-3 py-1 uppercase font-bold'
     onClick={() => navigate(-1)}
    >
     Volver
    </button>
   </div>
   <div className='text-white bg-gray-700 shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
    {errores?.length &&
     errores.map((error, i) => <Error key={i}>{error}</Error>)}
    <Form method='POST' noValidate>
     <Formulario cliente={cliente} />
     <input
      type='submit'
      value='Guardar Cambios'
      className='text-lg mt-5 w-full bg-gray-800 p-3 uppercase font-bold text-white cursor-pointer hover:bg-gray-900 rounded-md'
     />
    </Form>
   </div>
  </>
 );
}

export default EditarCliente;
