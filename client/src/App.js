import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [fetchedString, setFetchedString] = useState("");

  useEffect(() => {
    fetch("http://tkozemzak.ddns.net:3000").then((res) => {
      setFetchedString(res.status);
    });
  }, []);

  return (
    <div className="App">
      <p>Status from server: {fetchedString}</p>
    </div>
  );
}

export default App;
