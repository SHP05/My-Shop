import { useState } from 'react';
import Products from '../../Data';
import Card1 from '../../UI/Card1/Card1';

const Filter = () => {
    const [query, setQuery] = useState("");
    return (
        <>
        <div className='filter'>
        <input
          className="search-box"
          placeholder="Search your Favourite Product"
          value={query}
          onChange={(event) => (event.target.value)}
        />
      </div>
      <div className="card-group">
        {
        // eslint-disable-next-line array-callback-return
        Products.length && Products.filter((p) => {
          if (query === "") {
            //if query is empty
            return null;
          } else if (p.name.toLowerCase().includes(query.toLowerCase())) {
            //returns filtered array
            return p;
          }
        }).map((p) => (
          <Card1 data={p}/>
        ))}
      </div>
        </>
    )
}
export default Filter;