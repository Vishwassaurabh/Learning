import Card from "./Components/Card";
import DonationButton from "./Components/DonationButton";
import Greeting from "./Components/Greeting";

function App() {
  const donatefn = () => {
    alert("Thank you for Donating");
  };
  return (
    <>
      <Greeting name="John" message="Good Morning" age="20 years" />
      <Greeting name="Agnes" message="Good Afternoon" age="25 years" />
      <DonationButton onDonate={donatefn} />
      <App />
    </>
  );
}

export default App;
