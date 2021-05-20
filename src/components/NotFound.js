import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container has-text-centered is-vcentered">
      <div className="__text_404">
        <h2>Oops! Page not found!</h2>
        <h3>
          We are very sorry for the inconvenience. It looks like you're trying
          to access a page that has been deleted or never existed
        </h3>
      </div>
      <Link to="/">
        <div className="__go_home_404">Go back home</div>
      </Link>
      <div className="__image_404">
        <img
          src="https://topset.ng/wp-content/uploads/2021/03/404.svg"
          alt="not found"
        />
      </div>
    </div>
  );
}
