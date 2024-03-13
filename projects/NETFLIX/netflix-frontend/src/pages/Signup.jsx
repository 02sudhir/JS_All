import React from 'react';
import styled from 'styled-components';
import Backgroundimage from '../component/Backgroundimage';
import Header from '../component/Header';

export default function Signup() {
  return (
    <Container>
        <Backgroundimage />
        <div className='content'>
        <Header/>
        <div  className='body flex column a center j center '>
            <div className='text flex column'>
                <h1>Unlimited Movies ,TV Shows and Momre</h1>
                <h4>watch Anywhere cancel Anytime.</h4>
                <h6>Ready to Watch ? enter Your Email to Craete or Restart membership</h6>
            </div>
            <div className='form'>
                <input type='email' placeholder='Email Address' name='email' />
                <input type='passsword'  placeholder='Passsword ' name='passsword'/>
                <button>Get Started</button>
            </div>
            <button>Log in</button>
        </div>
        </div>
    </Container>
    
  )
}

const Container = styled.div`
    position:relative;
    .content{
        position:absolute;
        top:0;
        left:0;
        background-color:rgba(0,0,0,0.5);
        height:100vh;
        width:100vw;
        display:grid;
        grid-template-rows:15vh 85vh;
    }`;
