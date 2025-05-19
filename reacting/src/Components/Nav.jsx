import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(ProductContext);

  let distinctCategories =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinctCategories = [...new Set(distinctCategories)].filter(Boolean);

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(
      Math.random() * 255
    ).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(
      Math.random() * 255
    ).toFixed()})`;
  };

  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <Link
        to={"/create"}
        className="py-2 px-5 border rounded border-blue-200 text-blue-300"
      >
        Add New Product
      </Link>
      <hr className="my-3 w-[80%]" />
      <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
      <div className="w-[80%]">
        {distinctCategories.map((c, i) => (
          <Link
            key={i}
            to={`/?category=${c}`}
            className="flex items-center mb-3"
          >
            <span
              style={{ backgroundColor: color() }}
              className="rounded-full mr-2 w-[15px] h-[15px]"
            ></span>{" "}
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
