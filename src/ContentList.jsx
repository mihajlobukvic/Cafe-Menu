import Card from "./Card";
import { MENU_ITEMS } from "./Components";

export default function ContentList({vrijednostDugmeta}) {
  console.log(vrijednostDugmeta);
  return (
    <>
      {MENU_ITEMS.map((item) => {
         if(item.category===vrijednostDugmeta) {
          return( <Card className="menu-list"
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
        />)
        }   
        return null;  
      }
      )}
    </>
  );
}
