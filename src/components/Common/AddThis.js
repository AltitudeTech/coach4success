import React, { useEffect } from "react";

const AddThis = () => {
  useEffect(() => {
    const addThis = document.createElement("script");
    addThis.src = `//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5d96ef36faf6ef25`;
    addThis.type = "text/javascript";
    document.getElementById("addThis").appendChild(addThis);
  }, []);

  return <div id="addThis"></div>;
};

export default AddThis;
