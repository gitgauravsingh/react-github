import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { databar } from "./UserSlice";
import { IArticle } from "./Article";

const Apidata = () => {
  const dispatch = useAppDispatch();
  const detail = useAppSelector((state) => state.data);
  console.log(detail);
  useEffect(() => {
    dispatch(databar());
  }, []);

  return (
    <>
      <div>
        {detail.data &&
          detail.data.map((item) => (
            <li>
              {item.header && item.header.map((item) => <h2>{item.title}</h2>)}
            </li>
          ))}
      </div>
    </>
  );
};

export default Apidata;
