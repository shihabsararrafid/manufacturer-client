import React from "react";
import {
  AiOutlineFlag,
  AiOutlineProject,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { RiFeedbackFill } from "react-icons/ri";
const Slat = () => {
  return (
    <div class="stats stats-vertical lg:stats-horizontal shadow">
      <div class="stat">
        <div class="stat-title ">
          <AiOutlineFlag className="text-center text-[#1AA77C] font-bold  block mx-auto text-4xl"></AiOutlineFlag>
        </div>
        <div class="stat-value">81</div>
        <div class="stat-desc  font-semibold text-2xl">Countries</div>
      </div>

      <div class="stat">
        <div class="stat-title">
          <AiOutlineProject className="text-center text-[#1AA77C] font-bold  block mx-auto text-4xl"></AiOutlineProject>
        </div>
        <div class="stat-value">900+</div>
        <div class="stat-desc  font-semibold text-2xl">Complete Projects</div>
      </div>

      <div class="stat">
        <div class="stat-title">
          <AiOutlineUsergroupAdd className="text-center text-[#1AA77C] block mx-auto font-bold text-4xl"></AiOutlineUsergroupAdd>
        </div>
        <div class="stat-value">359+</div>
        <div class="stat-desc  font-semibold text-2xl">Happy Clients</div>
      </div>
      <div class="stat">
        <div class="stat-title">
          <RiFeedbackFill className="text-center text-[#1AA77C] block mx-auto font-bold text-4xl"></RiFeedbackFill>
        </div>
        <div class="stat-value">59+</div>
        <div class="stat-desc  font-semibold text-2xl">Feedbacks</div>
      </div>
    </div>
  );
};

export default Slat;
