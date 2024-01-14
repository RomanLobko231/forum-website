import cl from "./SortSelect.module.css"


const SortSelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select className={cl.select__container} value={value} onChange={event => onChange(event.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option=>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
            )}
    </select>
  );
};

export default SortSelect;
