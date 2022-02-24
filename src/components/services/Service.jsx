export const Service = ({ service, onClickButton = () => {alert(service.name)}}) => {
  return (
    <li style={{ margin: 40, display: "flex", flexDirection: "column" }}>
      <div>
        <b>Servicio:</b>
        <p>{service.name}</p>
      </div>
      <div>
        <b>Prestador: </b>
        <p>{service.worker.name}</p>
      </div>
      <button onClick={onClickButton}>Ver detalles</button>
    </li>
  );
};
