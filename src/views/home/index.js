import React from "react";
import { useStateValue } from "../../StateProvider";

export default function Home() {
  const [{ user }] = useStateValue();
  return (
    <div>
      <div>{JSON.stringify(user)}</div>
      <figure className="image is-128x128">
        <img
          className="is-rounded"
          src="https://bulma.io/images/placeholders/128x128.png"
          alt=""
        />
      </figure>
    </div>
  );
}
