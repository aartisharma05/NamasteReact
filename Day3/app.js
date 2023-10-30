import React from 'react';
import ReactDOM from "react-dom/client";


/***
 * HMR- Hot Module Replacement
 * File Watcher algorithms- C++
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compressin
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * 
 * 
 * 
 * Transitive Dependencies
 */




const heading1 = React.createElement(
  'h1',{
    id: "title"
  },
  "Heading1 for parcel"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading2 "
);

const container = React.createElement(
  "div",{
    id : "container1"
  },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside the root



//async defer
root.render(container); 
