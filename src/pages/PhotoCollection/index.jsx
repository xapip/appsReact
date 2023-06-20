import React from "react";

import { Collection } from "./components/Collection";
import style from "./photoCollection.module.scss";
import Loading from "./components/Loading";

const categories = [
    { "id": 0, "name": "Все" },
    { "id": 1, "name": "Море" },
    { "id": 2, "name": "Горы" },
    { "id": 3, "name": "Архитектура" },
    { "id": 4, "name": "Города" }
]

function PhotoCollection() {
  const [collections, setCollections] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
  const [categoryId, setCategoryId] = React.useState(0);
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(1);
  
  

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6479855da455e257fa6345ec.mockapi.io/collections?p=${page}&l=3&${
        categoryId ? `category=${categoryId}` : ""
      }`
    )
      .then((res) => res.json())
      .then((json) => setCollections(json))
      .catch((error) => {
        console.error(error);
        alert("Ошибка получения данных, попробуйте позже");
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);
  
  return (
    <div className={style.inner}>
      <div className={style.App}>
        <h1 className="text-5xl pb-4">Моя коллекция фотографий</h1>
        <div className={style.top}>
          <ul className={style.tags}>
            {categories.map((item) => (
              <li
                onClick={() => setCategoryId(item.id)}
                className={categoryId === item.id ? style.active : ""}
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <input
            className={style.search_input}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск по названию"
          />
        </div>
        {isLoading ? (
          <>
            <Loading />
          </>
        ) : (
          <div className={style.content}>
            {collections
              .filter((item) =>
                item.name.toLowerCase().includes(search.toLocaleLowerCase())
              )
              .map((obj, i) => (
                <Collection
                  key={i}
                  style={style}
                  name={obj.name}
                  images={obj.photos}
                />
              ))}
          </div>
        )}
        <ul className={style.pagination}>
          {[...Array(3)].map((item, index) => (
            <li key={index + 1} onClick={() => setPage(index + 1)} className={page === (index + 1) ? style.active : ''}>{index + 1}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PhotoCollection;
