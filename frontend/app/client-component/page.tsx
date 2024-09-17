"use client";

import { useState,useEffect,useRef } from "react";

export default function Page() {
  const [item] = useState(["java", "php", "c++"]);
  const [javaCheched, setJavaChecked] = useState(false);
  const [phpCheched, setphpCheched] = useState(false);
  const [csCheched, setcsChecked] = useState(false);

  //dropdown
  const [gender, setGender] = useState("male");
    const [fruit, setFruit] = useState("");
  
    //List
    const [fruitList, setFruitList] = useState([
      {name: "Banana"},{name: "Coconut"},{name: "Orange"}
    ]);
    const [vfruitList, setvfruitList] = useState("")
    //userRef
    const reUsername = useRef<HTMLInputElement>(null);
    const [username,setUsername] = useState("");

    useEffect(() => {
        reUsername.current?.focus()
    },[])
  const handleJavaChecked = (e: any) => setJavaChecked(e.target.checked);
  const handlePhpChecked = (e: any) => setJavaChecked(e.target.checked);
  const handleCsChecked = (e: any) => setJavaChecked(e.target.checked);
  
  const handleChangeGender = (e: any) => {
    setGender(e.target.value);
  };
  
  const handleChangeFruit = (e: any) => {
    setFruit(e.target.value);
  };

  const handleChangeFruitList = (e: any) => {
    setvfruitList(e.target.value);
  };

  return (
    <>
      <div className="radio">
        <input type="check" onChange={handleJavaChecked} />
        <input
          type="radio"
          onChange={handleChangeGender}
          checked={gender === "male"}
          value="male"
          name="gender"
        />
        ชาย{" "}
        <input
          type="radio"
          onChange={handleChangeGender}
          checked={gender === "female"}
          value="female"
          name="gender"
        />
        หญิง <br />
        <div>you choose {gender}</div>
      </div>

      <div className="dropdown">
        <select name="fruit" onChange={handleChangeFruit}>
          <option value="banana">Banana</option>
          <option value="apple">Apple</option>
          <option value="coconut">Coconut</option>
        </select>
        <br />
        <div>you choose : {fruit}</div>
      </div>

      <div className="dropdownList">
        <select onChange={(e) => handleChangeFruitList}>
          {fruitList.map((v) => (
            <option value={v.name}>{v.name}</option>
          ))}
        </select>
        <div>you choose : {vfruitList}</div>
      </div>

      <div className="useRef">
        <input
          ref={reUsername}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div>username = {username}</div>
      </div>
      <p>test</p>
      <button className="btn btn-primary btn-xl">test</button>
    </>
  );
}
