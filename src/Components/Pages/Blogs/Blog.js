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
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Why Not we set state directly in react?</h2>
          <p>
            In react we generally set a state using <span>Usestate()</span> with
            a function to cahnge the state . This is because if we do it
            directly it will change the state immediately . Rather it will
            create a pending state transition . That's how we will lose control
            over all components.As react uses unidirectional data flows so if we
            set state directly it may crash our app.
          </p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            How will I improve the performance of a React Application?
          </h2>
          <p>1.Keeping the component state in local if necessary</p>
          <p>
            {" "}
            2.Memorizing react components to prevent unnecessary re-renders
          </p>
          <p>3.Code splitting in react using dynamic import()</p>
          <p>4.Listing virtualization in React applications</p>
          <p>5.Using Lazy loading images in React</p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">What is unit test?</h2>
          <p>
            Unit test is process to test software in which every part of
            software or website is tested .It is done mainly in the development
            process by the developer.It can be a module , function etc.A smaller
            unit test is better.
          </p>
          <h2 class="card-title">Why should we write unit test?</h2>
          <p>
            It is used to validate whether every part of softawre is working
            good or not.In some modern framework like jUnit unit test can be
            found.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
