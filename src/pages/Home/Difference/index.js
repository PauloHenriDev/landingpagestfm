import Maintitle from '../../../components/Maintitle';
import Card from '../../../components/Card';
import CardIcon from '../../../assets/img/cards_icons.svg';

import './Difference.css'

const Difference = () => {
    return (
        <section className="difference__content">
            <div className="difference__title">
                <Maintitle text='O que diferencia o STFM dos demais' />
            </div>
            <div className="card__content">
                <Card icon={CardIcon} title="Lorem ipsum dolor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos delectus tempore ipsam.</Card>
                <Card icon={CardIcon} title="Lorem ipsum dolor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos delectus tempore ipsam.</Card>
                <Card icon={CardIcon} title="Lorem ipsum dolor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos delectus tempore ipsam.</Card>
                <Card icon={CardIcon} title="Lorem ipsum dolor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos delectus tempore ipsam.</Card>
                <Card icon={CardIcon} title="Lorem ipsum dolor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos delectus tempore ipsam.</Card>
                <Card icon={CardIcon} title="Lorem ipsum dolor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos delectus tempore ipsam.</Card>
            </div>
        </section>
    )
}

export default Difference