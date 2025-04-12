import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner as BootstrapSpinner} from 'react-bootstrap'

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh'}}>
      <BootstrapSpinner animation="border" variant='#085E83' role="status">
        <h4 className='sr-only'></h4>
      </BootstrapSpinner>
    </div>
  );
};

export default Spinner
