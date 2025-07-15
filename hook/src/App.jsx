import { useFetch } from './hooks/useFetch';
import Spinner from './components/Spinner'
import List from './components/List'
import Error from './components/Error'
import './App.css';

function App() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      {error && <Error />}
      {loading && <Spinner />}
      {!loading && !error && data && <List data={data} />}
    </>
  );
}

export default App;