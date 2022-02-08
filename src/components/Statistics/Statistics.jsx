import S from './Statustics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ title, props }) {
  return (
    <section className={S.statistics}>
      {title && <h2 className={S.title}>{title}</h2>}

      <ul className={S.statList}>
        {props.map(({ id, label, percentage }) => (
          <li
            className={S.item}
            style={{ backgroundColor: rondomColor() }}
            key={id}
          >
            <span className={S.label}>{label}</span>
            <span className={S.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

function rondomColor() {
  return `#${(Math.random().toString(16) + '000000')
    .substring(2, 8)
    .toUpperCase()}`;
}
