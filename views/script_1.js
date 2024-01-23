document.getElementById('nextBtn').addEventListener('click', function () {
    var activeGroup = document.querySelector('.question-group.active');
    activeGroup.classList.remove('active');

    var nextGroup = activeGroup.nextElementSibling;
    if (nextGroup) {
        nextGroup.classList.add('active');
    } else {
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'block';
    }
});

document.getElementById('submitBtn').addEventListener('click', function () {

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







    app.post('/answer', async(req, res) => {
        const { answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9 } = req.body;
      
        
        if (answer1 === 'option1') {
            traits.push("empathy");
      
            
        } 
        else if (answer1 === 'option2') {
            traits.push("enthusiasm");
      
            
        }
      
        if (answer2 === 'option1') {
          traits.push("organized");
          
        } 
        else if (answer2 === 'option2') {
          traits.push("flexibility");
          
        }
      
        if (answer3 === 'option1') {
          traits.push("determination");
          
        } 
        else if (answer3 === 'option2') {
          traits.push("self-awareness");
          
        }
      
        if (answer4 === 'option1') {
          traits.push("social openness");
          
        } 
        else if (answer4 === 'option2') {
          traits.push("commited");
          
        }
      
        if (answer5 === 'option1') {
          traits.push("honesty");
          
        } 
        else if (answer5 === 'option2') {
          traits.push("fear of conflict");
         
          
        }
      
        if (answer6 === 'option1') {
          traits.push("Extraversion");
          
        } 
        else if (answer6 === 'option2') {
          traits.push("Introversion");
         
          
        }
      
        if (answer7 === 'option1') {
          traits.push("Sensing");
          
        } 
        else if (answer7 === 'option2') {
          traits.push("Intuition");
         
          
        }
      
        if (answer8 === 'option1') {
          traits.push("Thinking");
          
        } 
        else if (answer8 === 'option2') {
          traits.push("Feeling");
         
          
        }
      
        if (answer9 === 'option1') {
          traits.push("Judging");
          
        } 
        else if (answer9 === 'option2') {
          traits.push("Perceiving");
         
          
        }
        const Choice = await fetchDate(traits);
        console.log(Choice);
        res.render('result.ejs',{Choice});
      
      });
    alert('Quiz submitted!');
});
