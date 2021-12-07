import React from 'react';

const List = () => {
  // const numbers = [1,2,3,4,5]
  // return (
  //   <ul>
  //     {numbers.map((item) => (
  //       <li key={item.toString()}>{item}</li>
  //     ))}
  //   </ul>
  // )
  const todos = [
    { id: 1, text: 'Drink Water' },
    { id: 2, text: 'Wash Car' },
    { id: 3, text: 'Listen Lecture' },
    { id: 4, text: 'Go to bed' },
  ];

  const Item = (props) => {
    return (
      <li>
        {/* `key` is not a prop */}
        {/* {props.key}  */}
        {props.text}
      </li>
    );
  };

  const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);

  return <>{todoList}</>;
};

export default List;
