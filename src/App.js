import React from 'react'
import { Route, Routes } from 'react-router-dom';

import NavLink from './components/NavLink';
import Counter from './pages/Counter';
import ModalWindow from './pages/ModalWindow';
import Quiz from './pages/Quiz';
import UsersList from './pages/UsersList';
import Converter from './pages/Convertor';
import PhotoCollection from './pages/PhotoCollection'

function App() {
  return (
    <div className="">
      <header className="fixed w-full pt-5 bg-white shadow-md z-10">
        <NavLink
          linksName={[
            { id: 1, title: "счетчик", path: "/" },
            { id: 2, title: "модальное окно", path: "/modal" },
            { id: 3, title: "квиз игра", path: "/quiz" },
            { id: 4, title: "список пользователей", path: "/userList" },
            { id: 5, title: "конвертер валют", path: "/converter" },
            { id: 6, title: "коллекция фото", path: "/photos" },
          ]}
        />
        <hr className="mt-5" />
      </header>
      <div className="mx-auto text-center ">
        <div className="flex justify-center items-center self-center bg-indigo-600">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/modal" element={<ModalWindow />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/userList" element={<UsersList />} />
            <Route path="/converter" element={<Converter />} />
            <Route path="/photos" element={<PhotoCollection />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
