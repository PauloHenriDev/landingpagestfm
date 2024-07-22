import Maintitle from '../../../components/Maintitle';
import PauloIcon from '../../../assets/img/paulo_img.svg';

import Card from './Card';


import './Employees.css'

const Employees = () => {
    return (
        <section className="employees__content">
            <Maintitle text='Conheça os profissionais por trás da sua mudança de vida' />
            <div className='employees__block'>
                <div className='employees__row'>
                    <Card icon={PauloIcon} name='Paulo' />
                    <Card icon={PauloIcon} name='Nome' />
                    <Card icon={PauloIcon} name='Nome' />
                </div>

                <div className='employees__row'>
                    <Card icon={PauloIcon} name='Nome' />
                    <Card icon={PauloIcon} name='Nome' />
                    <Card icon={PauloIcon} name='Nome' />
                </div>
            </div>
        </section>
    )
}

export default Employees