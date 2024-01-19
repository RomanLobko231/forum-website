import SortSelect from '../select/SortSelect';
import cl from './MobileTopicHeader.module.css'


const MobileTopicHeader = ({filter, setFilter, setVisible}) => {
  return (
    <div className={cl.container}>
      <h1>General</h1>
      <button className={'button'} onClick={() => setVisible(true)}>Create new</button>
      <div className={cl.filter__fields}>
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
      </div>
    </div>
  );
};

export default MobileTopicHeader;
