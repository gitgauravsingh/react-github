import React, { useEffect, useState } from "react";
import Style from "./footer.module.scss";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { footerdata } from "./redux/UserSlice";

const Footer = () => {
  const dispatch = useAppDispatch();
  const footerbar = useAppSelector((state) => state.data);
  useEffect(() => {
    dispatch(footerdata());
  }, []);
  const [email, setEmail] = useState("");

  const handleData = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email) {
      alert("Email is required");
      return;
    }
  };
  return (
    <div className={Style.footer}>
      <div className={Style.wrapper}>
        <div className={Style.footerbar}>
          {footerbar.footer &&
            footerbar.footer.map((item) => (
              <>
                <div className={Style.connect}>
                  {item.footer &&
                    item.footer.map((item) => (
                      <>
                        <h2>
                          {item.connect &&
                            item.connect.map((item) => <>{item.title}</>)}
                          <br></br>
                          <span></span>
                        </h2>
                        <h3>
                          {item.connect &&
                            item.connect.map((item) => <>{item.text}</>)}
                        </h3>
                        <p>
                          {item.connect &&
                            item.connect.map((item) => <>{item.paragraph}</>)}
                        </p>
                        <h4>
                          {item.connect &&
                            item.connect.map((item) => <>{item.number}</>)}
                        </h4>
                        <span>
                          {item.connect &&
                            item.connect.map((item) => <>{item.email}</>)}
                        </span>
                      </>
                    ))}
                </div>
                <div className={Style.LatestNews}>
                  {item.footer &&
                    item.footer.map((item) => (
                      <>
                        {item.LATESTNEWS &&
                          item.LATESTNEWS.map((item) => (
                            <h2>
                              {item.main}
                              <br></br>
                              <span></span>
                            </h2>
                          ))}
                        <div className={Style.mainlatest}>
                          <div className={Style.datebar}>
                            {item.LATESTNEWS &&
                              item.LATESTNEWS.map((item) => (
                                <span>{item.date}</span>
                              ))}
                          </div>
                          <div className={Style.datebar1}>
                            {item.LATESTNEWS &&
                              item.LATESTNEWS.map((item) => (
                                <a href="">{item.paragraph1}</a>
                              ))}
                          </div>
                        </div>
                        <div className={Style.mainlatest}>
                          <div className={Style.datebar}>
                            {item.LATESTNEWS &&
                              item.LATESTNEWS.map((item) => (
                                <span>{item.date1}</span>
                              ))}
                          </div>
                          <div className={Style.datebar1}>
                            {item.LATESTNEWS &&
                              item.LATESTNEWS.map((item) => (
                                <a href="">{item.paragraph2}</a>
                              ))}
                          </div>
                        </div>
                        <div className={Style.mainlatest}>
                          <div className={Style.datebar}>
                            {item.LATESTNEWS &&
                              item.LATESTNEWS.map((item) => (
                                <span>{item.date2}</span>
                              ))}
                          </div>
                          <div className={Style.datebar1}>
                            {item.LATESTNEWS &&
                              item.LATESTNEWS.map((item) => (
                                <a href="">{item.paragraph3}</a>
                              ))}
                            <>
                              {item.LATESTNEWS &&
                                item.LATESTNEWS.map((item) => (
                                  <p>{item.comment}</p>
                                ))}
                            </>
                          </div>
                        </div>
                      </>
                    ))}
                </div>
                <div className={Style.signup}>
                  {item.footer &&
                    item.footer.map((item) => (
                      <>
                        {item.SIGNUP &&
                          item.SIGNUP.map((item) => (
                            <h2>
                              {item.heading}
                              <br></br>
                              <span></span>
                            </h2>
                          ))}
                      </>
                    ))}
                  {item.footer &&
                    item.footer.map((item) => (
                      <>
                        {item.SIGNUP &&
                          item.SIGNUP.map((item) => <p>{item.title}</p>)}
                      </>
                    ))}
                  <div className={Style.inputbar}>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        placeholder="Your Email (required) "
                        value={email}
                        onChange={handleData}
                      />

                      <div className={Style.signbutton}>
                        {item.footer &&
                          item.footer.map((item) => (
                            <>
                              {item.SIGNUP &&
                                item.SIGNUP.map((item) => (
                                  <button type="submit">{item.sign}</button>
                                ))}
                            </>
                          ))}
                      </div>
                    </form>
                  </div>
                </div>
              </>
            ))}
        </div>
        <div className={Style.dowmfooter}>
          <div className={Style.ptext}>
            <p>
              About Us | Contact Us | Career | Privacy Policy | Terms &
              Conditions | Cookie Policy<br></br>
              Copyright 2022 © CREDO INVESTMENTS FZE
            </p>
          </div>
          <div className={Style.iconbar}>
            <p>Follow Us</p>
            <div className={Style.first}>
              <a href="">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
            <div className={Style.second}>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className={Style.third}>
              <a href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className={Style.fourth}>
              <a href="">
                <i className="fa-brands fa-pinterest"></i>
              </a>
            </div>
            <div className={Style.five}>
              <a href="">
                <i className="fa-brands fa-invision"></i>
              </a>
            </div>
            <div className={Style.six}>
              <a href="">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
