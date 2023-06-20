import React from 'react'

import Button from '../components/Button';

function ModalWindow (props) {
  const [modal ,setModal] = React.useState(false);
  
  
  return (
    <div className="h-screen flex flex-col justify-center">
      <Button
        onClick={() => {
          return setModal(true);
        }}
        bgColor={"gray"}
      >
        Открыть модальное окно
      </Button>
      <div
        className={`absolute top-0 left-0 w-screen h-screen bg-gray-800/[.6] overlay ${
          modal ? "show" : ""
        }`}
      >
        <div className=" bg-white max-w-md rounded-md p-7 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 modal">
          <button
            onClick={() => setModal(false)}
            className=" border rounded-md absolute top-2 right-2"
          >
            esc
          </button>
          <h3 className="text-xl my-3">Контент внутри модального окна</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta
            ea, quia animi error suscipit pariatur cum harum aspernatur, vel,
            consequatur adipisci. Dolore dignissimos molestias tenetur
            accusantium veniam unde magnam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;