const express = require('express');

const app = express();
const port = 3000; // You can choose any port you prefer
const ejsMate = require ('ejs-mate');
const methodOverride = require('method-override');
const path =require('path');
const cors = require('cors');

const bodyParser = require('body-parser');
const axios=require('axios');

app.use(express.static('public'));

app.use(cors());

app.engine('ejs'  , ejsMate)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
  res.render('home.ejs')
});

app.get('/counselor',(req,res)=>{
  res.render('counsel.ejs')
});

app.get('/counselor_NEP',(req,res)=>{
  res.render('counsel_NEP.ejs')
});

app.get('/roads',(req,res)=>{
  res.render('browser.ejs')
});

app.get('/class6',(req,res)=>{
  res.render('Class6-9.ejs')
});

app.get('/class12',(req,res)=>{
  res.render('Class10-12.ejs')
});

app.get('/marks',(req,res)=>{
  res.render('form.ejs')
});

app.get('/abt',(req,res)=>{
  res.render('about.ejs')
});



app.post('/submit', async (req, res) => {
  
  const result = await fetchDataFromOpenAI();

  
  res.render('output', { result });
});



const traits =[]
console.log(traits);

const fetch = require("node-fetch");

const API_KEY = "secret";

async function fetchDate() {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model:"gpt-3.5-turbo",

        messages: [
          { role: "system", content: "You are a career counselor who knows about NEP policy." },
          { role: "user", content: `my personality traits are ${traits.join(', ')} tell the best two career option for me prefer roles in Medical,Engineering and Commerce in 2 words only ` },
        ],
        max_tokens: 100,
      }),
    });
    //const response={"id":"chatcmpl-8WhOF5BCbOgRB3i2Z93pzIg0jvgrc","object":"chat.completion","created":1702803979,"model":"gpt-3.5-turbo-0613","choices":[{"index":0,"message":{"role":"assistant","content":"1. Event Coordinator\n2. Human Resources Manager"},"logprobs":null,"finish_reason":"stop"}],"usage":{"prompt_tokens":52,"completion_tokens":10,"total_tokens":62},"system_fingerprint":null}
    const data = await response.json();
    //data=response;
    console.log(JSON.stringify(data));
    console.log(traits);
    const firstChoice = data.choices[0];
    console.log(firstChoice);
    return firstChoice;
  } catch (error) {
    console.error("Error:", error.message);
  }
}


async function fetchNEP(){
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model:"gpt-3.5-turbo",

        messages: [
          { role: "system", content: "You are a career counselor who knows about NEP policy." },
          { role: "user", content: `1. Humanities:
          - Arabic
          - Assamese
          - Bengali
          - Bhutia
          - English Core
          - English Elective
          - French
          - German
          - Gujarati
          - Hindi Elective
          - Hindi Core
          - Hindustani Music (Melodic)
          - Hindustani Music (Percussion)
          - Hindustani Music (Vocal)
          - Home Science
          - Japanese
          - Kannada
          - Kashmiri
          - Kuchipudi
          - Legal Studies
          - Lepcha
          - Limboo
          - Malayalam
          - Manipuri
          - Marathi
          - Mizo
          - Nepali
          - Odia
          - Persian
          - Psychology
          - Punjabi
          - Russian
          - Sindhi
          - Sociology
          - Spanish
          - Sanskrit Core
          - Sanskrit Elective
          - Tamil
          - Tangkhul
          - Telugu (AP)
          - Telugu (Telangana)
          - Tibetan
          - Urdu Core
          - Urdu Elective
       
       2. Mathematics-computing:
          - Engg. Graphic
          - Mathematics
          - Computer Science
          - Applied Mathematics
          - Business Maths
       
       3. Vocational Education:
          - Retail Management
          - Information Technology
          - Fashion Studies
          - Automotive
          - Health care
          - IT and ITES
          - Construction
          - Plumbing
          - Tourism and Hospitality
          - Agriculture and Power
          - Apparel
          - Beauty
       
       4. Physical Education:
          - Physical Education
          - NCC
          - Yoga
       
       5. Arts Education:
          - Bharatanatyam
          - Carnatic Melodic
          - Carnatic Percussion
          - Carnatic Vocal
          - Dance Manipuri
          - Dance Odissi
          - Hindustani Music (Melodic)
          - Hindustani Music (Percussion)
          - Hindustani Music (Vocal)
          - Applied Arts (Commercial Art)
          - Painting
          - Graphic
          - Sculpture
          - Music
          - Dance
          - Theatre
       
       6. Social Science:
          - History
          - Geography
          - Political Science
          - Political Science (Hindi)
          - Psychology
          - Economics
          - Sociology
        
       
       7. Interdisciplinary:
          - Sustainability & Climate Change
          - Health
          - Media & Journalism
          - Indian Knowledge
          - KTPI
          - KTPI(Hindi)
          - Entrepreneurship
           - Business Studies
           - Accountancy
       
       8. Science:
          - Biology
          - Biotechnology
          - Chemistry
          - Physics
       My personality traits ${TRT.join(', ')} . Now give me exactly 3 subjects strictly from  4 categories from  above 8 categories (always include vocational education as a category).Also give answer for language only as "Foreign Languages" or "Indigenous indian language". give response in 4 points only ` },
        ],
        max_tokens: 100,
      }),
    });
    const data_2 = await response.json();
    console.log(JSON.stringify(data_2));
    console.log(TRT);
    const firstChoice_2 = data_2.choices[0];
    console.log(firstChoice_2);
    return firstChoice_2;

  } catch (error){
    console.error("Error: ",error.message);
  }
}




