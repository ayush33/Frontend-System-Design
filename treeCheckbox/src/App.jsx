
import React from "react"
export default function App() {

  const [checked, setChecked] = React.useState({});

  const data = [
    {
      id: 1,
      name: "Frontend",
      children: [
        { id: 2, name: "React" },
        { id: 3, name: "Angular" }
      ]
    },
    {
      id: 4,
      name: "Backend",
      children: [
        { id: 5, name: "Node.js" },
        { id: 6, name: "Java" }
      ]
    }
  ];

  const toggle = (node, isChecked) => {
    const update = { ...checked };

    function markAll(n, val) {
      update[n.id] = val;
      n.children?.forEach(c => markAll(c, val));
    }

    markAll(node, isChecked);
    setChecked(update);
  };


  function Node({ node, index }) {

    return (
      <div key={index}>
        <input type="checkbox"
          checked={!!checked[node.id]}
          onClick={(e) => toggle(node, e.target.checked)}
        /> {node.name}
        {node?.children?.map((item, cindex) => {
          return (
            <Node node={item} index={cindex} />
          )
        })}
      </div>
    )
  }
  return (
    <div className="App">
      {
        data?.map((item, index) => {
          return (
            <Node node={item} index={index} />
          )
        })
      }
    </div>
  );
}


