import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);

  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  // const [orderId, setOrderId] = useState([]);
  let orderId = [];
  let neworders = [];
  const [ordersnew, setOrdersnew] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/myorders?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        //     for (const id of data) {
        //       if (orderId.indexOf(id._id) === -1) {
        //         orderId.push(id._id);
        //       }

        //       const newUrl = `http://localhost:5000/purchase/${id._id}`;
        //       fetch(newUrl)
        //         .then((res) => res.json())
        //         .then((data) => {
        //           if (neworders.indexOf(data) === -1) {
        //             neworders.push(data);
        //             //console.log(...neworders);
        //             setOrdersnew(neworders);
        //           }

        //           //   ordersnew.push(data);
        //           //console.log(ordersnew);
        //           //neworders = [...ordersnew, data];
        //           //console.log(neworders);
        //           //setOrdersnew(neworders);
        //         });

        //       //fetch();
        //     }
        //     // console.log(orderId);
        //     // console.log(neworders);
        //   });
        //setOrdersnew(neworders);
      });
  }, [user?.email]);
  useEffect(() => {
    fetch("https://toolex-factory.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //console.log(orderId);
  //console.log(orders);

  for (let i = 0; i < orders?.length; i++) {
    const newer = products.find((p) => p._id === orders[i]?._id);
    ordersnew.push(newer);
    //console.log(order);
  }
  const handleDelectebtn = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      const url = `http://localhost:5000/myorders?id=${id}&email=${user.email}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const newo = orders.filter((o) => o._id !== id);
          setOrders(newo);
        });
    }
    console.log(id);
  };
  return (
    <div>
      <h1 className="text-3xl">
        Hello{" "}
        <span className="font-mono font-bold text-secondary">
          {user?.displayName}
        </span>
      </h1>

      <h1 className="text-primary font-mono">Welcome to your Cart</h1>
      {orders.length ? (
        " "
      ) : (
        <p className="font-mono text-2xl">
          Sorry , You Havenot added anything to your cart
        </p>
      )}
      <div className="grid gap-10 mx-4 my-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {orders.map((o) => (
          <div>
            <div class="card  card-side bg-base-100 shadow-xl ">
              <figure>
                <img
                  className="w-[150px] mask mask-circle text-center"
                  src={o.img}
                  alt="Movie"
                ></img>
              </figure>
              <div class="card-body font-mono">
                <h2 class="card-title text-left  uppercase">{o.name}</h2>
                <div className="font-semibold">
                  <p>Ordered Quantity:{o.quantity}</p>
                  <p>Price:${o.price}</p>
                  <p>
                    Amount To be Paid:${" "}
                    <span className="text-secondary font-bold">
                      {parseInt(o.price) * parseInt(o.quantity)}
                    </span>
                  </p>
                </div>
                <div class="card-actions justify-center">
                  <button class="btn btn-secondary">Pay Now</button>
                  <button
                    onClick={() => handleDelectebtn(`${o._id}`)}
                    className="bg-red-600 text-white btn"
                  >
                    Delete Item
                  </button>
                  <div>
                    <Link to={`/purchase/${o._id}`}>
                      {" "}
                      <button class="btn btn-secondary">Update Order</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyOrders;
