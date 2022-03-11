import React ,{useState} from "react";
import Delete from "./Crud/Delete";

 export default function Dashboard() {
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
      <a
        class="btn btn-link text-danger text-gradient px-3 mb-0"
        onClick={(e) => {
          e.preventDefault();
          handleDeleteObject("Room", "622a388d71a0ad593fc9de91");
        }}
        href="javascript:;"
      >
        <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
      </a>
      <Delete
        type={deleteObject[0]}
        id={deleteObject[1]}
        visible={visible_popup}
        handlePopupVisibility={handlePopupVisibility}
      />
    </div>
  );
}
