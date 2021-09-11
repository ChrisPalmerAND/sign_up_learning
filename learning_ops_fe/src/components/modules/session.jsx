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
          const response = await axios.get('http://127.0.0.1:8000/sessions/');
          console.log(response);
          return response;
        } catch (error) {
          console.error(error);
        }
      }
      //  do I need to call this? look at the other await functions first.
      
    const data = getSession();
    console.log(data);
    // this fails because it tries to run an empty array. 
    const allSessions = sessions.map((data, index) => {
        return(
            <div key={index}>
            <Title text={data.title}/>
            <Paragraph text={data.description} />
            </div>
            )
        })
    return allSessions;
}    ;
