import Menu from "./Menu";

export default function Buttons({pozivanjeIspisa}) {
  return (
    <div className="dugmad">
      <Menu onSelect={() => pozivanjeIspisa('Coffee')}>Coffee</Menu>
      <Menu onSelect={() =>pozivanjeIspisa('Tea')}>Tea</Menu>
      <Menu onSelect={() => pozivanjeIspisa('Pastries')}>Pastries</Menu>
    </div>
  );
}
