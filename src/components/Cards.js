import React, { useState } from "react";

const Cards = ({ id, name, price, info, image ,removeTour}) => {
  const [readMore, setReadMore] = useState(false);
  const descriptions = readMore ? info : `${info.substring(0, 200)}....`;

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="card">
        <img src={image} alt={name} className="image" />
        <div className="tour-info">
            <div className="tour-details">
                <h4 className="tour-price">Price: {price}</h4>
                <h4 className="tour-name">Place: {name}</h4>
            </div>
            <div className="descriptions">
                {descriptions}
                <span className='read-more' onClick={readMoreHandler}>
                    {readMore ? "Show less" : "Read more"}
                </span>
            </div>
        </div>
        <button className='btn-red' onClick={() => removeTour(id)}>
            Not Interested
        </button>
    </div>
  );
};

export default Cards;
