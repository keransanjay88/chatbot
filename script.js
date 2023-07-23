const texts = document.querySelector(".texts");  
 window.SpeechRecognition =  
  window.SpeechRecognition || window.webkitSpeechRecognition;  
 const recognition = new SpeechRecognition();  
 recognition.interimResults = true;  
 let p = document.createElement("p");  
 recognition.addEventListener("result", (e) => {  
  texts.appendChild(p);  
  const text = Array.from(e.results)  
   .map((result) => result[0])  
   .map((result) => result.transcript)  
   .join("");  
  p.innerText = text;  
  if (e.results[0].isFinal) {  
   if (text.includes("how are you")) {  
    p = document.createElement("p");  
    p.classList.add("replay");  
    p.innerText = "I am fine";  
    texts.appendChild(p);  
   }  
   if (  
    text.includes("what's your name") ||  
    text.includes("what is your name")  
   ) {  
    p = document.createElement("p");  
    p.classList.add("replay");  
    p.innerText = "I am JARVIS";  
    texts.appendChild(p);  
   }  
   if (  
    text.includes("who are you") ||  
    text.includes("who are you")  
   ) {  
    p = document.createElement("p");  
    p.classList.add("replay");  
    p.innerText = "I'm your voice assistant";  
    texts.appendChild(p);  
   }
   if (  
    text.includes("what is the technology of this project") ||  
    text.includes("what is the innovation technology of this project")  
   ) {  
    p = document.createElement("p");  
    p.classList.add("replay");  
    p.innerText = "AI/ML & data analytics";  
    texts.appendChild(p);  
   }
   if (  
    text.includes("what is the industry vertical of this project") ||  
    text.includes("what is the industry vertical of this project")  
   ) {  
    p = document.createElement("p");  
    p.classList.add("replay");  
    p.innerText = "Fintech";  
    texts.appendChild(p);  
   }
   if (  
    text.includes("what's our project name") ||  
    text.includes("what is our project name")  
   ) {  
    p = document.createElement("p");  
    p.classList.add("replay");  
    p.innerText = "Our project is CHATBOT using AI";  
    texts.appendChild(p);  
   }
   if (
    text.includes("Nandri") || 
    text.includes("thank you") 
    ) {  
    p = document.createElement("p");  
    p.classList.add("replay");  
    p.innerText = "...";  
    texts.appendChild(p);  
    console.log("...");  
    window.open("https://drive.google.com/file/d/10WjN-F71lgQj0W7GU97tV3eMz_UauSly/view?usp=share_link");  
   }  
   if (text.includes("open YouTube")) {  
    p = document.createElement("p");  
    p.classList.add("replay");  
    p.innerText = "Here you go!!";  
    texts.appendChild(p);  
    console.log("Here you go!!");  
    window.open("https://youtu.be/n6NkluQDUbU");  
   }  
   p = document.createElement("p");  
  }
 });  
 recognition.addEventListener("end", () => {  
  recognition.start();  
 });  
 recognition.start();

