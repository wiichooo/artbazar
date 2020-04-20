import React from "react";
import { Link } from "@reach/router";

function ArticleCard(props) {
  return (
    <div
      className="card "
      style={{
        // minWidth: "18rem",
        // maxWidth: "18rem",
        minWidth: "28%",
        maxWidth: "28%",
        margin: 30,
        display: "flex",
      }}
    >
      <img className="card-img-top" src="logo512.png" alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{props.data.title}</h5>
        <p className="card-text">
          {props.data.body}
          {props.data.slug}
        </p>
        <Link to={`/Article/${props.data.slug}`} className="btn btn-primary">
          Go to this article
        </Link>
      </div>
      <div className="card-footer text-muted">
        2 days ago; favs:{props.data.favoritesCount}
      </div>
    </div>
  );
}

export default ArticleCard;
