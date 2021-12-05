import React from 'react';

function UserGreeting(props) {
  return (
    <h1>
      {props.name && `${props.name},`} Welcome{' '}
      {/* && 연산을 통해 반환되는 falsy 표현식이 그대로 반환되어 렌더링 되니 주의할 것 */}
      {/* {props.count && `It's ${props.count} times`} */}
      {props.count ? `It's ${props.count} times` : null}
    </h1>
  );
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  // if (props.isLoggedIn) {
  //   return <UserGreeting name="jimmy" count={0} />;
  // }
  // return <GuestGreeting />;

  return props.isLoggedIn ? (
    <UserGreeting name="jimmy" count={0} />
  ) : (
    <GuestGreeting />
  );
}

const Condition = () => {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Condition;
