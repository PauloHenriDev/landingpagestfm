import '../assets/style/Button.css';

// Revisar essa parte pq acho que da para fazer sendo function e sem o Onclick
const Button = ({texto, onClick}) => {
    return(
        <button onClick={onClick}>
            {texto}
        </button>
    )
}

export default Button