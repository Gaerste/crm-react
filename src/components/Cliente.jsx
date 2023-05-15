function Cliente({ cliente }) {
 const { nombre, empresa, email, telefono, id} = cliente
 return (
  <tr>
  <td>
    {nombre}
  </td>
</tr>
 );
}

export default Cliente;
