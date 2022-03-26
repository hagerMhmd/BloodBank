import React from "react";
import { Link } from "react-router-dom";
import box from "../../Imgs/6127595-01.png";
import style from "./supportUs.module.css";

export default function SuportUs() {
  
  return (
    <>
      <div className={`${style.bg}`}>
        <div className={`container `}>
          <div className=" row ">
            <div className="py-5 col-md-8 col-sm-12 ">
              <p className={`${style.textwidget} fw-bold`}>
                Ways to <br /> Support Us!
              </p>
              <p className="py-3 fw-bold fs-6 text-white">
                We realize that not everyone is able to make regular blood
                donations and that some <br />
                people are not able to donate blood at all. For these reasons,
                we are happy to offer <br />
                alternative ways you can support our mission to help save lives.
              </p>
              <Link
                to="supportbox"
                className="btn btn-light rounded-pill px-5 btn-lg "
              >
              learn more
              </Link>
            </div>
            <div className="col-md-4 hidden-sm py-5 align-self-center ">
              <img className="w-100 align-middle my-auto  " src={box} alt="" />
            </div>
          </div>
        </div>
      </div>




    </>
  );
}
