export default function Header(props){
    return(
        <div className="Zaglavlje">
            <header>
            <img src={props.image} alt={props.title}/>
            <div className="tekst">
            <h1>{props.title}</h1>
            <p className="opis">{props.description}</p>
            </div>
        </header>
        </div>
       
    );
}