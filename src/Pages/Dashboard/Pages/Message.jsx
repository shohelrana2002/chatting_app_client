import MessageItemLeft from "../../../Components/MessageItems/MessageItemLeft";
import MessageItemRight from "../../../Components/MessageItems/MessageItemRight";
import { Helmet } from "react-helmet";

const Message = () => {
  return (
    <div className="flex gap-x-4 justify-between">
      <Helmet>
        <title>Chatting || Message</title>
      </Helmet>
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
