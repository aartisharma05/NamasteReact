const heading1 = React.createElement(
  'h1',{
    id: "title"
  },
  "Heading1 "
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
