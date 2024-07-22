import ImageFull from '../../../assets/img/bgCircleGirl.svg';
import Maintitle from '../../../components/Maintitle';
import Paragraph from '../../../components/Paragraph';
import Button from '../../../components/Button/index.js';

import './Hero.css'


const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__text">
                <Maintitle text="O caminho para uma vida saudável começa agora" isWhite />
                <Paragraph isWhite>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos delectus tempore ipsam accusamus distinctio quae eius porro et quaerat, veritatis eveniet, deleniti voluptatibus explicabo, commodi id. Ratione, ipsum similique!</Paragraph>
                <div className="hero__buttons">
                    <Button text="Saiba Mais" />
                    <Button text="Veja um vídeo" />
                </div>
                <img className="hero__imagefull" src={ImageFull} alt="" />
            </div>
        </section>
    )
}

export default Hero