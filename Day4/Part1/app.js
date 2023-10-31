import React from 'react';
import ReactDOM from "react-dom/client";


/***Beauty of Parcel->
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
 * Tree Shaking- Removing unwanted code
 * 
 * 
 * Transitive Dependencies
 */

 //Babel understands JSX and coverts to normal js code ; JSX to JSX(uses) =>React.createElement(gives us    )=>Object(converted to) => HTML(DOM)                                     

const heading1 = React.createElement(
  'h1',{
    id: "title",
    key: "h2"
  },
  "Namaste React"
);

//JSX
const heading2 = (<h1 id="title" key="h2">
                  Namaste React
                  </h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside the root



//async defer
root.render(container); 
