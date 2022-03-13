import React, { useState } from "react";
import Delete from "./Crud/Delete";
import List from "../Owner_Dashboard/Panels/Hotels/List";
import Panel from "./Panels/Panel";


function Dashboard() {
  const [visible_popup, setPopupVisibility] = useState(false);
  const [deleteObject, setDeleteObject] = useState([]);

  const handleDeleteObject = async (type, id) => {
    await setDeleteObject([type, id]);
    handlePopupVisibility();
  };

  const handlePopupVisibility = () => {
    setPopupVisibility(!visible_popup);
  };

  return (
    <div>
      <Panel title={'Hotels'} handleDeleteObject={handleDeleteObject} />
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
