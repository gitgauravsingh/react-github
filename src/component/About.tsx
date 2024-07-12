import React, { useEffect } from "react";
import Style from "./about.module.scss";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { aboutpage } from "./redux/UserSlice";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const About = () => {
  const dispatch = useAppDispatch();
  const aboutData = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(aboutpage());
  }, [dispatch]);

  return (
    <div className={Style.mainbar}>
      <div className={Style.aboutbar}>
        {aboutData.aboutp &&
          aboutData.aboutp.map((item) => (
            <div className={Style.imgbar}>
              {item.about &&
                item.about.map((aboutItem) => (
                  <img src={aboutItem.img} alt="about" key={aboutItem.id} />
                ))}
            </div>
          ))}
        <div className={Style.about}>
          {aboutData.aboutp &&
            aboutData.aboutp.map((item) => (
              <div className={Style.textabout}>
                {item.about &&
                  item.about.map((aboutItem) => (
                    <h2 key={aboutItem.id}>{aboutItem.title}</h2>
                  ))}
              </div>
            ))}
        </div>
      </div>

      <div className={Style.credobar}>
        {aboutData.aboutp &&
          aboutData.aboutp.map((item) => (
            <React.Fragment>
              <div className={Style.mainimg}>
                <OwlCarousel
                  className={Style.owltheme}
                  loop
                  margin={10}
                  items={1}
                  autoplay
                  dots={false}
                >
                  {item.about &&
                    item.about.map((aboutItem) =>
                      aboutItem.Credo
                        ? aboutItem.Credo.map((credoItem) => (
                            <div className={Style.credodata} key={credoItem.id}>
                              <img src={credoItem.img} alt="credo" />
                              <img src={credoItem.img1} alt="credo" />
                            </div>
                          ))
                        : null
                    )}
                </OwlCarousel>
              </div>
              <div className={Style.textcredo}>
                {item.about &&
                  item.about.map((aboutItem) =>
                    aboutItem.Credo
                      ? aboutItem.Credo.map((credoItem) => (
                          <React.Fragment key={credoItem.id}>
                            <h2>{credoItem.heading}</h2>
                            <p>{credoItem.title}</p>
                            <p>{credoItem.title1}</p>
                            <p>{credoItem.title2}</p>
                            <p>{credoItem.title3}</p>
                          </React.Fragment>
                        ))
                      : null
                  )}
              </div>
            </React.Fragment>
          ))}
      </div>

      <div className={Style.About}>
        <div className={Style.Aboutproject}>
          <div className={Style.Aboutmainpro}>
            <div className={Style.mainproject}>
              {aboutData.aboutp &&
                aboutData.aboutp.map((item) => (
                  <div className={Style.maintext}>
                    {item.about &&
                      item.about.map((aboutItem) =>
                        aboutItem.AboutOurProjects
                          ? aboutItem.AboutOurProjects.map((projectItem) => (
                              <React.Fragment key={projectItem.id}>
                                <h2>{projectItem.heading}</h2>
                                <div className={Style.mainurl}>
                                  <a href={projectItem.text1}>
                                    {projectItem.text1}
                                  </a>
                                  <a href={projectItem.text2}>
                                    {projectItem.text2}
                                  </a>
                                  <a href={projectItem.text3}>
                                    {projectItem.text3}
                                  </a>
                                  <a href={projectItem.text4}>
                                    {projectItem.text4}
                                  </a>
                                  <a href={projectItem.text5}>
                                    {projectItem.text5}
                                  </a>
                                </div>
                              </React.Fragment>
                            ))
                          : null
                      )}
                  </div>
                ))}
            </div>
            <div className={Style.mainimageproject}>
              {aboutData.aboutp &&
                aboutData.aboutp.map((item) => (
                  <React.Fragment>
                    {item.about &&
                      item.about.map((aboutItem) =>
                        aboutItem.AboutOurProjects
                          ? aboutItem.AboutOurProjects.map((projectItem) => (
                              <div className={Style.imagetext}>
                                <div className={Style.dataproject}>
                                  <img src={projectItem.img} alt="project" />
                                  <div className={Style.textmain}>
                                    <h2>{projectItem.title}</h2>
                                    <p>{projectItem.paragraph}</p>
                                  </div>
                                </div>
                                <div className={Style.dataproject}>
                                  <img src={projectItem.img1} alt="project" />
                                  <div className={Style.textmain}>
                                    <h2>{projectItem.title1}</h2>
                                    <p>{projectItem.paragraph1}</p>
                                  </div>
                                </div>
                                <div className={Style.dataproject}>
                                  <img src={projectItem.img2} alt="project" />
                                  <div className={Style.textmain}>
                                    <h2>{projectItem.title2}</h2>
                                    <p>{projectItem.paragraph2}</p>
                                  </div>
                                </div>
                              </div>
                            ))
                          : null
                      )}
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>

        <div className={Style.clientbar}>
          {aboutData.aboutp &&
            aboutData.aboutp.map((item) => (
              <React.Fragment>
                {item.about &&
                  item.about.map((aboutItem) =>
                    aboutItem.client
                      ? aboutItem.client.map((clientItem) => (
                          <img
                            src={clientItem.img2}
                            alt="client"
                            key={clientItem.id}
                          />
                        ))
                      : null
                  )}
              </React.Fragment>
            ))}
          <div className={Style.mainclient}>
            <div className={Style.headbar}>
              {aboutData.aboutp &&
                aboutData.aboutp.map((item) => (
                  <React.Fragment>
                    {item.about &&
                      item.about.map((aboutItem) =>
                        aboutItem.client
                          ? aboutItem.client.map((clientItem) => (
                              <div
                                className={Style.headrbar}
                                key={clientItem.id}
                              >
                                <h2>{clientItem.heading}</h2>
                              </div>
                            ))
                          : null
                      )}
                    <div className={Style.middlebar}>
                      {item.about &&
                        item.about.map((aboutItem) =>
                          aboutItem.client
                            ? aboutItem.client.map((clientItem) => (
                                <div
                                  className={Style.maincro}
                                  key={clientItem.id}
                                >
                                  <OwlCarousel
                                    className={Style.owltheme}
                                    loop
                                    margin={10}
                                    items={1}
                                    autoplay
                                    // nav
                                    // dots={true}
                                  >
                                    <div className={Style.middlebox}>
                                      <img src={clientItem.img} alt="client" />
                                      <div className={Style.maintextbar}>
                                        <p>{clientItem.paragraph}</p>
                                        <span>{clientItem.name}</span>
                                      </div>
                                    </div>
                                    <div className={Style.middlebox}>
                                      <img src={clientItem.img1} alt="client" />
                                      <div className={Style.maintextbar}>
                                        <p>{clientItem.paragraph}</p>
                                        <span>{clientItem.name}</span>
                                      </div>
                                    </div>
                                  </OwlCarousel>
                                </div>
                              ))
                            : null
                        )}
                    </div>
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
