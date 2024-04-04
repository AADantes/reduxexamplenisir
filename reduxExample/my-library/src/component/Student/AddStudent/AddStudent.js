
import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {setStudent, setSelectedStudent} from '../../../redux/Actions/libraryActions';
import http from '../../../http';

export default function AddStudent() {


    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const dispatch = useDispatch();
    const students = useSelector((state) => state.allStudents.students);

    const singlestudent = useSelector((state) => state.singlestudent);

    console.log(singlestudent);
    const addstudent=()=> 
    {
     const newstudent={
      firstname:firstname,
      lastname:lastname,
      status:'Active'
    }


    http.post(`students`, newstudent).then((result) => {
      console.log(result.data);
    }).catch(error => {
        console.log(error.message);
    });
    const oldStudent = [...students];
    oldStudent.push(newstudent);
    dispatch(setStudent(oldStudent));
    }

    // const getStudentData=()=>
    // {
    //   http.get(`students`).then((result) => {
    //     console.log(result.data);
    //     return result.data;
  
    //   }).catch(error => {
    //       console.log(error.message);
    //   });
    // }




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


      http.put(`students/${singlestudent.id}`, studentdatabase).then((result) => {
        console.log(result.data);
      }).catch(error => {
          console.log(error.message);
      });



      const oldStudent = [...students];
      const studentindex = oldStudent.findIndex((student) => student.id===singlestudent.id);
      console.log(studentindex);
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
