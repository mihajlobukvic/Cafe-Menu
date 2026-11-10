import logoImg from './logokafica.png';
import Header from './Header';
import Body from './Body';

function App(){
    return(
        <>
            <Header 
            title="Café name" 
            description="A one-line tagline" 
            image={logoImg}/>
            <Body/>
        </> 
    );
}

export default App;