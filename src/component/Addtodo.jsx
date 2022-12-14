import React, { useEffect, useState } from "react";
import Listtodo from "./Listtodo";

const Addtodo = () => {
  const kategori = [
    "--Kategori Seçiniz--",
    "Aile",
    "Sosyal Hayat",
    "Eğitim",
    "İş Hayati",
  ];

  const [text, setText] = useState("");
  const [categori, setCategori] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
console.log(categori)

  }, [categori,todo]);

  const handleChange = (e) => {
   
    setText(e.target.value);
    console.log(text);
  };

  const handleKategori = (e) => {
    setCategori(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      { text: text, categori: categori, id: new Date().getMilliseconds() },
    ]);

    setText("");
    setCategori("");
    
  };
  console.log(todo)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />

        <div>
          {" "}
          <select value={categori} onChange={handleKategori}>
            {kategori?.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <button className="btn btn-success"> Ekle</button>
      </form>
      <Listtodo todo = {todo} />
    </div>
  );
};

export default Addtodo;
