import React from "react";
import Image from "next/Image";
const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <Image src="./public/image/tesla.jpg" />
        </div>
        <ul>
          <li>home</li>
          <li>shop</li>
          <li>about us</li>
          <li>blog</li>
          <li>contact us</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
