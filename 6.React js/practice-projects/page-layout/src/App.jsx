import Layout from "./Components/Layout";

const App = () => {
  return (
    <div>
    {/* homepage */}
      <Layout tittle="welcome page">
        <h1>Welcome to Javascript</h1>
        <p>This ia a basic react layout using reusable components.</p>
        <p>you can use this layout for any kind of web applications.</p>
      </Layout>

      {/* services */}
      <Layout>
        <h2>Our Services</h2>
        <hr />
        <ul>
          <li>web Development</li>
          <li>UI/UX Designer</li>
          <li>Mobile app solution</li>
        </ul>
      </Layout>
    </div>
  );
};

export default App;

//! ====What are hooks in React?=====
//.functional 2. class based component
//! ======hook types=====
//1.useState
// useEffect
// useContext
// useRef
// useReducer
