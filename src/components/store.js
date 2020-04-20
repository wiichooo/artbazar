import React, { useContext, useEffect, useState } from "react";
import userContext from "../context/userContext";
import ArticleCard from "./articleCard";

function Store() {
  const [user] = useContext(userContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const settings = {
        method: "GET",
      };

      const response = await fetch(
        "http://localhost:3000/api/articles/",
        settings
      );
      const data = await response.json();
      console.log(data);
      setArticles(data.articles || []);
    }
    fetchData();
  }, []);

  const rows = [...Array(Math.ceil(articles.length / 4))];
  const productRows = rows.map((row, idx) =>
    articles.slice(idx * 3, idx * 3 + 3)
  );
  const content = productRows.map((row, idx) => (
    <div className="row" key={idx}>
      {row.map((title, i) => (
        <ArticleCard
          key={title + i}
          className="col-md-4"
          data={title}
        ></ArticleCard>
      ))}
    </div>
  ));

  return (
    <div
      className="col-md-12"
      style={{ paddingTop: 50, paddingLeft: "10%", paddingRight: "10%" }}
    >
      {content}
    </div>
  );
}

export default Store;
