import React, { useContext } from "react";
import { GadgetsContext } from "../../Root";
import Gadget from "./Gadget";

const Gadgets = () => {
  const gadgets = useContext(GadgetsContext);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6 lg:my-0">
      {gadgets.map((gadget) => (
        <Gadget gadget={gadget} />
      ))}
    </div>
  );
};

export default Gadgets;
