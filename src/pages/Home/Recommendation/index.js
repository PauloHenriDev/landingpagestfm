import BgImgUnion from '../../../assets/img/group-people.png';
import Paragraph from '../../../components/Paragraph';
import Title from '../../../components/Title';

import './Recommendation.css'

const Recommendation = () => {
    return (
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
    )
}

export default Recommendation