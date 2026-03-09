import Add from "./Add";
import "./Home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Home({ e, setE, t, setT, toggle, setToggle }) {
  const navi = useNavigate();
  const [showInput, setShowInput] = useState(false);
  const [empty, setEmpty] = useState(true);
  const [newN, setnewN] = useState("");
  const [newA, setnewA] = useState(0);
  const [newC, setnewC] = useState("");
  const [amt, setAmt] = useState(0);
  const [intial, setIntial] = useState("_____");
  const [final, setfinal] = useState("______");
  useEffect(() => {
    if (e.length >= 1) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }, [e]);
  function del(indexToDelete) {
    // We use '_' for the item because we only care about the index 'i'
    const updatedArray = e.filter((_, i) => i !== indexToDelete);
    setE(updatedArray);
  }
  function go() {
    let total = 0;

    e.forEach((i) => {
      if (i.date >= intial && i.date <= final) {
        total += i.amount;
      }
    });

    setAmt(total);
  }

  function update(index) {
    // Toggle the input field for this item
    setShowInput((prev) => !prev);
    setE((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              name: newN || item.name,
              amount: newA || item.amount,
              cat: newC || item.cat,
            }
          : item
      )
    );
    // Update the specific expense's name
  }
  function re() {
    setAmt(0);
    setfinal("______");
    setIntial("______");
  }

  return (
    <div
      className="Home"
      style={{ backgroundColor: toggle ? "white" : "#e8f5e9" }}
    >
      <h1 className="head">Expense Tracker </h1>
      <button
        onClick={() => setToggle((prev) => !prev)}
        style={{ marginRight: "790px", color: "green" }}
      >
        {" "}
        ⭘
      </button>
      <p> [ Total Expense : {t} $ ] </p>
      <p>Click Here to Add Your New Expnese </p>
      <button className="hbtn" onClick={() => navi("/add")}>
        ➕
      </button>
      {/* <p>Your Expneses Shown Below : </p> */}
      <div className="div3">
        <h4 style={{ color: "#4caf50" }}>Filter by Date </h4>
        <input
          type="date"
          value={intial}
          onChange={(e) => setIntial(e.target.value)}
        />
        <input
          type="date"
          value={final}
          onChange={(e) => setfinal(e.target.value)}
        />
        <button onClick={go} style={{ color: "#4caf50" }}>
          Go
        </button>
        <button onClick={re} style={{ color: "#4caf50" }}>
          Refresh
        </button>
      </div>
      <div className="div4">
        From <u>{intial}</u> to <u> {final}</u> You spent {amt}
      </div>
      <div>
        <div className="list">
          <table className="list2">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {empty && <div className="n"> No Expense Added Yet ...</div>}
              {e.map((m, index) => (
                <tr key={index}>
                  <td>{m.id}</td>
                  <td>{m.name}</td>
                  <td>{m.amount}</td>
                  <td>{m.date}</td>
                  <td>{m.cat}</td>
                  <td>
                    <button className="dbtn" onClick={() => del(index)}>
                      Delete
                    </button>

                    <button className="ubtn" onClick={() => update(index)}>
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          {showInput && (
            <input
              type="text"
              value={newN}
              onChange={(e) => setnewN(e.target.value)}
              placeholder="Change Name.."
              style={{ marginLeft: "10px" }}
            />
          )}
          {showInput && (
            <input
              type="number"
              value={newA}
              onChange={(e) => setnewA(+e.target.value)}
              placeholder="Change Amonut... "
              style={{ marginLeft: "10px" }}
            />
          )}
          {showInput && (
            <input
              type="text"
              value={newC}
              onChange={(e) => setnewC(e.target.value)}
              placeholder="Change Category.."
              style={{ marginLeft: "10px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
