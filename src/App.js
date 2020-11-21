import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [catLink, setCatLink] = useState();
  axios.get("http://aws.random.cat/meow", {

  }).then((response) => {
    setCatLink(response.data.file);
  });
  return (
    <div >
      <img
      style={{width: "70%", height: "70%"}}
        src={catLink}
        alt="NIE MA KOTKA :("
      />
    </div>
  );
}

export default App;
