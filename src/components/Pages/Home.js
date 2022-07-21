import "./Home.css";
import { Link } from "react-router-dom";
import playButton from "../../Assets/Play_Button.png"
const Home = (props) => {
  const tours = [
    { date: "JUL 16", place: "DETROIT, MI", concert: "DTE ENERGY MUSIC " },
    { date: "JUL 19", place: "TORONTO,ON", concert: "BUDWEISER STAGE" },
    { date: "JUL 22", place: "BRISTOW, VA", concert: "JIGGY LUBE LIVE" },
    { date: "JUL 29", place: "PHOENIX, AZ", concert: "AK-CHIN PAVILION" },
    { date: "AUG 02", place: "LAS VEGAS, NV", concert: "T-MOBILE ARENA" },
    { date: "AUG 07", place: "CONCORD, CA", concert: "CONCORD PAVILION" },
  ];

  const tourList = (
    <ul className="mainList" style={{ marginLeft: "25%" }}>
      {tours.map((item) => (
        <li key={Math.random().toString()}
          className="listItem"
          style={{
            display: "flex",
            borderBottom: "2px dashed gray",
            paddingBottom: "5px",
            marginBottom: "10px",
          }}
        >
          <div className="dpc" style={{ flex: "1.2" }}>
            {item.date}
          </div>
          <div className="dpc" style={{ flex: "1.2", fontWeight:'bold' }}>
            {item.place}
          </div>
          <div className="dpc" style={{ flex: "1.2" , color:'gray'}}>
            {item.concert}
          </div>
          <button
            className="listButton"
            style={{
              flex: "1.2",
              backgroundColor: "skyblue",
              borderColor: "skyblue",
              color: "White",
              fontFamily: "verdana",
              fontSize:'large',
              borderRadius:'5px',
              marginLeft:'30px'
            }}
          >
            Buy Tickets
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className="HomeButtons">
        <div className="albumButton"> Get our Latest Album</div>
        <Link className="playButton" to="/Store">
          <img style={{width:"150px", height:"120px"}} src={playButton} alt="playButton" />
        </Link>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "40px",
          padding: "30px",
          fontWeight: "bold",
          fontFamily: "Verdana",
        }}
      >
        Tours
      </div>
      {tourList}
    </>
  );
};
export default Home;