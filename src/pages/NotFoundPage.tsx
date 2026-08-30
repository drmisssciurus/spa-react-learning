import "./NotFoundPage.css";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <h2 className="not-found-title">404 — Page Not Found</h2>

      <div className="not-found-description">
        <h3>Not even the Sorting Hat knows where this page went!</h3>
        <p>
          Double-check the URL or head back to the Great Hall to explore the
          list of characters.
        </p>
      </div>
      <div>
        <img
          className="not-found-image"
          src="/public/hat.jpeg"
          alt="Sorting Hat"
        />
      </div>

      <Link className="button" to={"/"}>
        Back to the Great Hall
      </Link>
    </>
  );
}

export default NotFoundPage;
