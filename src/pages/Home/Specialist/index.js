import Paragraph from '../../../components/Paragraph';
import Title from '../../../components/Title';
import FoodImg from '../../../assets/img/food_img.svg';


import './Specialist.css'

const Specialist = () => {
    return (
        <section className="specialist__content">
                
            <div className="specialist__box">
                <div className="specialist__imgs">
                    <img className="specialist__img" src={FoodImg} alt="" />
                    <Paragraph isWhite>Dieta<br /> balanceada</Paragraph>
                </div>
                <div className="specialist__imgs">
                    <img className="specialist__img" src={FoodImg} alt="" />
                    <Paragraph isWhite>Plano<br /> de exercícios</Paragraph>
                </div>
                <div className="specialist__imgs">
                    <img className="specialist__img" src={FoodImg} alt="" />
                    <Paragraph isWhite>Perda de peso<br /> e medidas</Paragraph>
                </div>
            </div>
            
            <div className="specialist__text">
                <Title text='Nos especializamos em você' isWhite />
                <Paragraph isWhite >Nossos especialistas utilizam todo o conhecimento da área para se especializar em você.....</Paragraph>
                <Paragraph isWhite >Com a especialização em você montamos o circuito para uma vida melhor que é baseado em ....</Paragraph>
            </div>
    </section>

    )
}

export default Specialist