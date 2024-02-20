import React from 'react';
import { Oval } from 'react-loader-spinner';

const LoadingComponent = () => {
  return (
    <Oval
      visible={true}
      height="100"
      width="100"
      color="black"
      secondaryColor="white"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default LoadingComponent;
