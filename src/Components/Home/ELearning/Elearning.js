import React from "react";
import './Elearning.css'
import mmd_discover from '../../Images/mmd_discover.png'
import mmd_list from '../../Images/mmd_list.png'
import mmd_dev from '../../Images/mmd_dev.png'
import mmd_lnch from '../../Images/mmd_lnch.png'
import mmd_compass from '../../Images/mmd_compass.png'
export default function Elearning() {
  return (
    <div>
      <div className=" bg-primary">
        <div class="container ourprocess text-center">
          <h3 className="process-style">L-PROCESS</h3>
          <hr className="hrnew" />
          <div className="row prorowsetting">
            <div className="col-lg-2 col-md-4 col-sm-4 col-10 d-block m-auto">
              <div class="proimgsetting d-block text-white">
                <img src={mmd_discover} className="proimage" />
                <h3>DISCOVER</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-10 d-block m-auto">
              <div class="proimgsetting d-block text-white">
                <img src={mmd_compass} className="proimage" />
                <h3>DESIGN</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-10 d-block m-auto">
              <div class="proimgsetting d-block text-white">
                <img src={mmd_dev} className="proimage" />
                <h3>DEVELOP</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-10 d-block m-auto">
              <div class="proimgsetting d-block text-white">
                <img src={mmd_list} className="proimage" />
                <h3>ANALYZE</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-10 d-block m-auto">
              <div class="proimgsetting d-block text-white">
                <img src={mmd_lnch} className="proimage" />
                <h3>LAUNCH</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
