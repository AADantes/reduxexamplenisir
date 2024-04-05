import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setSelectedStudent, setStudent } from '../../../redux/Actions/libraryActions';
import http from '../../../http';

export default function DisplayStudent() {

    const students = useSelector((state) => state.allStudents.students);
    const dispatch = useDispatch();


    const GetStudentId =(id)=>{


    const singlestudent= students.find((student)=>student.id===id);
      singlestudent.state="UPDATING";

    dispatch (setSelectedStudent(singlestudent))
    console.log(singlestudent);

  }

  const GetRemoveId = (id) =>
  {
    const singlestudent1= students.find((student)=>student.id===id);
    singlestudent1.state="REMOVED";

    const oldStudent = [...students];
      const studentindex = oldStudent.findIndex((student) => student.id===id);


      oldStudent.splice(studentindex,1,singlestudent1);
      dispatch(setStudent(oldStudent));
      console.log(students);

      http.delete(`students/${singlestudent1.id}/delete`).then((result) => {
      
        console.log(result.data);
  
      }).catch(error => {
          console.log(error.message);
      });


  /*dispatch (setSelectedStudent(singlestudent))*/
  }



  const getStudentData=()=>
  {
    http.get(`students`).then((result) => {
      
      console.log(result.data);
      dispatch(setStudent(result.data[0]));

    }).catch(error => {
        console.log(error.message);
    });
  }
  useEffect(() =>
  {
    getStudentData();

  },[]);


  return (
                        <table className="student-table">
                          <thead>
                          <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Status</th>
                        </tr>
                          </thead>

      <tbody>
        {
          students.filter((student)=>student.state!=='REMOVED').map((students) => {
            return(
              <tr key={students.id}>
                <td>{students.id}</td>
                <td>{students.firstname}</td>
                <td>{students.lastname}</td>
                <td>{students.status}</td>
                <td>

                  <button onClick={() => GetStudentId(students.id)}>Edit</button>
                  &nbsp;
                  <button onClick={() => GetRemoveId(students.id)}>Delete</button>
                </td>
            </tr>
            )
    })

        }

      </tbody>
      
  </table>
  )
  
}
