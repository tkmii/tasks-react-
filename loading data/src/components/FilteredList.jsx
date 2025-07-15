import './FilteredList.css';

function FilteredList({ data, searchTerm }) {
  const filteredData = data.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {filteredData.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul className='list'>
          {filteredData.map((user) => (
            <li className='item' key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default FilteredList;