import React from 'react';

const Skeleton = () => {
  return (
    <div className="skeleton__wrapper">
      {[1, 2, 3].map((ele) => (
        <div className="skeleton__container" key={ele}>
          <div className="skeleton__title"></div>
          <div className="skeleton__container_1">
            <div className="skeleton__title_1"></div>
            <div className="skeleton__value_1"></div>
          </div>
          <div className="skeleton__container_1">
            <div className="skeleton__title_2"></div>
            <div className="skeleton__value_2"></div>
          </div>
          <div className="skeleton__container_1">
            <div className="skeleton__title_3"></div>
            <div className="skeleton__value_3"></div>
          </div>
          <div className="shrimmer"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
