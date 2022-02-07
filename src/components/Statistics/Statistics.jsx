import styles from './Statustics.module.css';

import PropTypes from 'prop-types';

export default function Statistics({ title, props }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {props.map(({ id, label, percentage }) => (
          <li
            className={styles.item}
            style={{ backgroundColor: rondomColor() }}
            key={id}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}</span>
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
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
