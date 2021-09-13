import { Title } from "../atoms/title";
import { Paragraph } from "../atoms/paragraph";
import { useEffect, useState } from 'react';
const axios = require('axios');

export const Session = () => {

  const [sessions, setSessions] = useState();

  useEffect(() => {
    const getSessions = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/sessions');
        setSessions(res.data)
      } catch(e){
        console.log(e);
      }
    }; getSessions();
  }, [])
 
  
        return(
          <>
          {sessions && sessions.map((session, index) => {
            return(
              <div key={index}>
              <Title text={session.name}/>
              <Paragraph text={session.description} />
              </div>
            )
          })}
          </>) 
}    ;
