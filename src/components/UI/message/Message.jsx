import cl from './Message.module.css'

const Message = ({message}) => {

    const formattedCreatedDate = message.timeCreated == null ? "null" : new Date(message.timeCreated).toLocaleString('en-UK', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).replace(/\//g, '.');

  return (
    <div className={cl.container}>
      <div>
        <p className={cl.header__text}>{formattedCreatedDate}<br/>id:{message.id}</p>
        <p className={cl.message__content}>{message.message}</p>
      </div>
    </div>
  );
};

export default Message;
