import React, { useEffect, useState } from "react";
import Style from "./header.module.scss";
import Imglogo from "../img/logo.png";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { databar, searchdata } from "./redux/UserSlice";
import Form from "./Form";
import Img from "../img/banner.jpg";
import StickyBox from "react-sticky-box";

const Header = () => {
  const dispatch = useAppDispatch();
  const detailbar = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(databar());
    dispatch(searchdata());
  }, [dispatch]);

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    setQuery(true);
  };

  const handleItemClick = (title: any) => {
    setSearch(title);
    setQuery(false);
  };

  const filteredData = detailbar.search?.products.filter(
    (item) =>
      item.title && item.title.toLowerCase().includes(search.toLowerCase())
  );

  const navOpen = () => {
    const sidebaropen = document.getElementById("slider");
    const open = document.getElementById("slideOpen");
    const close = document.getElementById("closeslider");
    if (sidebaropen && open && close) {
      sidebaropen.style.width = "270px";
      open.style.display = "none";
      close.style.display = "block";
    }
  };

  const closeNav = () => {
    const sidebaropen = document.getElementById("slider");
    const open = document.getElementById("slideOpen");
    const close = document.getElementById("closeslider");
    if (sidebaropen && open && close) {
      sidebaropen.style.width = "0";
      open.style.display = "block";
      close.style.display = "none";
    }
  };

  const showDiv = () => {
    setOverlay(true);
    document.body.style.overflow = "hidden";
  };

  const handleoverlay = () => {
    setOverlay(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div className={Style.headerbar}>
        <div className={Style.bannerimg}>
          <img src={Img} alt="" />
        </div>
        {overlay && (
          <div className={Style.overlaybox} id={Style.overlay}>
            <Form handelclick={handleoverlay} />
          </div>
        )}
        <StickyBox>
          <div className={Style.mainnav}>
            <div className={Style.mainhead}>
              <div
                className={Style.responsibe}
                id="slideOpen"
                onClick={navOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={Style.logo}>
                <img src={Imglogo} alt="Logo" />
              </div>
              <div className={Style.navbar}>
                <ul>
                  {detailbar.data &&
                    detailbar.data.map((item) => (
                      <>
                        {item.header &&
                          item.header.map((headerItem) => (
                            <li key={headerItem.title}>
                              <a href="#">
                                {headerItem.title}
                                <i className="fa-solid fa-angle-down"></i>
                              </a>
                            </li>
                          ))}
                      </>
                    ))}
                </ul>
              </div>
              <div
                className={Style.crossbar}
                id="closeslider"
                onClick={closeNav}
                style={{ display: "none" }}
              >
                <span>X</span>
              </div>
              <div className={Style.mainheadres} id="slider">
                <div className={Style.searchbardata}>
                  <input type="search" placeholder="Search" />
                </div>
                <div className={Style.homebar}>
                  <ul>
                    {detailbar.data &&
                      detailbar.data.map((item) => (
                        <>
                          {item.header &&
                            item.header.map((headerItem) => (
                              <li key={headerItem.title}>
                                <a href="#">
                                  {headerItem.title}
                                  <i className="fa-solid fa-angle-down"></i>
                                </a>
                              </li>
                            ))}
                        </>
                      ))}
                  </ul>
                </div>
              </div>
              <div className={Style.iconbar}>
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div className={Style.inquery} onClick={showDiv}>
                <a href="#/">INQUIRE NOW</a>
                <div className={Style.emailbar}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
              </div>
              <div className={Style.searchbar}>
                <div className={Style.searchvalue}>
                  <input
                    type="search"
                    placeholder="Search"
                    value={search}
                    onChange={handleChange}
                  />
                  <div className={Style.mainserch}>
                    {query && (
                      <ul>
                        {filteredData &&
                          filteredData.map((item) => (
                            <li
                              key={item.id}
                              onClick={() => handleItemClick(item.title)}
                            >
                              <a href={`/product/${item.id}`}>{item.title}</a>
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className={Style.search}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
          </div>
        </StickyBox>
        <div className={Style.maintext}>
          <div className={Style.textbar}>
            <h2>CREDO INVESTMENTS FZE</h2>
            <p>Your search for the luxury home in Dubai ends here.</p>
            <div className={Style.knowbar}>
              <a href="/about">KNOW MORE</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
