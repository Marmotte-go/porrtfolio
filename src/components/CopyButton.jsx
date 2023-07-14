import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const CopyButton = ({email}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    console.log(email);
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };

  return (
      <button onClick={handleCopy}>
        <FontAwesomeIcon icon={faCopy} />
        {copied ? " Copied!" : " Copy Email"}
      </button>
  );
};

export default CopyButton;
