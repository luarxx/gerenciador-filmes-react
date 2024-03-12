import "./mainbodystyle.css"

export function Mainbody(props) { // props serve para passar parâmetros para o componente filho
    return (
        <div className="mainbody">
            {props.children} 
        </div>
    ) // props.children serve para renderizar o componente filho (Menu) dentro do componente pai (Mainbody)

}