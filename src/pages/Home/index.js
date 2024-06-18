import Title from "../../components/Title"
import Paragraph from "../../components/Paragraph"
import BgImgUnion from '../../assets/img/group-people.png';
import Button from '../../components/Button/index.js'
import Logo from '../../assets/img/logo.png';
import './Home.css';
import ImageFull from "../../assets/img/bgCircleGirl.svg"

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
                <Title text="Por qual razão escolher o STFM?" />
                <div>
                    <Paragraph>+90<br /> vidas mudadas</Paragraph>
                </div>
            </section>
        </>
    )
}

export default Home