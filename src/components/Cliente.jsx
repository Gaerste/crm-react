function Cliente({ cliente }) {
 const { nombre, empresa, email, telefono, id } = cliente;
 return (
  <tr className='border-b'>
   <td className='p-5 space-y-2'>
    <p className='text-white text-2xl'>{nombre}</p>
    <p className='text-white'>{empresa}</p>
   </td>

   <td className='p-6'>
    <p className='text-gray-200'>
     <span className='text-white uppercase font-bold'>Email: </span>
     {email}
    </p>
    <p className='text-gray-300'>
     <span className='text-white uppercase font-bold'>Tel: </span>
     {telefono}
    </p>
   </td>

   <td className='p-6 flex gap-5'>
    <button type="button" className="text-blue-600 hover:text-blue-700 uppercase text-xs font-bold">Añadir</button>
    <button type="button" className="text-red-600 hover:text-red-700 uppercase text-xs font-bold">Eliminar</button>
   </td>
  </tr>
 );
}

export default Cliente;
