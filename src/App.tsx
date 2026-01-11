import Landing from "./components/Landing";
import Invitation from "./components/Invitation";
import Location from "./components/Location";
import Footer from "./components/Footer";
// import MeetTheCouple from "./components/MeetTheCouple";
// import Schedule from "./components/Schedule";
import Rsvp from "./components/Rsvp";
import Tba from "./components/Tba";

function App() {
  return (
    <>
      <div className=" font-serif">
        <Landing />
        <Invitation />
        {/* <Schedule /> */}
        <Tba />
        <Location />
        {/* <MeetTheCouple /> */}
        <Rsvp />
        <Footer />
      </div>
    </>
  );
}

export default App;
