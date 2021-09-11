import { Title } from "../atoms/title";
import { Paragraph } from "../atoms/paragraph";
const axios = require('axios');

const sessions = [{
    "title": "Basic Wireframing",
    "description": "Basic Wireframing Description"
  },
  {
    "title": "Basic Protoyping",
    "description": "Basic Prototyping Description"
  },
  ]



  

export const Session = () => {
    async function getSession() {
        try {
          const response = await axios.get('https://8000-indigo-butterfly-sb395luj.ws-eu16.gitpod.io/sessions');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
    getSession();
    const allSessions = sessions.map((session, index) => {
        return(
            <div key={index}>
            <Title text={session.title}/>
            <Paragraph text={session.description} />
            </div>
            )
        })
    return allSessions;
}    ;
