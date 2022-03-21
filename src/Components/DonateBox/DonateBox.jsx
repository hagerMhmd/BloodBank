import { Link } from 'react-router-dom'
import style from './DonateBox.module.css'
import icon1 from '../../Imgs/icon-01.png'
import icon2 from '../../Imgs/icon-02.png'
import icon3 from '../../Imgs/icon-03.png'
import icon4 from '../../Imgs/icon-04.png'

export default function DonateBox() {
    return <>
        <div className={`${style.donateColor}`}>
            <div className="container text-white text-center">
                <div className="row">
                    <div className={`col-md-3 ${style.donatesHover} `}>
                        <Link to='/about' className={`text-decoration-none m-0 text-white`}>
                            <img src={icon1} className='py-5 my-2' alt="" />
                            <h1 className='text-uppercase pb-5 mb-0'>Blood Donor basics </h1>
                        </Link>
                    </div>
                    <div className={`col-md-3 ${style.donatesHover} `}>
                        <Link to='/about' className={`text-decoration-none m-0 text-white`}>
                            <img src={icon2} className='py-5' alt="" />
                            <h1 className='text-uppercase pb-5 mb-0 '>Target Your Type®</h1>
                        </Link>
                    </div>
                    <div className={`col-md-3 ${style.donatesHover} `}>
                        <Link to='/about' className={`text-decoration-none m-0 text-white`}>
                            <img src={icon3} className='py-5' alt="" />
                            <h1 className='text-uppercase pb-5 mb-0'>Donate <br /> Now </h1>
                        </Link>
                    </div>
                    <div className={`col-md-3 ${style.donatesHover} `}>
                        <Link to='/about' className={`text-decoration-none m-0 text-white`}>
                            <img src={icon4} className='py-5' alt="" />
                            <h1 className='text-uppercase pb-5 mb-0'>host a blood drive</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

















