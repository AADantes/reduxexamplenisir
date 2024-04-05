
import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {setBooks, setSelectedBook} from '../../../redux/Actions/BookActions';
import http from '../../../http';

export default function AddBook() {

    const [bookname,setBookname] = useState('');
    const [description,setDescription] = useState('');
    const dispatch = useDispatch();
    const books = useSelector((state) => state.allBooks.books);
    
    const singlebook = useSelector((state) => state.singlebook);

    const addbook=()=> 
    {
     const newbook={
      bookname:bookname,
      description:description,
      status:'Available'
    }

    http.post(`books`, newbook).then((result) => {
      console.log(result.data);
    }).catch(error => {
        console.log(error.message);
    });
    // const oldBook = getBookData();\
    getBookData();
    // dispatch(setBooks(oldBook));
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

    



    const updatebook=()=>
    {
      const updatedbook={
        id:singlebook.id,
        bookname:bookname,
        description:description,
        status:'Active'
      }

      const bookdatabase={
        bookname:bookname,
        description:description,
        status:'Active'
      }

      http.put(`books/${singlebook.id}/edit`, bookdatabase).then((result) => {
        console.log(result.data);
      }).catch(error => {
          console.log(error.message);
      });

      const oldBook = [...books];
      const bookindex = oldBook.findIndex((book) => book.id===singlebook.id);
      console.log(bookindex);
      oldBook.splice(bookindex,1,updatedbook);
      dispatch(setBooks(oldBook));

      singlebook.bookname='';
      singlebook.description='';
      singlebook.state='Active';
      dispatch (setSelectedBook(singlebook));

      setBookname('');
      setDescription('');
    }

      useEffect(()=>
      {
        if(singlebook.bookname === ''){

        }
        else
        {
          setBookname(singlebook.bookname);
          setDescription(singlebook.description);
        }

      },[singlebook])


  return (
    <>
            <div className="book-form">
    <input type="text"  value ={bookname} placeholder="Enter book name" onChange={(e)=> setBookname(e.target.value)}/>
    <input type="text"  value ={description} placeholder="Enter Description" onChange={(e)=> setDescription(e.target.value)}/>

    {
      singlebook.state==='UPDATING' ?
      <button onClick={()=>updatebook()} className="update-student">Update</button>
      :
      <button onClick={()=>addbook()} className="add-student">Add</button>
    }
 </div>
    </>
  )
}
