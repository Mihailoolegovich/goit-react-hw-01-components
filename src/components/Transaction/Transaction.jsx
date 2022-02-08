import s from './Transaction.module.css';
import PropTypes from 'prop-types';

export default function Transaction({ props }) {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr className={s.title}>
          <th className={s.titleText}>Type</th>
          <th className={s.titleText}>Amount</th>
          <th className={s.titleText}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.map(({ id, type, amount, currency }) => (
          <tr key={id} className={s.tableBody} >
            <td className={s.tableCell}>{type}</td>
            <td className={s.tableCell}>{amount}</td>
            <td className={s.tableCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
Transaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
