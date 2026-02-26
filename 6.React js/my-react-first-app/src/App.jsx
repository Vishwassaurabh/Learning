const App = () => {
  //!Example 1: basic jsx with variables
  const name = "React Learner";
  const greeting = "welcome to jsx";
  //! example 2: jsx with expressions
  const num1 = 10;
  const num2 = 5;
  //! Example 3: JSX with conditional rendering
  const isLoggedIn = true;
  //! Example 4: JSX with lists
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  return (
    <div>
      <h1>JSX Example</h1>

      {/*!Example 1: Basic jsx with variables*/}
      <section>
        <h2>1.Basic jsx with variables</h2>
        {greeting}, {name}
        <p>
          JSX lets you insert javascript expression inside curly braces{"{}"}
        </p>
      </section>

      {/*!Example 2: jsx with expressions*/}
      <section>
        <h2>JSX with Expressions</h2>
        {num1} + {num2} ={num1 + num2}
      </section>

      {/*!Example 3: JSX with conditional rendering*/}
      <section>
        <h2>JSX with conditional rendering</h2>
        <p>
          {isLoggedIn ? (
            <span>Welcome back!</span>
          ) : (
            <span>Please login again</span>
          )}
        </p>
      </section>

      {/*!Example 4: JSX with list */}
      <section>
        <h1>SX with lists</h1>
        <ul>
          {fruits.map((fruit,index) => {
            return <li key={index}>{fruit}</li>;
          })}
        </ul>
      </section>
    </div>
  );
};

export default App;
