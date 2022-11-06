import React from 'react'
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(function 
    SecretRoute(req,res) {
   
  const session = getSession(req, res)
  console.log(session)
  res.status(200).json(session)
  
  // const user = session.user
  // res.status(200).json(user)
  
})


