import React, { useState } from 'react'
import {MDBContainer, MDBCard, MDBCardTitle, MDBCardBody, MDBCardFooter, MDBBtn, MDBTypography} from 'mdb-react-ui-kit'
import {Link} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
    const {user, logout} = useAuth()
    console.log(user)
    const [error, setError] = useState()

  return (
    <MDBContainer className='d-flex align-items-center justify-content-center'>
        <MDBCard  style={{width: "600px"}} >
            <MDBCardTitle className='mt-2 text-center' >
                <strong style={{fontWeight: "400", color: "#000", marginBottom: "10px"}}>User Profile</strong>
            </MDBCardTitle>
            {
                    error && <MDBTypography className='ms-4 me-4' note noteColor='danger'>
                    <strong>Error:</strong> {error}
                </MDBTypography>
            }
            <MDBCardBody>
                <div style={{
                    flexDirection: "column"
                }} className='d-flex align-items-center justify-content-center'>
                    <img className='rounded-circle shadow' style= {{
                    width: "100px"
                    }}  src='https://mdbootstrap.com/img/new/avatars/1.jpg' alt = ''/> 
                    <span className='h3 mt-2'>{String(user?.email).split('@')[0]}</span>
                    <MDBBtn className='mt-3' outline rounded onClick={() => logout()} >
                        Logout
                    </MDBBtn>
                </div>
                
                
                
            </MDBCardBody>
            <MDBCardFooter>
                
                <div className='d-flex align-item-center justify-content-center'>
                    <span>Need Changes? </span>
                    <Link to = '/update-profile'>
                        <span className='ms-1'>Update Profile</span>
                    </Link>
                </div>
            </MDBCardFooter>
        </MDBCard>
    </MDBContainer>
  )
}

export default Dashboard