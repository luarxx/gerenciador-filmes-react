import "../topbanner/topbannerstyle.css"
import LogoDoSite from "./imgs/logo.png"

export function Topbanner() {
    return (
        <div className="topbanner">
            <img src={LogoDoSite} alt="Logo do site" />
            <center >GERENCIADOR DE FILMES</center>
        </div>
    )

}