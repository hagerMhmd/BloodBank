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
                    <div className={`col-md-3 col-sm-6 ${style.donatesHover}`}>
                        <Link to='/bloodInfo' className={`text-decoration-none m-0 text-white`}>
                            <img src={icon1} className={`${style.imgSize} py-5 my-2`} alt="" />
                            <h3 className='text-uppercase pb-5 mb-0'>Blood Donor basics </h3>
                        </Link>
                    </div>
                    <div className={`col-md-3 col-sm-6 ${style.donatesHover} `}>
                        <Link to='/about' className={`text-decoration-none m-0 text-white`}>
                            <img src={icon2} className={`${style.imgSize} py-5 my-2`}alt="" />
                            <h3 className='text-uppercase pb-5 mb-0 '>Target Your Type®</h3>
                        </Link>
                    </div>
                    <div className={`col-md-3 col-sm-6 ${style.donatesHover} `}>
                        <Link to='/about' className={`text-decoration-none m-0 text-white`}>
                            <img src={icon3} className={`${style.imgSize3} py-5 my-2`} alt="" />
                            <h3 className='text-uppercase pb-5 mb-0'>Donate <br /> Now </h3>
                        </Link>
                    </div>
                    <div className={`col-md-3 col-sm-6 ${style.donatesHover} `}>
                        <Link to='/about' className={`text-decoration-none m-0 text-white`}>
                            <img src={icon4} className={`${style.imgSize} py-5 my-2`} alt="" />
                            <h3 className='text-uppercase pb-5 mb-0'>host a blood drive</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

















