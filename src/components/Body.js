import '../assets/style/Body.css';
import BgImgCircle from '../assets/img/bgCircle.png';
import BgImgGirl from '../assets/img/bgGirl.png';
import Button from '../components/Button';
import BgImgUnion from '../assets/img/bgUnion.png';
import ImgPeople from '../assets/img/groupPeople.png';

export default function Body() {
    return(
        <>
            <body className="body">
                <section className="main-content">    
                    <div className="main-text">
                        <h1>O caminho para uma vida saudável começa agora</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos delectus tempore ipsam accusamus distinctio quae eius porro et quaerat, veritatis eveniet, deleniti voluptatibus explicabo, commodi id. Ratione, ipsum similique!</p>
                        <div className="main-button">
                            <Button texto="Saiba Mais"></Button>
                            <Button texto="Veja um vídeo"></Button>
                        </div>
                    </div>
                    <div className="divImg">
                        <img className="imgCircle" src={BgImgCircle} alt="" />
                        <img className="imgGirl" src={BgImgGirl} alt="Imagem de uma garota com uma refeição saudável" />
                    </div>
                </section>
                <section className="recommendation-content">
                    <div className="recommendation-img">
                        <img className="imgUnion" src={BgImgUnion} alt="" />
                        <img className="imgPeople" src={ImgPeople} alt="" />
                    </div>
                    <div className="recommendation-text">
                        <div>
                            <h1>Para quem é recomendado nosso programa</h1>
                            <p>Assim como a saúde é para todos nossos programas também são....sam accusamus distinctio quae eius porro et quaerat, vesam accusamus distinctio quae eius porro et quaerat, ve</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos delectus tempore ipsam accusamus distinctio quae eius porro et quaerat, verit</p>
                        </div>
                    </div>
                </section>
                <section className="doubt-content">
                    <div className="doubt-text">
                        <h1>Como funciona o programa STFM?</h1>
                        <p>Assim como a saúde é para todos nossos programas também são....sam accusamus distinctio quae eius porro et quaerat, vesam accusamus distinctio quae eius porro et quaerat, ve</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos delectus tempore ipsam accusamus distinctio quae eius porro et quaerat, verit</p>
                    </div>
                </section>
                <section className="choice-content">
                    <div className="choice-text">
                        <div className="choice-title">
                            <h1>Por qual razão escolher o STFM?</h1>
                        </div>
                        <div className="choice-lifes">
                            <p>+90 <br /> vidas mudadas</p>
                        </div>
                    </div>
                </section>
            </body>
        </>
    )
    
}