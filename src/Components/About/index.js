import React from 'react';
import coverImage from '../../assets/cover/profilepic.jpg'


function About() {
    return (
        < section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={coverImage} className="my-2" style={{ width: "20%"}} alt="cover"></img>
            <div className="my-2">
                <p>
                    Hello! My name is Christopher Bannerman, and I am a junior web developer. This is my first foray into the world of web development,
                    and I am very excited to see what the future holds for me. I'm and outgoing, goal oriented individual with experience in team development,
                    team leadership, management in several different roles. I'm very much looking forward to continuing my education in the programming world.
                    Thank you for stopping by and checking out my work! I look forward to hearing from you.
                </p>
            </div>
        </section>
    );
}

export default About;