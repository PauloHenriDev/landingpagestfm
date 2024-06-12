import Title from "../../components/Title"
import Paragraph from "../../components/Paragraph"
import BgImgUnion from '../../assets/img/group-people.png';
import Button from '../../components/Button/index.js'

import './Home.css'

const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="hero__text">
                    <Title text="O caminho para uma vida saudável começa agora" isWhite />
                    <Paragraph isWhite>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos delectus tempore ipsam accusamus distinctio quae eius porro et quaerat, veritatis eveniet, deleniti voluptatibus explicabo, commodi id. Ratione, ipsum similique!</Paragraph>
                    <div className="hero__buttons">
                        <Button text="Saiba Mais" />
                        <Button text="Veja um vídeo" />
                    </div>
                </div>
            </section>

            <section className="recommendation">
                <div className="recommendation__content">
                    <img className="recommendation__image" src={BgImgUnion} alt="" />
                    <div className="recommendation__texts">
                        <Title text="Como funciona o programa STFM?" />
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
            </section>
        </>
    )
}

export default Home