import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {
 const location = useLocation();
 return (
  <div className='md:flex md:min-h-screen'>
   <aside className='md:w-1/4 bg-gray-900 px-5 py-10'>
    <h2 className='text-white text-4xl font-black text-center'>
     CRM - clientes
    </h2>
    <nav className='mt-10'>
     <Link
      to='/'
      className={`${
       location.pathname === "/" ? "text-white" : "text-gray-400"
      } text-2xl mt-2 hover:text-white block`}
     >
      Clientes
     </Link>
     <Link
      to='/cliente/nuevo'
      className={`${
       location.pathname === "/cliente/nuevo" ? "text-white" : "text-gray-400"
      } text-2xl mt-2 hover:text-white`}
     >
      Nuevo Cliente
     </Link>
    </nav>
   </aside>

   <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
    <Outlet />
   </main>
  </div>
 );
}

export default Layout;
