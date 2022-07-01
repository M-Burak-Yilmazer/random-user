import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.scss";

const url = "https://randomuser.me/api/";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  const users = async () => {
    try {
      const response = await axios.get(url);

      const { data } = response;
      setUser(data.results[0]);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    users();
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div className="App">
        <Card user={user} />
      </div>
      <button className="button" onClick={() => users()}> random user</button>
    </div>
  );
};

export default App;
