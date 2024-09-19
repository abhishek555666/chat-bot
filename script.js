
var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+08284220861'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'></label></label></div> </a> <a href='mailto:asi@klsvdit.edu.in'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/9449608448'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''>";
var resumeString = "<img src='images/resume_thumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Varshith V Hegde Resume.pdf</label></div><a href='assets/varshith_v_hegde_resume.pdf' download='varshith_v_hegde_resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/dir//Moodbidri+private+Bus+Stand,+Bus+Stand+Rd,+Mudbidri,+Karnataka+574227/@13.0639,74.9991985,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba4ab3d49331379:0x17be05cb5b69caa2!2m2!1d74.9957298!2d13.0680955?hl=en' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";
// Get the chatbot toggler button and chatbot container
const chatbotToggler = document.getElementById('chatbot-toggler');
const chatbotContainer = document.querySelector('.chatbot-container');

// Add click event listener to the toggler button
chatbotToggler.addEventListener('click', () => {
    // Toggle the display property of the chatbot container
    chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'block' : 'none';
});

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
    
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}
function buttonContainer() {
    // Add your code here to handle the button click event
    alert("Button clicked!");
}


function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    var name="";
    if(inputText.toLowerCase().includes("my name is")){
        name=inputText.substring(inputText.indexOf("is")+2);
        if(name.toLowerCase().includes("varshith")){
            sendTextMessage("Ohh! That's my name too");
            
        }
        inputText="input";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Bot</a>.</span><br><br>I am from <span class='bold'>KLS Vishwanathrao Deshpande Institute of Technology and Engineering👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about career in the engineering sphere.<br><br>Send <span class='bold'>'menu'</span> to know more about us.<br>");
            }, 2000);
            break;
            
            
            
            break;
            
        
        

        case "menu":
            case"help":
             sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'Branch'</span> - to know about all branch<br><span class='bold'>'Transport'</span> - to get details about transportation<br><span class='bold'>'Placements'</span> - to get placements details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'alumni'</span> - to know about academic details<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "branches":
            case"admission":
            case"admission enquiry":
            case"admission details":
            case"details of admission":
            case "Branch":
                case"branch":
            sendTextMessage("<span class='sk'>Our college offers diverse range of branches.<br><br>Following are the branches :<br><span class='bold'>AIML<br>Civil engg<br>Computer Science Engg<br>Electrical Engg<br>Electronics & Communication Engg<br>Mechanical Engg<br></span><br><br>Master as well :<span class='bold'><br>Physics<br>chemistry<br>Maths</span><br>");
            break;
            case "Transport":
                case"transport":
                case"bus facilities":
                case"BUS":
                case"Bus":
                case"bus":
                case"buses":
                case"BUSES":
                case"Buses":
                case"Travelling facility":
                case"Travelling facilities":
                case"Bus facilities":
                case"bus facility":
                case"Bus facility":
                case"bus facilities":
             sendTextMessage("<span class='sk'>Our college operates the fleet of 15 buses, with two dedicated exclusively for female students<br><br>Following are the places :<br><span class='bold'>Dharwda--10,000/-<br>Dandeli--10,000/-<br>Belgaum--10,000/-<br>Hubli--10,000/-");
             break;
             case"timing":
             case"timming of college":
             case"college timing":
             sendTextMessage("<span class='sk'>Our college timing is :<br><br All Saturday are holiday<br><span class='bold'>9Am-4Pm");
             break;
        case "alumni":
            case"Alumni":
            sendTextMessage("You can get know know about campus passouts <a target='_blank' href='https://klsvdit.edu.in/alumni-3/'>alumni</a>");
            break;
            case "AIML":
            case "aiml":
            case "Aiml":
            sendTextMessage("<span class='sk'>In our college, the Head of the Artificial Intelligence and Machine Learning (AIML) department is Dr. Mrs. Poornima Raikar.<br><br>Following are the admission procedure :<br><span class='bold'>K-CET<br>Mangement<br>Comed-k<br></span><br>");
            sendTextMessage("You can take Branch Tour <a target='_blank' href='https://klsvdit.edu.in/computer-science-and-engineering-ai-ml/'>AIML</a>");
            break;
            case"computer science":
            case "CSE":
            case "I need admission in cs":
            case "can i get admission in cs branch in your college":
            case"cse":
            case "Information about computer science dept":
            sendTextMessage("<span class='sk'>In our college, the Head of the Computer Science and Engg (CSE) department is Dr. Srinivas Sirdeshpande.<br><br>Following are the admission procedure :<br><span class='bold'>K-CET<br>Mangement<br>Comed-k<br></span><br>");
            sendTextMessage("You can take Branch Tour <a target='_blank' href='https://klsvdit.edu.in/computer-science-and-engineering-2/'>Compter Science Dept</a>");
            break;
            case"civil Engg":
            case"civil branch":
            case"civil":
            case"about civil branch":
            case"can i get admission in civil branch":
            case"Information about civil branch":
            sendTextMessage("<span class='sk'>In our college, the Head of the Computer Science and Engg (CSE) department is Dr. Srinivas Sirdeshpande.<br><br>Following are the admission procedure :<br><span class='bold'>K-CET<br>Mangement<br>Comed-k<br></span><br>");
            sendTextMessage("You can take Branch Tour <a target='_blank' href='https://klsvdit.edu.in/civil-engineering-2/'>CIVIL dept</a>");
            break;
            case"Electrical Engg":
            case"can i get admission in electrical branch":
            case "electrical engg":
                case"electrical dept":
            case"Information about electrical branch":
            sendTextMessage("<span class='sk'>In our college, the Head of the Electrical and Electronics Engg (EEE) department is Prof A V Kolaki.<br><br>Following are the admission procedure :<br><span class='bold'>K-CET<br>Mangement<br>Comed-k<br></span><br>");
            sendTextMessage("You can take Branch Tour <a target='_blank' href='https://klsvdit.edu.in/electrical-and-electronics-engineering/'>Electrical dept</a>");
            break;
            case"Electronics and Communication":
            case"can i get admission in electronics and communication dept":
            case"Information about ec branch":
            case"ece":
            case"Ece":
            case"ECE":
            sendTextMessage("<span class='sk'>In our college, the Head of the Electronics and Communication Engg (ECE) department is Dr. Mahendra M Dixit.<br><br>Following are the admission procedure :<br><span class='bold'>K-CET<br>Mangement<br>Comed-k<br></span><br>");
            sendTextMessage("You can take Branch Tour <a target='_blank' href='https://klsvdit.edu.in/electronics-and-communication-engineering/'>Electronics and Communication dept</a>");
            break;
            case"Mechanical Engg":
            case"can i get admission in mechanical dept":
            case"Information about mechanical branch":
            case"mech":
            sendTextMessage("<span class='sk'>In our college, the Head of the Mechanical Engg (MEC) department is Dr.Murgayya S Basavankattimath.<br><br>Following are the admission procedure :<br><span class='bold'>K-CET<br>Mangement<br>Comed-k<br></span><br>");
            sendTextMessage("You can take Branch Tour <a target='_blank' href='https://klsvdit.edu.in/mechanical-engineering/'>Mechanical dept</a>");
            break;
            case"ug":
            case"UG":
            case"Ug":
            sendTextMessage("<span class='sk'>Our college offers diverse range of branches.<br><br>Following are the branches :<br><span class='bold'>AIML<br>Civil engg<br>Computer Science Engg<br>Electrical Engg<br>Electronics & Communication Engg<br>Mechanical Engg<br></span><br>");
            break;
            case"masters":
            case"Masters":
            case"PG":
            case"Pg":
            case"pg":
            sendTextMessage("</span><br><br>Masters :<span class='bold'><br><br>Industrial Electronics<br>Thermal Power Engineering<br>Maths</span><br>");
            break;
            case"PhD":
            case"PHD":
            case"phd":
            sendTextMessage("<span class='sk'>Our college offers diverse range of branches.<br><br>Following are :<br><span class='bold'>Dept of Physics<br>Dept of Mathematics<br>Dept of Chemistry<br>Electronics & Communication Dept<br>Mechanical Dept<br></span><br>");
            break; 
            case"about kls vdit":
            case"about college":
            case"may i know about college":
            case"About college":
            sendTextMessage("Know about college : <a target='_blank' href='https://klsvdit.edu.in/principal-message/>Kls Vdit</a>");
            break;
            case"k-cet":
            case"K-CET":
            case"K-cet":
            case"kcet":
            case"Kcet":
            case"mangement":
            case"Managemnet":
            case"management quota":
            case"Comed-k":
            case"comed-k" :
            case"Comedk":
            case"comedk":
            case"cet":
            case"Cet":
            case"CET":
            sendTextMessage( contactString);
            break;
            

        
        case "clear":
            clearChat();
            break;
        // case "about":

        //     break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "Placements":
            case "placemnets":
                case "Placement":
                    case "can i get the placements":
            sendTextMessage("You want to check our college placements? Then just jump into this link.<br><br><div class='Website'><a target='_blank' href='https://github.com/Varshithvhegde'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "time":
            var date = new Date();
            sendTextMessage("Current time is " + date.getHours() + ":" + date.getMinutes());
            break;

        case "date":
            var date = new Date();
            sendTextMessage("Current date is " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
            break;

        case "hai":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'Branch'</span> - to know about all Branch<br><span class='bold'>'Transport'</span> - to get  details about Transportaton<br><span class='bold'>'Placements'</span> - to get my Placements details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'placementss'</span> - to get details of  academic placementss<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "hello":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'Branch'</span> - to know about all Branch<br><span class='bold'>'Transport'</span> - to get  details about Transportaion<br><span class='bold'>'Placements'</span> - to get my Placements details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'placementss'</span> - to get details of  academic placementss<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        
        case "hi":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'Branch'</span> - to know about all Branch<br><span class='bold'>'Transport'</span> - to get  details about Transportation<br><span class='bold'>'Placements'</span> - to get my Placements details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'placementss'</span> - to get details of  academic placementss<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        
        case "hey":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'Branch'</span> - to know about all Branch<br><span class='bold'>'Transport'</span> - to get  details about Transportation<br><span class='bold'>'Placements'</span> - to get my Placements details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'placementss'</span> - to get details of  academic placementss<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
       

       
        
            case "Placements":
                case "placements":
                    case "Placement":
                        case "can i get the placements":
                            case"placement of the college":
                            case"placement":
            sendTextMessage("You can check Placements of the college here <a target='_blank' href='https://klsvdit.edu.in/training-and-placement-cell/'>Placements</a>");
            break;
        case "blog":
            sendTextMessage("You can check my blog here <a target='_blank' href='https://varshithvhegde.github.io/hugo-blog'>Varshith Hegde</a>");
            break;
        
        case "friends":
        case "friend":
            sendTextMessage("I am always ready to make new friends");
            break;
        case "input":
            setTimeout(()=>{
                // sendTextMessage("What a coincidence!");
                sendTextMessage("Hello "+name+"! How are you?");
            },2000);
            
            break;
        default:
            setTimeout(() => {
                sendTextMessage(contactString);
            }, 2000);
            break;
    }



}


function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");


    document.addEventListener("DOMContentLoaded", function() {
        var button1 = document.getElementById("UG");
        var button2 = document.getElementById("PG");
        var button3 = document.getElementById("PhD");
        var listUL = document.getElementById("listUL");
    
        button1.addEventListener("click", function() {
            sendTextMessage("You clicked Button 1");
           ("<a target='_blank' href='https://klsvdit.edu.in/computer-science-and-engineering-2/'>Compter Science Dept</a>");  
        });
    
        button2.addEventListener("click", function() {
            sendTextMessage("You clicked Button 2");
        });
    
        button3.addEventListener("click", function() {
            sendTextMessage("You clicked Button 3");
        });
    
        function sendTextMessage(textToSend) {
            var date = new Date();
            var message = `<li>${textToSend} - ${date.getHours()}:${date.getMinutes()}</li>`;
            listUL.insertAdjacentHTML('beforeend', message);
            listUL.scrollTop = listUL.scrollHeight;
            playSound();
        }
    
        function playSound() {
            audio.play();
        }
    });
    
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();

}{
sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
}