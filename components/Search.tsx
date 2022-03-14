import React, { ChangeEvent } from 'react';
import useSearchBar from '../hooks/useSearchBar';

const Search = () => {
  const { handler, saveData } = useSearchBar();

  const onChanged = (evt: ChangeEvent<HTMLInputElement>) => {
    const val = evt.currentTarget.value as string;
    handler(val);
  };

  return (
    <div className="search">
      <div className="searchBar">
        <input type="search" onChange={onChanged} />
      </div>
      <hr />
      <div className="results">
        {saveData &&
          saveData.map((item, idx) => {
            return <div>{item}</div>;
          })}
      </div>
    </div>
  );
};

export default Search;
