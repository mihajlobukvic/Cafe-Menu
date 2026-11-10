export default function Menu({children, onSelect}){
    return(
        <li className="lista">
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}