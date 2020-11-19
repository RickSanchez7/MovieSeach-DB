import React from 'react';

import Loader from '../assets/loading-gif2.gif';

const loading = () => {
  return (
    <div className='loader'>
      <img src={Loader} alt='loading gif' />
    </div>
  );
};

export default loading;
