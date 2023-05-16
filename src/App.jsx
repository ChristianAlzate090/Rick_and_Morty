import { useEffect, useState } from "react";
import "./App.css";
import { getLocationById } from "./services/getLocationById";
import { getRandonNumber } from "./utils/getRandomNumber";
import Location from "./components/Location/Location";
import Loader from "./components/Loader/Loader";
import ResidentList from "./components/ResidentList/ResidentList";
import SearchForm from "./components/searchForm/searchForm";
import Header from "./components/Header/Header";


// Promise.aal()
// Si alguna falla, todo el promise all falla, es decir, lanzamos 100 peteciones y de esas fallan 2 entonces perderia los otros 98 datos

// El valor de un input en react, no puede ser null ni undefined-

function App() {
  const [location, setLocation] = useState(null);

  const handleOeMeEstoyEnviando = async (dataId) => {
    let locationInfo;

    if (!dataId) {
      const randonId = getRandonNumber(1, 126);
      locationInfo = await getLocationById(randonId);
    } else {
      locationInfo = await getLocationById(dataId);
    }

    setLocation(locationInfo);
  };

  useEffect(() => {
    const loadLocation = async () => {
      const randonId = getRandonNumber(1 , 126);
      const locationInfo = await getLocationById(randonId);
      setLocation(locationInfo);
    };

    loadLocation();
  }, []);

  return (
    <>
      <Header/>

      <SearchForm oeMeEstoyEnviando={handleOeMeEstoyEnviando} />

      {location ? <Location location={location} /> : <Loader />}

      <h2>Residents</h2>
      
      
        <ResidentList residents={location?.residents} />
    </>
  );
}

export default App;
