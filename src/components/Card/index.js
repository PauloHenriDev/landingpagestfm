import './Card.css';

const Card = ({ icon, title, children }) => {
    return (
      <div className="card">
        <div className="card__header">
          <img src={icon} alt="Icon" />
          <h3>{title}</h3>
        </div>
        <div className="card__text">
          <p>{children}</p>
        </div>
      </div>
    );
  };

export default Card