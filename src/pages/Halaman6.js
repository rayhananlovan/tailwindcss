import React from "react";
import { Link } from "react-router-dom";
import background from "../images/1.jpg";
import Navbar from "../components/Navbar";

const Halaman6 = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container p-8 ml-6">
        <div className="p-10 transition border rounded-lg shadow-lg hover:scale-110">
          <div
            className="-mb-20 scale-50 float- -ml-72 h-96"
            style={{ backgroundImage: `url(${background})` }}
          ></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            illum iure dolorem provident commodi distinctio repudiandae,
            praesentium sed ab autem! Ratione quasi, consequatur sequi veritatis
            ipsam pariatur id qui sint libero molestias omnis dolorem molestiae
            maiores soluta facere possimus nesciunt rem ab, earum provident
            explicabo recusandae. Repellat, ullam. Quae, provident!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Halaman6;
