import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Slides = ({slide}) => {
 const [item, setItem] = useState(slide);
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url("${item.imageUrl}")`,
        }}
      >
        <div className="banner-content">
          <h2>{item.title}</h2>
          <h3>{item.subTitle}</h3>
          <p>{item.content}</p>
          <div className="btn-group">
            <button>
              <Link to={item.buttonPrimaryLink}>{item.buttonPrimaryText} </Link>{" "}
            </button>
            <button>
              <Link to={item.buttonSecondaryLink}>
                {item.buttonSecondaryText}{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slides;
