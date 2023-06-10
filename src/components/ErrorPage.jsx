import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()
    
    return (
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold mt-20 text-gray-900 uppercase">crm-clientes</h1>
            <p className="text-center font-bold text-2xl mt-5 text-red-600">Hubo un error</p>
            <p className="text-center">{error.statusText || error.message}</p>
        </div>
    )
}