import "./style.css";
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import Icon_pesquisa_light from '../../assets/search-w.png'
import Icon_pesquisa_dark from '../../assets/search-b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'
import logo_abc from '../../assets/Designer.jpeg'



export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar">
      <img src={logo_light} alt="" className="Icon"/>
       {/*<div className="navbar-logo">logo</div>*/}
        <ul className="navbar-links">
          <li>
            <a href="#Nekumbi">NEKUMBI</a>
          </li>
          <li>
            <a href="#Manuel">MANUEL</a>
          </li>
          <li>
            <a href="#React">EVORA</a>
          </li>
        </ul>
        <div className="caixa_pesquisa">
          <input type="text" placeholder="Pesquisa"/>
          <img src={Icon_pesquisa_light} alt=""/>
        </div>
        <img src={toogle_light} alt="" className="togle-icon"/>
      </div>
    </nav>
  );
}
