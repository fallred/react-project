import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
  const [query, setQuery] = useState('');
  const [filterList, setFilterList] = useState(foods);
  function handleChange(value) {
    setQuery(value);
    const list = filterItems(foods, value);
    setFilterList(list);
  }
  return (
    <>
      <SearchBar value={query} onChange={handleChange} />
      <hr />
      <List items={filterList} />
    </>
  );
}

function SearchBar({value, onChange}) {
  // const [query, setQuery] = useState('');

  function handleChange(e) {
    // setQuery(e.target.value);
    onChange(e.target.value);
  }

  return (
    <label>
      搜索：{' '}
      <input
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
