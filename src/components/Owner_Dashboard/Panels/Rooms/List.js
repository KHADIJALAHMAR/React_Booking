import React from 'react'
import Header from '../Header';
import Item from './Item';

function List({title, handleDeleteObject}) {
  return (
    <div>
      <Header title={title} />
      <div className="card-body px-0 pb-2">
        <div className="table-responsive">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Rooms description
                </th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Rooms quantity
                </th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Rooms Price
                </th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Rooms Type
                </th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <Item handleDeleteObject={handleDeleteObject} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default List