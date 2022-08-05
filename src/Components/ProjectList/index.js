import React from 'react';

function ProjectList (work) {
    return (
        <section>
            <h2 id="projects">Projects</h2>

            <div className="project-container">
                <section className="project">
                    <h3>Vinyl Collectors</h3>
                    <div>
                        <a href="https://github.com/ajpicc3734/Project-2">
                          <img src={require("../../assets/images/174512692-3b6538d3-da32-43e1-a2fb-4bd41803dbf2.png")} alt="records" />  
                        </a>
                    </div>
                </section>

                <section className="project">
                    <h3>Trending Music</h3>
                    <div>
                    <a href="https://github.com/ajpicc3734/Group-Project">
                        <img src={require("../../assets/images/trendingmusic.jpg")} alt="trending-music" />
                    </a>
                    </div>
                </section>

                <section className="project">
                    <div>
                        <h3>Code Quiz</h3>
                        <a href="https://github.com/Cbannerman21/coding-quiz">
                            <img src={require("../../assets/images/codequiz.jpg")} alt="code-quiz" />
                        </a>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default ProjectList;