import React, { useState, useEffect } from "react";

import { getUserBoard } from "../services/user.service";

const BoardUser = () => {
  const [content, setContent] = useState("");
  const [errorGif, setErrorGif] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await getUserBoard();
          setContent(response.data);
          setErrorGif("");
      } catch(error) {
          setContent(error.message);
          setErrorGif("https://bit.ly/3kdBgVP")
      }
    }
    fetchData();
  }, []);

  console.log(errorGif)

  return (
    <div className="container">
      <header className="jumbotron">
        {errorGif ?
          <img src={errorGif} alt="" /> :
          <h3>{content}</h3>
        }
      </header>
    </div>
  );
};

export default BoardUser;