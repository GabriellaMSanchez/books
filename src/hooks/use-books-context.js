import { useContext } from 'react';
import BooksContext from '../context/books';

// Custom hook to help call BooksContext
function useBooksContext() {
    return useContext(BooksContext);
}

export default useBooksContext;
