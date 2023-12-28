import cl from "./TopicsHeader.module.css"

const TopicsHeader = ({setVisible}) => {
  return (
    <div>
      <h1>General</h1>
      <h2 className={cl.create__text} onClick={() => setVisible(true)}>Create new topic</h2>
    </div>
  );
};

export default TopicsHeader;
