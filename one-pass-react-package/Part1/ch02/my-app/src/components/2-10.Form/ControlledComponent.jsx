import React, { useState } from 'react';

const ControlledComponent = () => {
  const [name, setName] = useState('');
  const [essay, setEssay] = useState(
    'Please write an essay about your favorite DOM element.'
  );
  const [flavor, setFlavor] = useState('coconut');

  const handleChange = (event) => {
    const name = event.target.name;

    name === 'name' && setName(event.target.value);
    name === 'essay' && setEssay(event.target.value);
    name === 'flavor' && setFlavor(event.target.value);
    // setName(event.target.value);
  };

  // const handleEssayChange = (event) => {
  //   setEssay(event.target.value);
  // };

  // const handleFlavorChange = (event) => {
  //   setFlavor(event.target.value);
  // };

  const handleSubmit = (event) => {
    alert(`name : ${name}, essay : ${essay}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name :
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay :
        <textarea name="essay" value={essay} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Pick your favorite flavor:
        <select name="flavor" value={flavor} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ControlledComponent;
