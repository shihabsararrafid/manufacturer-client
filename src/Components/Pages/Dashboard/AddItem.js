import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data, e) => {
    const url = "https://toolex-factory.herokuapp.com/tools";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // toast("New Item added successfully");
        // alert("New Item added successfully");
      });
    navigate("/manageallproducts");
  };
  return (
    <div>
      <h1 className="text-4xl text-primary font-bold uppercase">Add Item</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          className="border-[1px] block lg:w-[30%] md:w-[60%] w-full my-5 rounded-lg mx-auto h-[40px]  border-secondary"
          {...register("name", { required: true })}
        />
        {errors.name && <p className="text-red-600">This is required</p>}
        <input
          placeholder="Price"
          className="border-[1px] block lg:w-[30%] md:w-[60%] w-full my-5  mx-auto h-[40px] rounded-lg border-secondary"
          {...register("price", { required: true })}
        />
        {errors.price && <p className="text-red-600">This is required</p>}

        <input
          placeholder="Quantity"
          className="border-[1px] block lg:w-[30%] md:w-[60%] w-full my-5  mx-auto h-[40px] rounded-lg border-secondary"
          {...register("quantity", { required: true })}
        />
        {errors.quantity && <p className="text-red-600">This is required</p>}
        <input
          placeholder="Min Order Quantity"
          className="border-[1px] block lg:w-[30%] md:w-[60%] w-full my-5  mx-auto h-[40px] rounded-lg border-secondary"
          {...register("minOrder", { required: true })}
        />
        {errors.supplier && <p className="text-red-600">This is required</p>}
        <input
          placeholder="PhotoUrl"
          className="border-[1px] block lg:w-[30%] md:w-[60%] w-full my-5  mx-auto h-[40px] rounded-lg border-secondary"
          {...register("img", { required: true })}
        />
        {errors.img && <p className="text-red-600">This is required</p>}
        <input
          placeholder="Features"
          className="border-[1px] block lg:w-[30%] md:w-[60%] w-full my-5  mx-auto h-[40px] rounded-lg border-secondary"
          {...register("desc", {
            required: true,
          })}
        />
        {errors.desc && <p className="text-red-600">This is required</p>}

        <input
          className="font-semibold text-2xl  my-9 lg:left-1/3 left-1/4  mx-auto hover:bg-white hover:text-secondary duration-500 hover:border-secondary hover:border-[3px] outline-0   rounded-3xl uppercase flex justify-center items-center font-mono text-white w-[60%]  lg:w-[30%]   px-6 py-3 border-[2px] bg-secondary"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddItem;
