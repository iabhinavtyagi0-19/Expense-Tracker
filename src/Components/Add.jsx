import "./Add.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Add({ e, setE, t, setT, toggle, setToggle }) {
  const [n, setn] = useState("");
  const [a, seta] = useState(0);
  const [d, setd] = useState("");
  const [c, setc] = useState("");
  const navi = useNavigate();

  function handleChange() {
    if (n == "" || a == 0 || c == "" || d == "") {
      alert("Fill Up Details !!");
      return;
    }

    const newEntry = { id: Date.now(), name: n, amount: a, date: d, cat: c };
    setE([...e, newEntry]);
    setT((prev) => prev + a);
    navi("/");
  }
  return (
    <div
      className="Add"
      style={{ backgroundColor: toggle ? "white" : "#e8f5e9" }}
    >
      <button className="back" onClick={() => navi("/")}>
        ↩ Home
      </button>
      <button
        className="t1"
        onClick={() => setToggle((prev) => !prev)}
        style={{ marginRight: "700px" }}
      >
        ⭘
      </button>
      <div className="form">
        <div className="f">
          Name
          <br />
          <input
            type="text"
            value={n}
            placeholder="Enter name "
            style={{ backgroundColor: n === "" ? "lightgrey" : "lightgreen" }}
            onChange={(e) => setn(e.target.value.toUpperCase())}
          />
          <br />
          Amount
          <br />
          <input
            value={a}
            type="number"
            placeholder="Enter amount "
            style={{ backgroundColor: a === 0 ? "lightgrey" : "lightgreen" }}
            onChange={(e) => seta(Number(e.target.value))}
            required
          />
          <br />
          <br />
          Choose Date
          <br />
          <br />
          <input
            type="date"
            value={d}
            style={{ backgroundColor: d === "" ? "lightgrey" : "lightgreen" }}
            onChange={(e) => setd(e.target.value)}
            required
          />{" "}
          <br /> <br /> <br />
          <select
            name=""
            id=""
            value={c}
            style={{ backgroundColor: c === "" ? "lightgrey" : "lightgreen" }}
            onChange={(e) => setc(e.target.value)}
            required
          >
            <option value="select">Select Category</option>
            <option value="Food&Drinks">Food&Drinks</option>
            <option value="Travel">Travel</option>
            <option value="Membership">MemberShip</option>
            <option value="Esstianal">Esstinal</option>
          </select>
          <br />
          <br />
          <div className="divbtn">
            {" "}
            <button onClick={handleChange} className="btnf">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
