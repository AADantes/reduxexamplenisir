import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import http from '../../../http';
import { setSelectedBook, setBooks } from '../../../redux/Actions/BookActions';

export default function DisplayBook() {

    const books = useSelector((state) => state.allBooks.books);
    console.log(books);
    const dispatch = useDispatch();

    const GetBookId =(id)=>{
      console.log(id);
  
  
      const singlebook= books.find((book)=>book.id===id);
        singlebook.state="UPDATING";
  
      dispatch (setSelectedBook(singlebook))
      console.log(singlebook);
  
    }

    
  const GetRemoveId = (id) =>
  {
    const singlebook1= books.find((book)=>book.id===id);
    singlebook1.state="REMOVED";


    const oldBook = [...books];
      const bookindex = oldBook.findIndex((book) => book.id===id);
     
      oldBook.splice(bookindex,1,singlebook1);
      dispatch(setBooks(oldBook));
      console.log(books);

      http.delete(`books/${singlebook1.id}/delete`).then((result) => {
      
        console.log(result.data);
      }).catch(error => {
          console.log(error.message);
      });


  }

  const getBookData=()=>
  {
    http.get(`books`).then((result) => {
      
      console.log(result.data);
      dispatch(setBooks(result.data[0]));

    }).catch(error => {
        console.log(error.message);
    });
  }
  useEffect(() =>
  {
    getBookData();

  },[]);


  return (
    
    <table className="book-table">
      <thead>
      <tr>
          <th>#</th>
          <th>Book Name</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>



<tbody>
{
  books.filter((book)=>book.state!=='REMOVED').map((book) => {
    return(
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>{book.bookname}</td>
        <td>{book.description}</td>
        <td>{book.status}</td>

        <td>

                  <button onClick={() => GetBookId(book.id)}>Edit</button>
                  &nbsp;
                  <button onClick={() => GetRemoveId(book.id)}>Delete</button>
                </td>

    </tr>
    )
})

}
</tbody>
</table>
  )
}