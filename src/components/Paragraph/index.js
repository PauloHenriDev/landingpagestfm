import './Paragraph.css'

const Paragraph = ({ children, isWhite = false }) => {
    return (
        <p className="paragraph" style={{ color: isWhite ? 'white' : '#151515' }}>{children}</p>
    )
}

export default Paragraph