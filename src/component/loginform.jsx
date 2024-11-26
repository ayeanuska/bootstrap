import "../login.css";

const LoginForm = () => {
  const styleobject = {
    backgroundColor: "green",
  };

  return (
    <>
      <div className="login" style={styleobject}>
        <form method="get" action="/">
          <input type="email" placeholder="example@gmail.com" />
          <input type="text" placeholder="password" />
          <button> Submit </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
