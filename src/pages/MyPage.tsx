import React from "react";

import {MyOtherComponent} from "@components/MyOtherComponent";

export interface MyPageProps {
  /**
   * random prop
   */
  propertyA?: String;
  /**
   * another random prop
   */

  propertyB?: String;
  /**
   * image
   */

  imageA?: any;
  /**
   * another image
   */
  imageB?: any;
}

export const MyPage: React.FC<MyPageProps> = ({
  propertyA = "one",
  propertyB = "two",
  imageA = null,
  imageB = null,
}) => {
  return (
    <div>
      <h2>This is MyComponent</h2>
      <h3>Has properties</h3>
      <h4>propertyA with value of:{propertyA}</h4>
      <h4>propertyB with value of:{propertyB}</h4>
      <h3>and child component of</h3>
      <div style={{ padding: "2rem" }}>
        <MyOtherComponent />
      </div>
      <div>
        <h3>lets add some images</h3>
        <img src={imageA} alt="image2" />
        <img src={imageB} alt="image2" />
      </div>
    </div>
  );
};
