import "./Tabel.css";

const Tabel = ({data}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>NAME</th>
                <th>COUNTRY</th>
                <th>TYPE</th>
            </tr>
            {data.map((item) =>(
                <tr key={item.id}>
                    <td className="item" >{item.Name}</td>
                    <td className="item"> {item.Country}</td>
                    <td className="item">{item.Type}</td>

                </tr>
            ))}
        </tbody>
      
    </table>
  )
}

export default Tabel
