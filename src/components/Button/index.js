import './Button.css';

// Revisar essa parte pq acho que da para fazer sendo function e sem o Onclick
const Button = ({ text, onClick }) => {
    return(
        <button className="button" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button