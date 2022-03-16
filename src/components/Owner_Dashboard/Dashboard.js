import React ,{useState} from "react";
import { Link } from "react-router-dom";
import {Delete }from "./Crud/Delete";
// import List from '../Owner_Dashboard/Panels/Hotels/List'
import Cards from './Cards/Cards';
import Panel from "./Panels/Panel";
import Update from "./Crud/Room/UpdateRoom";

// import List from "../Owner_Dashboard/Panels/Hotels/List";
  function Dashboard() {


  const [panel, setPanel] = useState("Hotels");
  const [visible_popup, setPopupVisibility] = useState(false);
  const [deleteObject, setDeleteObject] = useState([]);

  const handlePanel = (panel) => {
    setPanel(panel);
  };
 

  const handleDeleteObject = async (type, id) => {
    await setDeleteObject([type, id]);
    handlePopupVisibility();
  };
  const handlePopupVisibility = () => {
    setPopupVisibility(!visible_popup);
  };
  
  return (
    <div>
      <Cards setPanel={handlePanel} />
      <Panel title={'Hotels'} handleDeleteObject={handleDeleteObject} /> 
      <Link
                class="btn btn-link text-dark px-3 mb-0"
                to={"/dashboardowner/Room/update/622a388d71a0ad593fc9de91"}
              >
                <i
                  class="fas fa-pencil-alt text-dark me-2"
                  aria-hidden="true"
                ></i>
                Edit
              </Link>
      <Delete
        type={deleteObject[0]}
        id={deleteObject[1]}
        visible={visible_popup}
        handlePopupVisibility={handlePopupVisibility}
      />
    </div>
  );
}

export default Dashboard;
