export default function Statistics({title, props }) {
  return (
    <section className="statistics">
        {title && (<h2 className="title">{title}</h2>)}
      
      <ul className="stat-list">
        {props.map(prop => (
          <li className="item" key={prop.id}>
            <span className="label">{prop.label}</span>
            <span className="percentage">{prop.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
