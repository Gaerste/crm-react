import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
export function loader() {
 const clientes = [
  {
   id: 1,
   nombre: "Alejandro",
   telefono: "23409987634",
   email: "alejandro@alejandro.com",
   empresa: "Alejandro Inc",
  },
  {
   id: 2,
   nombre: "María",
   telefono: "987654321",
   email: "maria@example.com",
   empresa: "Empresa XYZ",
  },
  {
   id: 3,
   nombre: "Carlos",
   telefono: "5551234567",
   email: "carlos@example.com",
   empresa: "ABC Company",
  },
  {
   id: 4,
   nombre: "Laura",
   telefono: "6789012345",
   email: "laura@example.com",
   empresa: "XYZ Corporation",
  },
  {
   id: 5,
   nombre: "Andrés",
   telefono: "1234567890",
   email: "andres@example.com",
   empresa: "123 Industries",
  },
  {
   id: 6,
   nombre: "Sofía",
   telefono: "3456789012",
   email: "sofia@example.com",
   empresa: "Smith & Co.",
  },
  {
   id: 7,
   nombre: "Pedro",
   telefono: "6789012345",
   email: "pedro@example.com",
   empresa: "Johnson Ltd.",
  },
  {
   id: 8,
   nombre: "Ana",
   telefono: "5678901234",
   email: "ana@example.com",
   empresa: "Robinson Enterprises",
  },
  {
   id: 9,
   nombre: "Luis",
   telefono: "9012345678",
   email: "luis@example.com",
   empresa: "Wilson Group",
  },
  {
   id: 10,
   nombre: "Marta",
   telefono: "4567890123",
   email: "marta@example.com",
   empresa: "Brown & Sons",
  },
 ];
 return clientes;
}

const Index = () => {
 const clientes = useLoaderData();

 return (
  <>
   <h1 className='font-black text-4xl text-gray-900'>Clientes</h1>
   <p className='mt-3'>Administra tus clientes</p>
   {clientes.length ? (
    <table className='w-full bg-gray-700 shadow mt-5 table-auto'>
     <thead className='bg-gray-700 text-gray-200'>
      <tr>
       <th className='p-2'>Cliente</th>
       <th className='p-2'>Contacto</th>
       <th className='p-2'>Acciones</th>
      </tr>
     </thead>

     <tbody>
      {clientes.map((cliente) => (
       <Cliente cliente={cliente} key={cliente.id} />
      ))}
     </tbody>
    </table>
   ) : (
    <p className='text-center mt-10'>No hay clientes aún</p>
   )}
  </>
 );
};

export default Index;
