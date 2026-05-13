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

            if(project.includes("Netflix Clone")){

                window.open("https://www.netflix.com", "_blank");
            }

            else if(project.includes("Spotify Clone")){

                window.open("https://open.spotify.com", "_blank");
            }

            else if(project.includes("Amazon Clone")){

                window.open("https://www.amazon.com", "_blank");
            }

            else if(project.includes("Portfolio Website")){

                window.open("https://vercel.com/templates", "_blank");
            }

            else if(project.includes("Tic Tac Toe Game")){

                window.open("https://playtictactoe.org", "_blank");
            }

            else if(project.includes("Weather App")){

                window.open("https://weather.com", "_blank");
            }

        }

    

    });
});

// Social Media Buttons

const socialLinks = document.querySelectorAll(".social-icons a");

socialLinks.forEach(function(link, index){

    link.addEventListener("click", function(event){

    
        event.preventDefault();

        if(index === 0){

            window.open("https://twitter.com/login", "_blank");
        }


        else if(index === 1){

            window.open("https://github.com/login", "_blank");
        }


        else if(index === 2){

            window.open("https://www.linkedin.com/login", "_blank");
        }

    });

});