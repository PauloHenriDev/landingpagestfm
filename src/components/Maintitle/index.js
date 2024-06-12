import './Maintitle.css';

function Maintitle({text = 'main title', isWhite = false}) {
    return(
        <h2 className="maintitle" style={{color: isWhite ? 'white' : '#151515'}}>{text}</h2>
    )
}

export default Maintitle