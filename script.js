const buttons= document.querySelectorAll("button");

buttons.forEach(function(button){
    button.addEventListener("click",function(){
        const text= button.innerText;

        if(text.includes("Hire Me")){
            window.location.href = "mailto:yourgmail@gmail.com";
        }
       else if(text.includes("Download Resume")){

            window.open("https://docs.google.com/document/d/1ANd9CbHTGx_j80LOqMBw2vp8oYi9kAEJHfIpeMIRevY/edit?tab=t.0", "_blank");
        }
         else if(text.includes("Live Site")){
            const project =
    button.parentElement.querySelector("h2").innerText;
         }
    

    });
});