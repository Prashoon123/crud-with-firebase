import { useRef } from "react";
import "./App.css";
import firebase from "firebase";
import db from "./firebase";
import Delete from "./components/Delete";
import Update from "./components/Update";
import Copy from "./components/Copy";
import { v4 as uuid } from "uuid";
import { useCollection } from "react-firebase-hooks/firestore";
function App() {
  const inputValue = useRef();
  const [messages] = useCollection(
    db.collection("messages").orderBy("createdAt", "asc")
  );

  const submit = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: inputValue.current.value,
      id: uuid(),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    inputValue.current.value = "";
  };

  return (
    <div className="App">
      <form className="inputContainer">
        <input ref={inputValue} type="text" placeholder="Enter message" />
        <button type="submit" onClick={submit}>
          Submit
        </button>
      </form>
      {messages?.docs.map((message) => (
        <>
          <div className="glass">
            <h1>{message.data().message}</h1>
            <div style={{ height: 10 }} />
            <div className="icons">
              <Update id={message.id} />
              <Delete id={message.id} />
              <Copy text={message.data().message} />
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default App;
