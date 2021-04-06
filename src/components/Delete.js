import deleteIcon from "../icons/delete-black-24dp.svg";
import db from "../firebase";

function Delete({ id }) {
  const remove = () => {
    let sure = window.confirm("Are you sure you want to delete this?");

    if (sure === true) {
      db.collection("messages").doc(`${id}`).delete();
    }
  };

  return (
    <div>
      <img
        className="icon"
        onClick={remove}
        src={deleteIcon}
        alt="deleteIcon"
      />
    </div>
  );
}

export default Delete;
