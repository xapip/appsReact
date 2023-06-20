import React from "react";
import { Link } from "react-router-dom";

function NavLink({ linksName }) {
  return (
    <ul className="flex justify-evenly">
      {linksName.map((item) => (
        <Link to={item.path} key={item.id}>
          <li className="py-1.5 px-3 cursor-pointer border rounded-md border-orange-400 hover:bg-indigo-600 hover:text-white transition-all duration-500 self-center flex">
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default NavLink;