app.post('/answer', async(req, res) => {
  const { answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9,answer10,answer11 ,answer12, answer13,answer14,answer15 } = req.body;

  
  if (answer1 === 'option1') {
      traits.push("empathy");

      
  } 
  else if (answer1 === 'option2') {
      traits.push("empathy");

      
  }
  else if (answer1 === 'option3') {
    traits.push("enthusiasm");

    
  }

  else if (answer1 === 'option4') {
    traits.push("enthusiasm");

    
  }
  //---------------------------------------------------

  if (answer2 === 'option1') {
    traits.push("organized");
    
  } 
  else if (answer2 === 'option2') {
    traits.push("organized");
    
  }

  else if (answer2 === 'option3') {
    traits.push("flexibility");
    
  }

  else if (answer2 === 'option4') {
    traits.push("flexibility");
    
  }

  //----------------------------------------------------

  if (answer3 === 'option1') {
    traits.push("determination");
    
  } 
  else if (answer3 === 'option2') {
    traits.push("determination");
    
  }

  else if (answer3 === 'option3') {
    traits.push("self-awareness");
    
  }

  else if (answer3 === 'option4') {
    traits.push("self-awareness");
    
  }
  //-----------------------------------------------------

  if (answer4 === 'option1') {
    traits.push("committed");
    
  } 
  else if (answer4 === 'option2') {
    traits.push("committed");
    
  }

  else if (answer4 === 'option3') {
    traits.push("social openness");
    
  }

  else if (answer4 === 'option4') {
    traits.push("social openness");
    
  }

  //-------------------------------------------------------

  if (answer5 === 'option1') {
    traits.push("honesty");
    
  } 
  else if (answer5 === 'option2') {
    traits.push("honesty");

  }

  else if (answer5 === 'option3') {
    traits.push("fear of conflict");

  }

  else if (answer5 === 'option4') {
    traits.push("avoiding");

  }

  //---------------------------------------------------------

  if (answer6 === 'option1') {
    traits.push("Introversion");
    
  } 
  else if (answer6 === 'option2') {
    traits.push("Introversion");
   
    
  }

  else if (answer6 === 'option3') {
    traits.push("Extroversion");
   
    
  }

  else if (answer6 === 'option4') {
    traits.push("Extroversion");
   
    
  }
  //----------------------------------------------------------

  if (answer7 === 'option1') {
    traits.push("Sensing");
    
  } 
  else if (answer7 === 'option2') {
    traits.push("Sensing");
   
    
  }

  else if (answer7 === 'option3') {
    traits.push("Intuition");

   
    
  }

  else if (answer7 === 'option4') {
    traits.push("Intuition");
    
   
    
  }
  //-------------------------------------------------------------

  if (answer8 === 'option1') {
    traits.push("Thinking");
    
  } 
  else if (answer8 === 'option2') {
    traits.push("Thinking");
   
    
  }

  else if (answer8 === 'option3') {
    traits.push("Feeling");
   
    
  }

  else if (answer8 === 'option4') {
    traits.push("Feeling");
   
    
  }
  //-------------------------------------------------------------



  if (answer9 === 'option1') {
    traits.push("Judging");
    
  } 

  else if (answer9 === 'option2') {
    traits.push("Judging");
    
  } 
  else if (answer9 === 'option3') {
    traits.push("Perceiving");
   
    
  }

  else if (answer9 === 'option4') {
    traits.push("Perceiving");
   
    
  }
  //-------------------------------------------------------------

  if (answer10 === 'option1') {
    traits.push("Abrasive");
    
  } 

  else if (answer10 === 'option2') {
    traits.push("Abrasive");
    
  } 
  else if (answer10 === 'option3') {
    traits.push("Agreeable");
   
    
  }

  else if (answer10 === 'option4') {
    traits.push("Agreeable");
   
    
  }
  //----------------------------------------------------------------

  if (answer11 === 'option1') {
    traits.push("Neuroticism");
    
  } 

  else if (answer11 === 'option2') {
    traits.push("Neuroticism");
    
  } 
  else if (answer11 === 'option3') {
    traits.push("Independence");
   
    
  }

  else if (answer11 === 'option4') {
    traits.push("Independence");
   
    
  }
  //----------------------------------------------------------------

  if (answer12 === 'option1') {
    traits.push("Ambitious");
    
  } 

  else if (answer12 === 'option2') {
    traits.push("Ambitious");
    
  } 
  else if (answer12 === 'option3') {
    traits.push("Compassionate");
   
    
  }

  else if (answer12 === 'option4') {
    traits.push("Compassionate");
   
    
  }
  //----------------------------------------------------------------


  if (answer13 === 'option1') {
    traits.push("Intelligence");
    
  } 

  else if (answer13 === 'option2') {
    traits.push("Intelligence");
    
  } 
  else if (answer13 === 'option3') {
    traits.push("Creative");
   
    
  }

  else if (answer13 === 'option4') {
    traits.push("Creative");
   
    
  }
  //----------------------------------------------------------------

  if (answer14 === 'option1') {
    traits.push("Technical");
    
  } 

  else if (answer14 === 'option2') {
    traits.push("Technical");
    
  } 
  else if (answer14 === 'option3') {
    traits.push("Non-Technical");
   
    
  }

  else if (answer14 === 'option4') {
    traits.push("Non-Technical");
   
    
  }
  //----------------------------------------------------------------

  if (answer15 === 'option1') {
    traits.push("Diciplinary");
    
  } 

  else if (answer15 === 'option2') {
    traits.push("Diciplinary");
    
  } 
  else if (answer15 === 'option3') {
    traits.push("Non-Diciplinary");
   
    
  }

  else if (answer15 === 'option4') {
    traits.push("Non-Diciplinary");
   
    
  }
  //----------------------------------------------------------------





  const Choice = await fetchDate(traits);
  console.log(Choice);
  res.render('res.ejs',{Choice,traits});

});

