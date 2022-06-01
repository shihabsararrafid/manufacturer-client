import React from "react";
import { BsSquare } from "react-icons/bs";
const Portfolio = () => {
  return (
    <div>
      {/* src =https://i.ibb.co/wB41vHh/IMG20220211071945-removebg-preview.png */}
      <h1 className="text-3xl font-mono font-bold text-primary uppercase">
        my Portfolio
      </h1>
      <div class="card w-[90%] my-10 mx-auto shadow-2xl text-primary-content">
        <div class="card-body">
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <div class="avatar">
              <div class="w-[200px] mx-10 ring ring-secondary  ring-offset-2 rounded-full">
                <img
                  src="https://i.ibb.co/wB41vHh/IMG20220211071945-removebg-preview.png"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className="text-3xl font-semibold font-mono text-secondary">
              <h1>
                SHIHAB SARAR ISLAM <br />
                <span className="text-purple-700 font-bold">RAFID</span>
              </h1>
              <h1 className="text-3xl text-primary font-serif font-bold uppercase font-mono text-secondary">
                Front End WEB DEveloper
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2">
          <div className="flex items-center">
            <img
              className="w-[175px]"
              src="https://i.ibb.co/QHGHZD5/education-icon-isolated-white-background-graduation-cap-simbol-flat-style-simple-abstract-place-icon.jpg"
              alt=""
            />
            <h1 className="text-xl text-secondary font-serif font-bold uppercase font-mono ">
              Educational Background:
            </h1>
          </div>
          <div>
            <p className="text-center flex justify-center items-center">
              <BsSquare className="bg-[#073BC4] font-bold" />
              <span className="text-2xl mx-4 text-purple-600 font-mono font-bold uppercase">
                CSE
              </span>
            </p>
            <p className="text-xl font-mono font-bold text-primary">
              Rajshahi University Engineering and Technology
            </p>
            <p className="text-xl font-mono font-bold text-primary">
              (2022-Present)
            </p>
          </div>
          <div>
            <p className="text-center flex justify-center items-center">
              <BsSquare className=" bg-[#073BC4] font-bold" />
              <span className="text-2xl mx-4 text-purple-600 font-mono font-bold uppercase">
                HSC
              </span>
            </p>
            <p className="text-xl font-mono font-bold text-primary">
              Sherpur Govt. College
            </p>
            <p className="text-xl font-mono font-bold text-primary">GPA-5.00</p>
            <p className="text-xl font-mono font-bold text-primary">
              (2018-2020)
            </p>
          </div>
          <div>
            <p className="text-center flex justify-center items-center">
              <BsSquare className="bg-[#073BC4] font-bold" />
              <span className="text-2xl mx-4 text-purple-600 font-mono font-bold uppercase">
                SSC
              </span>
            </p>
            <p className="text-xl font-mono font-bold text-primary">
              Sherpur Govt. Victoria Academy
            </p>
            <p className="text-xl font-mono font-bold text-primary">GPA-5.00</p>
            <p className="text-xl font-mono font-bold text-primary">
              (2016-18)
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <img
              className="w-[175px] rounded-full"
              src="https://i.ibb.co/LkTQDDG/skills-icon-trendy-logo-concept-white-background-human-resources-collection-133513629.jpg"
              alt=""
            />
            <h1 className="text-xl text-secondary font-serif font-bold uppercase font-mono text-primary">
              Skills:
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2">
            <div className="flex justify-center items-center">
              <img
                className="w-[75px] rounded-full"
                src="https://i.ibb.co/4pvs125/unnamed.png"
                alt=""
              />
              <h1 className="text-xl mx-10 text-primary font-serif font-bold uppercase font-mono text-primary">
                HTML 5
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="w-[75px] rounded-full"
                src="https://i.ibb.co/qpt1ZwY/unnamed-1.png"
                alt=""
              />
              <h1 className="text-xl mx-10 text-primary font-serif font-bold uppercase font-mono text-primary">
                CSS 3
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-[75px] rounded-full"
                src="https://i.ibb.co/vZSG4TB/download.jpg"
                alt=""
              />
              <h1 className="text-xl mx-10 text-primary font-serif font-bold uppercase font-mono text-primary">
                Bootstrap
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-[75px] rounded-full"
                src="https://i.ibb.co/SvkjWMQ/download-1.png"
                alt=""
              />
              <h1 className="text-xl mx-10 text-primary font-serif font-bold uppercase font-mono text-primary">
                Tailwind css
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-[75px] rounded-full"
                src="https://i.ibb.co/fkdFHYY/javascript-736400-960-720.webp"
                alt=""
              />
              <h1 className="text-xl mx-10 text-primary font-serif font-bold uppercase font-mono text-primary">
                Javascript
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-[75px] rounded-full"
                src="https://i.ibb.co/gvvj0Vm/pdib9r9rk5j1m7oala1p.webp"
                alt=""
              />
              <h1 className="text-xl mx-10 text-primary font-serif font-bold uppercase font-mono text-primary">
                React JS
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-[75px] rounded-full"
                src="https://i.ibb.co/30Szd1v/images.jpg"
                alt=""
              />
              <h1 className="text-xl mx-10 text-primary font-serif font-bold uppercase font-mono text-primary">
                Node JS
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-[75px] rounded-full"
                src="https://i.ibb.co/YbG9p8Y/Mongo-DB-Emblem.jpg"
                alt=""
              />
              <h1 className="text-xl mx-10 text-primary font-serif font-bold uppercase font-mono text-primary">
                Mongo Db
              </h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-secondary font-serif font-bold uppercase font-mono ">
            My Projects:
          </h1>
          <div className="grid text-primary font-mono grid-cols-1 md:grid-cols-2 mx-10 my-10 lg:grid-cols-3 gap-10">
            <div>
              <h1>
                {" "}
                <a
                  className="text-blue-600 decoration-inherit font-bold"
                  href="https://gym-guru-86903.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GYM GURU
                </a>
              </h1>
              <p>A project On a independent Service Provider</p>
            </div>
            <div>
              <h1>
                {" "}
                <a
                  className="text-blue-600 decoration-inherit uppercase font-bold"
                  href="https://electra-warehouse-manage.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ELectra warehouse
                </a>
              </h1>
              <p>A project On a Warehouse management</p>
            </div>
            <div>
              <h1>
                {" "}
                <a
                  className="text-blue-600 decoration-inherit uppercase font-bold"
                  href="https://lucky-one-rafid.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lucky Watch
                </a>
              </h1>
              <p>A project On a Watch Store</p>
            </div>
          </div>
        </div>
        <div className="text-primary m-10 font-mono font-semibold text-xl">
          <h1>Contact Me:</h1>
          <p>Email: shrafid.532@gmail.com</p>
          <p>
            Linkedin:{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/shihab-sarar-islam-rafid-71ba2022b/"
            >
              Shihab Sarar Rafid
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
