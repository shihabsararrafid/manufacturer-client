import React from "react";

const Blog = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      <div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">how-to-manage-state-in-your-react-apps</h2>
            <p>
              There are different types of state in react app and it is quite
              hard to manage it.There are mainly for ways:
              <div>
                <li>Local state</li>
                <li>Global state</li>
                <li>Server state</li>
                <li>URL state</li>
              </div>
              In local state we share data with one or another components
              whereas through global state data can be Shared in multiple
              components. On th other way , Server state data comes from a
              external server and url state data comes from the pathname of url.
            </p>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">How does prototypical inheritance work?</h2>
          <p>
            Protypical inheritance is an awesome feature in Javascript through
            which we can easily share method and properties in objects.The
            object from where the inherits is known as prototype.Nowadays , to
            set a prototype of an object a special property called ___proto___
            is used and some time ago there was a different approach to do
            this.By sharing methods and properties logic and data duplication
            decreases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
