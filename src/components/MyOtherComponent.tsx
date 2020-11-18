import React from "react";

export interface MyOtherComponentProps {
  /**
   * Is this the principal call to action on the page?
   */
  anotherProp?: Number;
}
export const MyOtherComponent: React.FC<MyOtherComponentProps> = ({
  anotherProp = 22,
}) => {
  return (
    <>
      <h2>MyOtherComponent</h2>
      <h3>Has a prop called anotherProp with the value of :{anotherProp}</h3>
    </>
  );
};
