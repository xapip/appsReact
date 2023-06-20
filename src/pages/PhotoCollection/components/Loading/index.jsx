import React from 'react'

import styleLoad from './loading.module.scss'

function Loading (props) {
  
  return (
    <div className={styleLoad.preloader}>
      <div className={styleLoad.loader}></div>
    </div>
  );
}

export default Loading;