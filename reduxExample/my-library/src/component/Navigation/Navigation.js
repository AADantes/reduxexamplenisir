import React from 'react'
import {Link, useParams} from "react-router-dom";

export default function Navigation() {
  return (
    <div className='navigation'>

        <ul>
            <li><Link to="/"> Student </Link> </li>
            <li><Link to="/book"> Book</Link></li>
            <li></li>
        </ul>
    </div>
  )
}
