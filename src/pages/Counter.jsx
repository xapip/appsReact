import React from 'react'

import Button from '../components/Button';

function Counter () {
  const [count ,setCount] = React.useState(0);

  
  return (
    <div className='h-screen flex flex-col justify-center'>
      <h1 className='text-7xl'>{count}</h1>
      <div className='flex justify-center gap-5 mt-10'>
        <Button onClick={() => setCount((prev) => ++prev)} bgColor='green'>+прибавить</Button>
        <Button onClick={() => setCount((prev) => --prev)} bgColor='red'>уменьшить-</Button>
      </div>
    </div>
  );
}

export default Counter;