import React from 'react'
import {deleteHotel} from '../../../services/HotelService'
import {deleteUser} from '../../../services/UserService'
function Delete({type,id, visible , handlePopupVisibility}) {

    const handleDelete = () => {
        if (type === "hotel") {
            deleteHotel(id);
        }else if(type === "user") {
            deleteUser(id);
        }
    };

    return (
        <div className='popup' style={{display: visible ? 'block' : 'none'}} >
            <div className="popup_delete p-3">
                <h5 className='font-weight-bolder'>Delete {type}</h5>
                <p className="mb-1 pt-2 text-bold">Are you sure you want to delete this {type}</p>
                <div className='row mt-4'>
                    <button type="button" className="confirm_button px-2 py-1 mx-2" onClick={handleDelete} style={{backgroundColor: "rgb(201, 15, 15)"}}>Delete {type}</button>
                    <button type="button" className="cancel_button" onClick={handlePopupVisibility}>cancel</button>
                </div>
             </div>
        </div>
    )
}

export default Delete