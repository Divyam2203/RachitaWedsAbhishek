import Landing from "./components/Landing";
import Invitation from "./components/Invitation";
import Location from "./components/Location";
import Footer from "./components/Footer";
import MeetTheCouple from "./components/MeetTheCouple";

function App() {
  return (
    <>
      <div className=" font-serif">
        <Landing />
        <Invitation />
        <MeetTheCouple />
        <Location />
        <Footer />
      </div>
    </>
  );
}

export default App;
