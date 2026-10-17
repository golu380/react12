import "./Button.css"
function Button({children, type="primary", onclick}){

    return (
        <button className={`custom-button ${type}`} onClick={onclick} >
            {children}
        </button>
    )
}

export default Button;