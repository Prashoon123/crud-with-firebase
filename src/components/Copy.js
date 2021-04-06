import copyIcon from "../icons/content_copy_black_24dp.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Update({ text }) {
  return (
    <div>
      <CopyToClipboard text={text} onCopy={() => alert("Copied to clipboard")}>
        <img className="icon" src={copyIcon} alt="copyIcon" />
      </CopyToClipboard>
    </div>
  );
}

export default Update;
