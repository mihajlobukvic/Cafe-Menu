export default function Card({id, image, name, description, price}) {
  return (
    <div className="tab-content">
      <img src={image} alt={name} width="150" />
      <h3>{name}</h3>
      <p>{description}</p>
      <span>${price}</span>
    </div>
  );
}
