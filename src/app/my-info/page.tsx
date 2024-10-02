import Header from "@/app/components/header";
export default function Info(){
    return (
        
        <div>
            <Header/>
            
          
          <div className="containers">
            <div className="info-section">
              <h1>Hi, I'm Shiza Tariq <p>
                I am a student of Computer System Engineering and my engineering background allows me to approach web development with a problem-solving mindset, and I am always eager to learn new technologies 
              </p> <p>
                Feel free to contact me for collaborations or if you want to learn more about my projects.
                
              </p> <p style={{ color: 'lightblue' }}><b>Email:</b><a href="mailto:shizatariq562@gmail.com">shizatariq562@gmail.com</a></p>
              <p style={{ color: 'lightblue' }}><b>LinkedIn:</b><a href="https://www.linkedin.com/in/shiza-tariq-171b75245"target="_blank">www.LinkedIn.com</a></p> 
              </h1>
              
              
            </div>
            <div className="image-section">
              <img src="shizpic.png"className="profile-image" />
            </div>
            
          </div>
          </div>
        );
      }
      

    