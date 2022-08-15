import React, { useState } from 'react'
import {MDBContainer, MDBCard, MDBCardTitle, MDBCardBody, MDBCardFooter, MDBInputGroup, MDBBtn, MDBTypography, MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane} from 'mdb-react-ui-kit'
import {Link} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const UpdateProfile = () => {
    const {user, updateUserEmail, updateUserPassword} = useAuth()
    console.log(user)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const [fillActive, setFillActive] = useState('tab1');
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  const handleEmailSubmit = async(e) => {
    e.preventDefault()
    await updateUserEmail(user, email).then((res) => {
        console.log(res)
        setSuccess('Email updated success')
    }).catch((err) => {
        setError(err.message)
    })
  } 

  const handlePasswordSubmit = async(e) => {
    e.preventDefault()
    await updateUserPassword(user, password).then((res) => {
        console.log(res)
        setSuccess('Password updated success')
    }).catch((err) => {
        setError(err.message)
    })
  } 

  return (
    <MDBContainer className='d-flex align-items-center justify-content-center'>
        <MDBCard  style={{width: "600px"}} >
            <MDBCardTitle className='mt-2 text-center' >
                <strong style={{fontWeight: "400", color: "#000", marginBottom: "10px"}}>Update Profile</strong>
            </MDBCardTitle>
            {
                success && <MDBTypography className='ms-4 me-4' note noteColor='success'>
                <strong>Success:</strong> {success}
            </MDBTypography>
            }
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
                </div>
                <MDBTabs fill className='mb-3'>
                    <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                        Update Email
                    </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                        Update Password
                    </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>
                    <MDBTabsPane show={fillActive === 'tab1'}>
                      <form onSubmit={handleEmailSubmit} >  
                    <MDBInputGroup className='mb-3'>
                        <input vlaue={email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder="Enter new email" type='text' />
                        <MDBBtn outline>Update</MDBBtn>
                    </MDBInputGroup></form>
                    </MDBTabsPane>
                    <MDBTabsPane show={fillActive === 'tab2'}>
                    <form onSubmit={handlePasswordSubmit}>
                    <MDBInputGroup className='mb-3'>
                        
                        <input vlaue={password} onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder="Enter new password" type='text' />
                        <MDBBtn outline>Update</MDBBtn>
                        
                    </MDBInputGroup>
                    </form>
                    </MDBTabsPane>
                </MDBTabsContent>
                            
            </MDBCardBody>
            <MDBCardFooter>
                
                <div className='d-flex align-item-center justify-content-center'>
                    <span>Back to? </span>
                    <Link to = '/'>
                        <span className='ms-1'>Profile</span>
                    </Link>
                </div>
            </MDBCardFooter>
        </MDBCard>
    </MDBContainer>
  )
}

export default UpdateProfile