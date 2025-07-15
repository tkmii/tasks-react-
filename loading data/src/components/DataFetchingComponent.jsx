import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';
import FilteredList from './FilteredList';
import './DataFetchingComponent.css';

function DataFetchingComponent({ searchTerm }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    staleTime: 60_000,
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div className='error'>Error</div>
      ) : (
        <FilteredList data={data} searchTerm={searchTerm} />
      )}
    </>
  );
}

export default DataFetchingComponent;