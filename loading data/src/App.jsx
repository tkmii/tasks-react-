import { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DataFetchingComponent from './components/DataFetchingComponent'
import Search from './components/Search';
import './App.css'

function App() {
  const queryClient = new QueryClient();
  const [value, setValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchTerm(value);
    }, 300); 

    return () => clearTimeout(timerId);
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      
      <QueryClientProvider client={queryClient}>
        <Search handleChange={handleChange} value={value} />
        <DataFetchingComponent searchTerm={searchTerm} />
      </QueryClientProvider>
    </>
  )
}

export default App
