import "./style.css";
import sofa from '../Main/sofa.jpeg'

export default function Main(){
    return(
        
        <main className="Main-containner">
            <img src={sofa} alt=""/>
            <div className="titulo">
                <h3>CODIGO-42404</h3>
                <h1>Sofa Margot || - Rose</h1>
                <h4>R$4.000</h4>
            <div>
                <input type="text" placeholder="ADICIONA A CESTA"/>
             </div>
            </div>
           
        </main>
        
  
    );
}