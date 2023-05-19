const Formulario = ({ cliente }) => {
 return (
  <>
   <div className='mb-4'>
    <label className='text-white' htmlFor='nombre'>
     Nombre:
    </label>
    <input
     id='nombre'
     type='text'
     className='mt-2 block w-full p-3 bg-gray-50 text-black'
     placeholder='Nombre del Cliente'
     name='nombre'
    />
   </div>
   <div className='mb-4'>
    <label className='text-white' htmlFor='empresa'>
     Empresa:
    </label>
    <input
     id='empresa'
     type='text'
     className='mt-2 block w-full p-3 bg-gray-50 text-black'
     placeholder='Empresa del Cliente'
     name='empresa'
    />
   </div>

   <div className='mb-4'>
    <label className='text-white' htmlFor='email'>
     E-mail:
    </label>
    <input
     id='email'
     type='email'
     className='mt-2 block w-full p-3 bg-gray-50 text-black'
     placeholder='Email del Cliente'
     name='email'
    />
   </div>

   <div className='mb-4'>
    <label className='text-white' htmlFor='telefono'>
     Teléfono:
    </label>
    <input
     id='telefono'
     type='tel'
     className='mt-2 block w-full p-3 bg-gray-50 text-black'
     placeholder='Teléfono del Cliente'
     name='telefono'
    />
   </div>

   <div className='mb-4'>
    <label className='text-white' htmlFor='notas'>
     Notas:
    </label>
    <textarea
     as='textarea'
     id='notas'
     type='text'
     className='mt-2 block w-full p-3 bg-gray-50 h-40 align-self text-black'
     placeholder='Notas del Cliente'
     name='notas'
    />
   </div>
  </>
 );
};

export default Formulario;
