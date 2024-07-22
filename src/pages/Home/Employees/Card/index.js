import './Card.css';

const Card = ({ icon, name }) => {
    return (
        <div className='employees__card'>
            <img src={icon} alt='' />
            <h1>{name}</h1>
        </div>
    )
}

export default Card;