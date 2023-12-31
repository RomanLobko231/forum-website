
const MessagesList = ({messages}) => {
  return (
    <div>
      {messages.map(mess => 
                <p>{mess.message}</p>
            )}
    </div>
  );
};

export default MessagesList;
