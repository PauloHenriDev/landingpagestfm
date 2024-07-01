import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button/index.js';
import Card from '../../components/Card/index.js'

import BgImgUnion from '../../assets/img/group-people.png';
import Logo from '../../assets/img/logo.png';
import ImageFull from '../../assets/img/bgCircleGirl.svg';
import FoodImg from '../../assets/img/food_img.svg';
import GymImg from '../../assets/img/gym_img.svg';
import WeightImg from '../../assets/img/weight_img.svg'
import CardIcon from '../../assets/img/cards_icons.svg'

import './Home.css';

const Home = () => {
    return (
        <>
            <header className="header">
                <a href="a"><img src={Logo} alt="logo da STFM" /></a>
                <nav className="navigation">
                    <a href="a">Home</a>
                    <a href="a">Sobre</a>
                    <a href="a">Serviços</a>
                    <a href="a">Blog</a>
                    <a href="a">Localização</a>
                </nav>
                <Button className="button-header" text="Comece já" />
            </header>
            <section className="hero">
                <div className="hero__text">
                    <Title text="O caminho para uma vida saudável começa agora" isWhite />
                    <Paragraph isWhite>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos delectus tempore ipsam accusamus distinctio quae eius porro et quaerat, veritatis eveniet, deleniti voluptatibus explicabo, commodi id. Ratione, ipsum similique!</Paragraph>
                    <div className="hero__buttons">
                        <Button text="Saiba Mais" />
                        <Button text="Veja um vídeo" />
                    </div>
                        <img className="hero__imagefull" src={ImageFull} alt="" />
                </div>
            </section>

            <section className="recommendation">
                <div className="recommendation__content">
                    <img className="recommendation__image" src={BgImgUnion} alt="" />
                    <div className="recommendation__texts">
                        <Title text="Para quem é recomendado nosso programa " />
                        <Paragraph>Assim como a saúde é para todos nossos programas também são....sam accusamus distinctio quae eius porro et quaerat, vesam accusamus distinctio quae eius porro et quaerat, ve</Paragraph>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos delectus tempore ipsam accusamus distinctio quae eius porro et quaerat, verit</Paragraph>
                    </div>
                </div>
            </section>

            <section className="doubts">
                <div className="doubts__content">
                    <div className="doubts__texts">
                        <Title text="Como funciona o programa STFM?" isWhite />
                        <Paragraph isWhite>Assim como a saúde é para todos nossos programas também são....sam accusamus distinctio quae eius porro et quaerat, vesam accusamus distinctio quae eius porro et quaerat, ve</Paragraph>
                        <Paragraph isWhite>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos delectus tempore ipsam accusamus distinctio quae eius porro et quaerat, verit</Paragraph>
                    </div>
                </div>
            </section>

            <section className="stfm__content">
                <div className="teste2">
                    <Title className="teste" text="Por qual razão escolher o STFM para melhorar sua saúde?" />
                </div>

                <div>    
                    <div className="stfm__numbers">
                        <Paragraph>+400 LOREM IPSUM</Paragraph>
                    </div>
                    <div className="stfm__numbers">
                        <Paragraph>+279 LOREM IPSUM</Paragraph>
                    </div>
                    <div className="stfm__numbers">
                        <Paragraph>+50 LOREM IPSUM</Paragraph>
                    </div>
                </div>
                
                {/* <div>
                    <Paragraph>+90<br /> vidas mudadas</Paragraph>
                </div> */}
            </section>

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

            <section className="difference__content">
                <Card icon={CardIcon} title="teste">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos delectus tempore ipsam.</Card>
            </section>
        </>
    )
}

export default Home