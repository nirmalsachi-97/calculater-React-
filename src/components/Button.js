import "./Button.css";

const Button =({symbols,color,handleClick }) => {
    return(
        <div 
        onClick={() => handleClick(symbols)}
        className="butten-wrapper" style={{backgroundColor:color}}>
            {symbols}</div>
        )
};
export default Button;