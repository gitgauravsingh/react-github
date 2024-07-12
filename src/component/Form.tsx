import React, { useState } from "react";
import Style from "./form.module.scss";
import Image from "../img/Flag_of_India.png";

interface IHide {
  handelclick: any;
}

const Form: React.FC<IHide> = ({ handelclick }) => {
  return (
    <>
      <div className={Style.overlaybar}>
        <div className={Style.overlay}>
          <h2>INQUIRE NOW!</h2>
          <form>
            <div className={Style.inputbar}>
              <label>Name*:</label>
              <br />
              <input type="text" placeholder="Name" />
            </div>
            <div className={Style.inputbar}>
              <label>E-Mail*:</label>
              <br />
              <input type="email" placeholder="Email" />
            </div>
            <div className={Style.inputbar1}>
              <label>Mobile Number*:</label>
              <br />
              <input type="tel" placeholder="+91" />
              <div className={Style.imagebar}>
                <img src={Image} alt="Flag" />
              </div>
            </div>
            <div className={Style.inputbar2}>
              <label>Select Subject*:</label>
              <br />
              <select>
                <option>-Please choose an option-</option>
                <option>Data_Type</option>
                <option>Development</option>
                <option>Option</option>
                <option>Full-Stack</option>
              </select>
            </div>
            <div className={Style.buttonbar}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className={Style.crossbar} onClick={handelclick}>
        X
      </div>
    </>
  );
};

export default Form;
