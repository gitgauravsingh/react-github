import React, { useEffect } from "react";
import Style from "./theprism.module.scss";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { featers } from "./redux/UserSlice";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Theprism = () => {
  const dispatch = useAppDispatch();
  const feater = useAppSelector((state) => state.data);
  useEffect(() => {
    dispatch(featers());
  }, []);
  return (
    <div className={Style.feturesbar}>
      <div className={Style.wrapper}>
        <div className={Style.featers}>
          {feater.featerbar &&
            feater.featerbar.map((item) => (
              <>
                <div className={Style.mainfeters}>
                  <div className={Style.RESIDENCE}>
                    <div className={Style.resdatabar}>
                      {item.featers &&
                        item.featers.map((item) => <h2>{item.heading2}</h2>)}
                      {item.featers &&
                        item.featers.map((item) => <p>{item.paragraph}</p>)}
                      {item.featers &&
                        item.featers.map((item) => <a href="">{item.KHOW}</a>)}
                    </div>
                  </div>
                  <div className={Style.imgbar}>
                    <div className={Style.imgbox}>
                      {item.featers &&
                        item.featers.map((item) => (
                          <img src={item.img4} alt="" />
                        ))}
                    </div>
                    <div className={Style.roopbar}>
                      <div className={Style.roobmain}>
                        {item.featers &&
                          item.featers.map((item) => <h2>{item.ROOF}</h2>)}
                        {item.featers &&
                          item.featers.map((item) => <p>{item.swimm}</p>)}
                      </div>
                      <div className={Style.roobmain}>
                        {item.featers &&
                          item.featers.map((item) => <h2>{item.gym}</h2>)}
                        {item.featers &&
                          item.featers.map((item) => <p>{item.hel}</p>)}
                      </div>
                      <div className={Style.roobmain}>
                        {item.featers &&
                          item.featers.map((item) => <h2>{item.play}</h2>)}
                        {item.featers &&
                          item.featers.map((item) => <p>{item.for}</p>)}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Theprism;
