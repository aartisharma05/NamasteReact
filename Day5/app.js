import React from 'react';
import ReactDOM from "react-dom/client";


//heading is a react element which is an object
const heading = (
  <h1 id="title" key="h2">
    Namaste React in element heading
   </h1>
);

const Heading = ()=> (
  <h1 id="title" key="h1">
    Namaste React in Functional Component
   </h1>
);
//React Components
  //Functional Components -  New way of writing code 
  //Name of the components starts with Capital letters- it's not mandatory but comes under good practices

  const HeadComponent1 = ()=>{
    return (
      <div>
        {heading}
        {console.log("any js code")}
        {/* {Heading()} */}
        {1+2}
        <Heading />
      <h1>Namaste React Functional Components</h1>
      <h2>This is a h2 tag</h2>
      </div>
    );
  };


/*** 
If we have to use component inside a component then it is called component composition like <Heading /> inside HeadComponent1 component
To get our element inside the component we use {elementName}
To get another functional component inside a functional component we can either use
{FunctionalComponentName()} or <FunctionalComponentName /> inside our functional component 
we use {} to use js inside jsx and it will render

***/ 
  const HeadeComponent2 = () => (
    <div>
      <h1>Namaste React Functional Components2</h1>
      <h2>This is a h2 tag in HeadeComponent2</h2>
    </div>
  );
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside the root



//async defer
// root.render(heading); //returning the react element
root.render(<HeadComponent1/>);//returning the react functional component