const TRT=[];

app.post('/answer_NEP', async(req, res) => {
  const { answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9,answer10,answer11,answer12,answer13,answer14,answer15 } = req.body;

  
  if (answer1 === 'option1') {
    traits.push("empathy");

    
  } 
  else if (answer1 === 'option2') {
    traits.push("empathy");

    
  }
  else if (answer1 === 'option3') {
    traits.push("enthusiasm");

  
  }

  else if (answer1 === 'option4') {
    traits.push("enthusiasm");

  
  }
  //---------------------------------------------------

  if (answer2 === 'option1') {
    traits.push("organized");
  
  } 
  else if (answer2 === 'option2') {
    traits.push("organized");
  
  }

  else if (answer2 === 'option3') {
    traits.push("flexibility");
  
  }

  else if (answer2 === 'option4') {
    traits.push("flexibility");
  
  }

  //----------------------------------------------------

  if (answer3 === 'option1') {
    traits.push("determination");
  
  } 
  else if (answer3 === 'option2') {
    traits.push("determination");
  
  }

  else if (answer3 === 'option3') {
    traits.push("self-awareness");
  
  }

  else if (answer3 === 'option4') {
    traits.push("self-awareness");
  
  }
  //-----------------------------------------------------

  if (answer4 === 'option1') {
    traits.push("committed");
  
  } 
  else if (answer4 === 'option2') {
    traits.push("committed");
  
  }

  else if (answer4 === 'option3') {
    traits.push("social openness");
  
  }

  else if (answer4 === 'option4') {
    traits.push("social openness");
  
  }

  //-------------------------------------------------------

  if (answer5 === 'option1') {
    traits.push("honesty");
  
  } 
  else if (answer5 === 'option2') {
    traits.push("honesty");

  }

  else if (answer5 === 'option3') {
    traits.push("fear of conflict");

  }

  else if (answer5 === 'option4') {
    traits.push("avoiding");

  }

  //---------------------------------------------------------

  if (answer6 === 'option1') {
    traits.push("Introversion");
  
  } 
  else if (answer6 === 'option2') {
    traits.push("Introversion");
 
  
  }

  else if (answer6 === 'option3') {
    traits.push("Extroversion");
 
  
  }

  else if (answer6 === 'option4') {
    traits.push("Extroversion");
 
  
  }
  //----------------------------------------------------------

  if (answer7 === 'option1') {
    traits.push("Sensing");
  
  } 
  else if (answer7 === 'option2') {
    traits.push("Sensing");
 
  
  }

  else if (answer7 === 'option3') {
    traits.push("Intuition");

 
  
  }

  else if (answer7 === 'option4') {
    traits.push("Intuition");
  
 
  
  }
  //-------------------------------------------------------------

  if (answer8 === 'option1') {
    traits.push("Thinking");
  
  } 
  else if (answer8 === 'option2') {
    traits.push("Thinking");
 
  
  }

  else if (answer8 === 'option3') {
    traits.push("Feeling");
 
  
  }

  else if (answer8 === 'option4') {
    traits.push("Feeling");
 
  
  }
  //-------------------------------------------------------------



  if (answer9 === 'option1') {
    traits.push("Judging");
  
  } 

  else if (answer9 === 'option2') {
    traits.push("Judging");
  
  } 
  else if (answer9 === 'option3') {
    traits.push("Perceiving");
 
  
  }

  else if (answer9 === 'option4') {
    traits.push("Perceiving");
 
  
  }
  //-------------------------------------------------------------

  if (answer10 === 'option1') {
    traits.push("Abrasive");
  
  } 

  else if (answer10 === 'option2') {
    traits.push("Abrasive");
  
  } 
  else if (answer10 === 'option3') {
    traits.push("Agreeable");
 
  
  }

  else if (answer10 === 'option4') {
    traits.push("Agreeable");
 
  
  }
  //----------------------------------------------------------------

  if (answer11 === 'option1') {
    traits.push("Neuroticism");
  
  } 

  else if (answer11 === 'option2') {
    traits.push("Neuroticism");
  
  } 
  else if (answer11 === 'option3') {
    traits.push("Independence");
 
  
  }

  else if (answer11 === 'option4') {
    traits.push("Independence");
 
  
  }
  //----------------------------------------------------------------

  if (answer12 === 'option1') {
    traits.push("Ambitious");
  
  } 

  else if (answer12 === 'option2') {
    traits.push("Ambitious");
  
  } 
  else if (answer12 === 'option3') {
    traits.push("Compassionate");
 
  
  }

  else if (answer12 === 'option4') {
  traits.push("Compassionate");
 
  
  }
  //----------------------------------------------------------------


  if (answer13 === 'option1') {
    traits.push("Intelligence");
  
  } 

  else if (answer13 === 'option2') {
    traits.push("Intelligence");
  
  } 
  else if (answer13 === 'option3') {
    traits.push("Creative");
 
  
  }

  else if (answer13 === 'option4') {
    traits.push("Creative");
 
  
  }
  //----------------------------------------------------------------

  if (answer14 === 'option1') {
    traits.push("Technical");
  
  } 

  else if (answer14 === 'option2') {
    traits.push("Technical");
  
  } 
  else if (answer14 === 'option3') {
    traits.push("Non-Technical");
 
  
  }

  else if (answer14 === 'option4') {
    traits.push("Non-Technical");
 
  
  }
  //----------------------------------------------------------------

  if (answer15 === 'option1') {
    traits.push("Diciplinary");
  
  } 

  else if (answer15 === 'option2') {
    traits.push("Diciplinary");
  
  } 
  else if (answer15 === 'option3') {
    traits.push("Non-Diciplinary");
 
  
  }

  else if (answer15 === 'option4') {
    traits.push("Non-Diciplinary");
 
  
  }
  //----------------------------------------------------------------


  console.log(TRT);
  const Choice_2 = await fetchNEP(TRT);
  console.log(Choice_2);
  
  res.render('res2.ejs',{Choice_2,TRT});

});

app.get('/job_risk',(req,res)=>{
  res.render("JOB2.ejs");
})


app.post('/get-occupation-info', async (req, res) => {
  try {
    
    const { occupation } = req.body;

    
    const flaskResponse = await axios.post('http://localhost:5000/get-occupation-info', { occupation });

    
    const occupationInfo = flaskResponse.data;

    
    res.json({ success: true, data: occupationInfo });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


