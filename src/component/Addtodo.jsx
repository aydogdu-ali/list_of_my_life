import React, { useState,useRef,useEffect } from "react";


const Addtodo = () => {
  const select = useRef();
  const [todo, setTodo] = useState("");
  const [categori, setCategori] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.id);
    console.log(todo);
  };

  const handleCategori = (e) => {
    setCategori((e.target.value));
    console.log(categori);
  };

  useEffect(() => {
    console.log(select.current.value);
  }, []);

  const kategori = ["Aile", "Sosyal Hayat", "Eğitim", "İş Hayati"];

  return (
    <div>
      <form>
        <input type="text" value={todo} onChange={handleChange} />
       
        <select ref={select}
          onChange={handleCategori}>
           <option >
               
              Kategori Şeçiniz
             </option>
          {kategori?.map((categori, index) => {
            return (
              <option key={(index)} value={categori }>
               
                {categori }
              </option>
            );
          })}
        </select>

        

        <button className="btn btn-success"> Ekle</button>

        <button className="btn btn-warning"> Düzenle</button>
        <button className="btn btn-danger"> Sil</button>
      </form>
    </div>
  );
};

export default Addtodo;
