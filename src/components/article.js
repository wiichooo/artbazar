import React, { useEffect, useState } from "react";

function Article(props) {
  const [article, setArticle] = useState({});
  useEffect(() => {
    async function fetchArticle() {
      const settings = {
        method: "GET",
      };

      const response = await fetch(
        `http://localhost:3000/api/articles/${props.slugId}`,
        settings
      );
      const data = await response.json();
      console.log(data);
      setArticle(data.article || {});
    }
    fetchArticle();
  }, [props.slugId]);

  return (
    <div
      className="col-md-12"
      style={{ marginTop: 50, paddingLeft: "10%", paddingRight: "10%" }}
    >
      <div>{article.title}Title</div>
      <div>{article.desc}</div>
      <div>{article.body}</div>
      <div>{article.favoritesCount}</div>
      {/* <div>comments</div> */}
    </div>
  );
}

export default Article;
