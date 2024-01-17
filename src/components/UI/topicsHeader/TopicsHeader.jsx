import SortSelect from "../select/SortSelect";
import cl from "./TopicsHeader.module.css"

const TopicsHeader = ({filter, setFilter, setVisible}) => {
  return (
    <div className={cl.container}>
      <h1>General</h1>
      <div className={cl.actions__container}>
        <SortSelect 
        value={filter.sort}
        defaultValue="Sort By"
        options={[
            {value: 'numberOfMessages', name: 'Messages'},
            {value: 'likes', name: 'Most Liked'}
        ]}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}/>
        <input className={cl.query__input}
        type="text"
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Search"
        />
        <button className={'button'} onClick={() => setVisible(true)}>Create new</button>
      </div>
    </div>
  );
};

export default TopicsHeader;
