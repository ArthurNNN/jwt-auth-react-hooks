import React, { useState, useEffect } from "react";

import { getPublicContent } from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await getPublicContent();
          setContent(response.data);
      } catch(error) {
          setContent(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Home;