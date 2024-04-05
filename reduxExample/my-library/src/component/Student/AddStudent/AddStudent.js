
import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {setStudent, setSelectedStudent} from '../../../redux/Actions/libraryActions';
import http from '../../../http';
import {toast} from react-toastify;


export default function AddStudent() {


    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const dispatch = useDispatch();
    const students = useSelector((state) => state.allStudents.students);

    const singlestudent = useSelector((state) => state.singlestudent);

    const addstudent=()=> 
    {
     const newstudent={
      firstname:firstname,
      lastname:lastname,
      status:'Active'
    }


    http.post(`students`, newstudent).then((result) => {
      
      if (result.data === '1'){
        console.log("Created Student");
      }
      else if (result.data === '2')
      {
        console.log("Student Already Exists");
      }
    }).catch(error => {
        console.log(error.message);
    });
      getStudentData();
    }

    const getStudentData=()=>
    {
      http.get(`students`).then((result) => {
        if (result.data == '1'){
          console.log("Created Student");
        }
        else 
          console.log("Student Already Exists");
        dispatch(setStudent(result.data[0]))
  
      }).catch(error => {
          console.log(error.message);
      });
    }




    const updatestudent=()=>
    {
      const updatedstudent={
        id:singlestudent.id,
        firstname:firstname,
        lastname:lastname,
        status:'Active'
      }

      const studentdatabase={
        firstname:firstname,
        lastname:lastname,
        status:'Active'
      }


      http.put(`students/${singlestudent.id}/edit`, studentdatabase).then((result) => {
        console.log(result.data);

      }).catch(error => {
          console.log(error.message);
      });


      const oldStudent = [...students];
      const studentindex = oldStudent.findIndex((student) => student.id===singlestudent.id);

      oldStudent.splice(studentindex,1,updatedstudent);
      dispatch(setStudent(oldStudent));

      singlestudent.firstname='';
      singlestudent.lastname='';
      singlestudent.state='Active';
      dispatch (setSelectedStudent(singlestudent));

      setFirstname('');
      setLastname('');
    }

      useEffect(()=>
      {

        if(singlestudent.firstname === ''){

        }
        else
        {
          setFirstname(singlestudent.firstname);
          setLastname(singlestudent.lastname);
        }


      },[singlestudent])

  return (
    <>
            <div className="student-form">
    <input type="text" value ={firstname} placeholder="Enter first name" onChange={(e)=> setFirstname(e.target.value)}/>
    <input type="text" value ={lastname} placeholder="Enter last name" onChange={(e)=> setLastname(e.target.value)}/>

    {
      singlestudent.state==='UPDATING' ?
      <button onClick={()=>updatestudent()} className="update-student">Update</button>
      :
      <button onClick={()=>addstudent()} className="add-student">Add</button>
    }


 </div>
    </>
  )
}
