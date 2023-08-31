import React from "react";
import styled from "styled-components";

function Photographer({id, username}){

    return(
        <Card className="flex-container">
            <img src="https://i.imgur.com/3Kdbmg4.png" alt="avatar"/>
            <Container>
                <h4><b>{username}</b></h4>

            </Container>
        </Card>

    )
}

export default Photographer;

const Card = styled.div`
align-items: center;
padding: 20px 20px 20px 16px;
display: flex;
flex-direction: row;
    color:black;
    margin: auto;
    text-align: center;
    font-family: "Times New Roman", Times, serif
    border: 2px;
    border-color: black;
    transition: 0.3s;
    a:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    img {
        width: 150px;
    }
`
  
const Container = styled.div`
    padding: 2px 16px;
`