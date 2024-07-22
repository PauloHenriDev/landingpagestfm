import Maintitle from '../../../components/Maintitle';

import './STFM.css'

const STFM = () => {
    return (
        <section className="stfm__content">
            <div className="stfm__title">
                <Maintitle className="stfm__text" text="Por qual razão escolher o STFM para melhorar sua saúde?" />
            </div>

            <div className="stfm__box">    
                <div className="stfm__numbers">
                    <h4 className='stfm__number'>+400 <br />LOREM IPSUM</h4>
                </div>
                <div className="stfm__numbers">
                    <h4 className='stfm__number'>+279 <br />LOREM IPSUM</h4>
                </div>
                <div className="stfm__numbers">
                    <h4 className='stfm__number'>+50 <br />LOREM IPSUM</h4>
                </div>
            </div>
        
        </section>
    )
}

export default STFM