import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      formData.title.trim().length < 5 ||
      formData.image.trim().length < 5 ||
      formData.category.trim().length < 5 ||
      !formData.price ||
      formData.description.trim().length < 5
    ) {
      alert("Each and every input must have at least 4 characters");
      return;
    }

    const product = {
      id: nanoid(),
      ...formData,
      price: Number(formData.price),
    };

    setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    toast.success("Product Added Successfully!");
    navigate("/");
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="w-1/2 text-2xl">Add New Product</h1>
      <input
        type="url"
        placeholder="image URL"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="image"
        onChange={handleChange}
        value={formData.image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="title"
        onChange={handleChange}
        value={formData.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          name="category"
          onChange={handleChange}
          value={formData.category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          name="price"
          onChange={handleChange}
          value={formData.price}
        />
      </div>
      <textarea
        placeholder="enter product description here..."
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows={10}
        name="description"
        onChange={handleChange}
        value={formData.description}
      ></textarea>
      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-300">
          Add New Product
        </button>
      </div>
    </form>
  );
}

export default Create;