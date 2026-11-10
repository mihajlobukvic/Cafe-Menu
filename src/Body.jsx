import { useState } from "react";
import Buttons from "./Buttons";
import ContentList from "./ContentList";


export default function Body(){
    const [selectedButton, setSelectedButton] = useState(null);

    function Ispis(vrijednost){
        setSelectedButton(vrijednost);
    }
     
    return(
        <div>
            <Buttons
            pozivanjeIspisa={Ispis}
            />
            <ContentList vrijednostDugmeta={selectedButton}/>
            
        </div>
    );
}