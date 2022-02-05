export default function Transaction({ props }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.map(prop => (
          <tr key={prop.id}>
            <td>{prop.type}</td>
            <td>{prop.amount}</td>
            <td>{prop.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
