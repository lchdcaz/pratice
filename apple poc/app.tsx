import { useState } from "react";
import "./App.css";

import apple from "./assets/apple-173-svgrepo-com.svg";
import search from "./assets/search-4-svgrepo-com.svg";
import shopping from "./assets/shopping-bag-svgrepo-com.svg";

function App() {
  const [dropdown, setDropdown] = useState<
    | "Store"
    | "Mac"
    | "iPad"
    | "iPhone"
    | "Watch"
    | "Vision"
    | "AirPods"
    | "TV & Home"
    | "Entertainment"
    | "Accessories"
    | "Support"
    | null
  >(null);

  const store_word = ["Shop", "Shop the latest", "Mac", "iPad"];
  const mac_word = ["MacBook Air", "MacBook Pro", "iMac", "Mac mini"];

  const daohang = [
    { id: "Store", content: store_word },
    { id: "Mac", content: mac_word },
    { id: "iPad", content: store_word },
    { id: "iPhone", content: mac_word },
    { id: "Watch", content: store_word },
    { id: "Vision", content: mac_word },
    { id: "AirPods", content: store_word },
    { id: "TV & Home", content: mac_word },
    { id: "Entertainment", content: store_word },
    { id: "Accessories", content: mac_word },
    { id: "Support", content: store_word },
  ] as const;

  const current = daohang.find((item) => item.id === dropdown);

  return (
    <div
      className="web"
      onMouseLeave={() => setDropdown(null)}
    >
      <div className="daohang">
        <img src={apple} width={15} />

        {daohang.map(({ id }) => (
          <p
            key={id}
            className="xiala"
            onMouseEnter={() => setDropdown(id)}
          >
            {id}
          </p>
        ))}

        <img src={search} width={15} />
        <img src={shopping} width={15} />
      </div>
    <div className = {dropdown ? "mubu hei" : "mubu"}>
      <div className={dropdown ? "dropdown open" : "dropdown"}>
        <div className="Layer" onMouseLeave={()=>setDropdown(null)}>
          {current?.content.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
