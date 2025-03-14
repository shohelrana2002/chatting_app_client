import React from "react";
import MessageItemLeft from "../../../Components/MessageItems/MessageItemLeft";
import MessageItemRight from "../../../Components/MessageItems/MessageItemRight";

const Message = () => {
  return (
    <div className="flex gap-x-4 justify-between">
      <div>
        <MessageItemLeft />
      </div>
      <div className="flex-1">
        <MessageItemRight />
      </div>
    </div>
  );
};

export default Message;
<p>Message</p>;
