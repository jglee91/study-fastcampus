import React, { useRef } from 'react';

const UncontrolledComponent = () => {
  const fileInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected file - ${fileInputRef.current.files[0].name}`);
    console.log(fileInputRef);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInputRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledComponent;
