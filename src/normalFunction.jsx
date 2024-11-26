// react component name shpuld alwAYS START W CAPTITAL LETER

// function myComponent() {
//   return "<div>  </div>";
// }

const Welcome = (props) => {
  const variable1 = 100;
  const variable2 = 3000;

  //   const title = props.title;
  //   const name = props.name;

  const { title, name } = props;

  const addFunction = (a, b) => {
    return a + b;
  };

  return (
    <h1>
      <div>{title}</div>
      <div>{name}</div>

      {/* {variable1 + variable2}
      {variable2}
      {addFunction(variable1, variable2)}
      <div> Welcome to my coding space </div>
      <div> Im learning react today</div> */}
    </h1>
  );
};

export default Welcome;
