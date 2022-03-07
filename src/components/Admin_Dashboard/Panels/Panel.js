
import React from 'react'
import ListHotel from './Hotels/List'
import ListOwner from './Owners/List'
import ListCustomer from './Customers/List'
import Header from "./Customers/Header";

// function Panel({title}) {
//   return (
//     <>
//     {title === 'Owners' && <ListOwner />}
//     {title === 'Hotels' && <ListHotel/>}
//     {title === 'Customers' && <ListCustomer />}
//     </>
//   )
// }

const Panel = () => {
  return (
    <div>
      <div className="container-fluid py-4">
        <div className="row my-4">
          <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
            <div class="card">
              <Header />
              <ListCustomer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
