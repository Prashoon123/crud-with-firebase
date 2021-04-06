import editIcon from "../icons/create-black-24dp.svg";
import db from "../firebase";

function Update({ id }) {
  const update = () => {
    const updated = prompt("Enter the updated message");

    if (!updated) {
      return;
    }
    const doc = db.collection("messages").doc(`${id}`);
    const update = doc.update({
      message: updated,
    });
  };

  return (
    <div>
      <img className="icon" onClick={update} src={editIcon} alt="editIcon" />
    </div>
  );
}

export default Update;
