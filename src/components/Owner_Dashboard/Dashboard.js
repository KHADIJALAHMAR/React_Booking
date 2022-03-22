import React, {useState} from 'react'
import Cards from './Cards/Cards';
import { Link } from "react-router-dom";
import Delete from "./Crud/Delete";
import Panel from "./Panels/Panel";
import Update from "./Crud/Room/UpdateRoom";

// import List from "../Owner_Dashboard/Panels/Hotels/List";

import NavBar from '../Shared_Elements/NavBar';

function Dashboard() {
  const [visible_popup, setPopupVisibility] = useState(false);
  const [panel, setPanel] = useState("Hotels")
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
    <>
      <NavBar title='Owner Dashboard' dashboard={false} />
      <div>
        <Cards setPanel={handlePanel} />
        <Panel title={panel} handleDeleteObject={handleDeleteObject} />
        <Delete
          type={deleteObject[0]}
          id={deleteObject[1]}
          visible={visible_popup}
          handlePopupVisibility={handlePopupVisibility}
        />
      </div>
    </>
  );
}


export default Dashboard;
