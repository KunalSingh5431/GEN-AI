import React from 'react'
import styled from 'styled-components'
import Button from "./buttons/button"
import {AddRounded,WebRounded} from "@mui/icons-material"
import { useNavigate,useLocation } from 'react-router-dom'

const Container=styled.div`
flex:1;
background:${({theme})=>theme.navbar};
color:${({theme})=>theme.text_primary};
font-weight:bold;
font-size:22px;
padding:14px 50px;
display:flex;
justify-content:space-between;
align-items:center;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
@media only screen and (max-width:600px) {
  padding:10px 12px;

}
`

const Navbar = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const path=location.pathname.split("/");

  return (
   <Container>
    GENAI
    {path[1] === "post" ? (
        <Button
          text="Explore Posts"
          leftIcon={<WebRounded style={{ fontSize: "18px" }} />}
          onClick={()=>navigate("/")}
          type="secondary"
        />
      ) : (
        <Button
          text="Create new post"
          leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
          onClick={()=>navigate("/post")}
        />
      )}
   </Container>
  )
}

export default Navbar
