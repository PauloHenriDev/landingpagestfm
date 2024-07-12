import './Paragraph.css'

const Paragraph = ({ children, isWhite = false, fontSize = '22px' }) => {
    return (
        <p className="paragraph" style={{ color: isWhite ? 'white' : '#151515', fontSize }}>{children}</p>
    );
}

export default Paragraph