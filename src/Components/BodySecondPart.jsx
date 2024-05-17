import React from 'react'

export default function BodySecondPart() {
  return (
    <div>
        
         <h1 style={{color:'green'}}>What I Do</h1>
        
        <div className='whatIDo'>
            <div className='whatIDoArticle'>
                <div className='paragraph'>
                    
                    <h2>Web Design</h2>
                    <p>
                        I'm a passionate web designer, weaving creativity into every pixel. With a keen eye for aesthetics and a knack 
                        for user-centric design, I transform visions into stunning websites. Let'scollaborate to bring your digital dreams
                        to life.
                    </p>
                </div>

                <div className='lineVertical'></div>

                <div className='paragraph'>
                    <h2>Web Developement</h2>
                    <p>
                        I'm a dedicated web developer, crafting digital experiences one line of code at a time. With a passion for 
                        problem-solving and a love for clean, efficient development, I turn ideas into functional, user-friendly websites.
                    </p>
                </div>

                <div className='lineVertical'></div>

                <div className='paragraph'>
                    <h2>Digital Merkating</h2>
                    <p>
                        I'm a digital marketer, orchestrating online success with strategy and flair. From SEO to social media, I 
                        navigate the digital landscape to boost brands and drive results. Let'scollaborate and elevate your online presence.
                    </p>
                </div>
            </div><hr/>
            <div className='whatIDoArticle'>
                <div className='paragraph'>
                    <h2>Graphics Design</h2>
                    <p>
                        I'm a versatile graphics designer, transforming ideas into visual masterpieces. With a flair for color, 
                        composition, and innovation, I bring your vision to life through captivating designs. Let'screate striking 
                        visuals that leave a lasting impression.
                    </p>
                </div>

                <div className='lineVertical'></div>

                <div className='paragraph'>
                    <h2>Consultancy</h2>
                    <p>
                        I'm a web consultant, guiding businesses through the digital realm. With a deep understanding of web technologies 
                        and a knack for strategic solutions, I help you navigate the online landscape and make informed decisions.
                    </p>
                </div>

                <div className='lineVertical'></div>

                <div className='paragraph'>
                    <h2>Office Networking</h2>
                    <p>
                        I'm a skilled office network configurator, weaving a seamless digital workplace. With expertise in network 
                        architecture and security, I ensure your office network runs efficiently and securely. Let's connect your 
                        team for productivity and peace of mind.
                    </p>
                </div>
                
            </div>
        </div>

                {/*Experience start*/}

                <div>
                    <div>
                        <h1 style={{color:'green'}}>Experience</h1>
                    </div>
                    <div className='experience'>
                    <div className='experienceFirst'>
                        <h2>AR Trade International</h2>
                        <h3>Hardware Engineer</h3>
                        <p>Shantinagar, Dhaka-1217<br/>
                        Septemper 2017 - January 2018</p>
                    </div>
                    <div className='experienceSecond'>
                        <h2>Shadhin Online Public Ltd</h2>
                        <h3>IT Support Engineer</h3>
                        <p>Malibagh, Dhaka-1217<br/>
                        February 2018 - Present</p>
                    </div>
                    </div>
                </div>

                {/*Experience end*/}

            {/*Contact start*/}
            <h1 style={{color:'green'}}>Contact With Me</h1>
            <div>
                <div>
                    <div className='contactLeft'>
                        <div>
                            <img src="./public/ibrahimkhan.jpg" width={'25%'} height={'25%'} alt="" srcset="" />
                        </div>
                        <div style={{color:'lightgray'}}>
                            <h2 style={{color:'green'}}>Md Ibrahim Khan</h2>
                            <p>
                                Font end Developer
                            </p>
                            <p>
                                I am available for freelance work. Connect with me via and call in to my account.
                            </p>
                            <p>
                                +8801742095986<br/>
                                ibrahim2013khan@gmail.com
                            </p>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
            {/*Contact end*/}
      
    
    
    
    </div>
  )
}
