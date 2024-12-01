
function Body(){

    return (
    //Welcome Message start
        <div className="bodyStyle">
            <div className="welcomeMessage">
                <h2>Welcome to My World</h2>
            </div>
            <div className="Titlemessage">
                <h1>
                    <span className="spanMessage">Hi, I am</span> Ibrahim
                </h1>
                <p><span className="spanMessage">Passionate</span> Web Developer</p>
            </div>
        {/*Welcome message end*/}

            {/*Paragraph and button start*/}
            <div className="myselfParagraph"> 
                <p>
                    My name is Md Ibrahim Khan and I am a passionate front-end focus full-stack developers with 1 year experience. I have a passion for creating beautiful, responsive and user-friendly websites and web applications.
                </p>
            </div>
            <div className="myselfButton">
                <button className="myselfButton1">About Me</button>
                <button className="myselfButton2">Download CV</button>
            </div>
        {/*Paragraph and button end*/}

        {/*My picture start*/}
        <div className="myPicture">
            <img src="./ibrahim.jpg" height={'300px'} width={'300px'} alt="Ibrahim Khan Picture"/>
        </div>
        {/*My picture end*/}

                {/*About me start*/}
                <div>
                    <h1 style={{
                        color:'green', 
                        textAlign:'justify',
                        marginTop: '70px',
                        marginLeft: '50px',
                        }}
                    >About Me</h1>
                </div>
                                       
                    <div className="aboutMeParagraph">
                        <h2>Hey, I’m <span style={{color:'white'}}> Ibrahim</span></h2>
                        <p>
                            My name is Md Ibrahim Khan and I m a passionate front-end  developer with 1 years of experience.
                            I have a passion for creating beautiful, responsive, and user-friendly websites and web applications.
                        </p>

                        <p>
                            I have a strong background in JavaScript, TypeScript, HTML5, CSS3, Bootstrap, Tailwind, SASS/LESS and 
                            related frontend technologies and frameworks such as React and Next JS . I am proficient in state management 
                            technologies, including Redux, Redux Toolkit.
                        </p>

                        <p>
                            Over the last year, I have worked on a variety of websites and frontend development applications for clients 
                            across different industries, including e-commerce, healthcare, ERP, Bank, education, and more. I love 
                            contributing to open source
                        </p>

                        <p>
                            Overall, I am a dedicated and passionate for delivering high-quality projects on time and within budget. 
                            I am always ready to take new challenges and opportunities to learn and grow as a developer.
                        </p>
                        
                    </div>   
                {/*About me end*/}

            
            {/*Skills start*/}
            <div className="skillTitle">
                <h1>Skills</h1>
            </div>

            <div className="skills">
                <div className="skillUl">
                    <ul>
                        <li>Frontend Design: <a>HTML5, CSS3, Tailwind CSS, Bootstrap, SASS, Photoshope</a></li>
                        <li>Frontend Development: <a>JavaScript, TypeScript, React, Redux, Next Js</a></li>
                        <li>Backend: <a>Node JS</a></li>
                        <li>Database: <a>MongoDB</a></li>
                        <li>Code Management: <a>Git, Github</a></li>
                        <li>Programming Language (Basic): <a>C, C++, Java</a></li>
                        <li>Deployment: <a>Windows Server</a></li>
                        <li>Tools & Technology: <a>VS Code, Notepad++</a></li>
                    </ul>
                </div>
            </div>

            {/*Skills end*/}

                            


            
        </div>
    )
}





export default Body