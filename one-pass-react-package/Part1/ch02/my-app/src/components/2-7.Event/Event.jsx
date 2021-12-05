import React from 'react';

const Event = () => {
  const handleButtonClick = (e) => {
    // console.dir(e);
    console.log('handleButtonClick');
  };
  const handleMouseLeave = (e) => {
    // react synthetic 이벤트는 mouseLeave이지만,
    // native 이벤트는 mouseout이다.
    console.dir(e);
  };
  const handleClickCapture = () => {
    console.log('handleClickCapture');
  };
  const handleClickCapture2 = () => {
    console.log('handleClickCapture2');
  };
  const handleClickBubble = () => {
    console.log('handleClickBubble');
  };

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>
          Button
        </button>
      </div>
    </div>
  );
};

export default Event;
