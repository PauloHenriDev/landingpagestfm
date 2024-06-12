import './Title.css'

const Title = ({ text = 'titulo', isWhite = false }) => {
    return (
        <h3 className="title" style={{ color: isWhite ? 'white' : '#151515' }}>{text}</h3>
    )      
}

export default Title