import React, { useEffect } from "react";
import Style from "./banner.module.scss";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { bannerdata } from "./redux/UserSlice";

const Banner = () => {
  const dispatch = useAppDispatch();
  const bannerdetail = useAppSelector((state) => state.data);
  useEffect(() => {
    dispatch(bannerdata());
  }, []);
  return (
    <div className={Style.bannerbar}>
      <div className={Style.wrapper}>
        <div className={Style.textbar}>
          {bannerdetail.banner &&
            bannerdetail.banner.map((item) => (
              <>
                <div className={Style.hrading}>
                  {item.banner &&
                    item.banner.map((item) => <h2>{item.heading}</h2>)}
                </div>
                <div className={Style.paragraph}>
                  {item.banner &&
                    item.banner.map((item) => <p>{item.title}</p>)}
                </div>
                <div className={Style.readmore}>
                  {item.banner &&
                    item.banner.map((item) => (
                      <a href="">
                        {item.read} <i className="fa-solid fa-angle-right"></i>
                      </a>
                    ))}
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
