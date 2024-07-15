'use client'

import Header from "../components/header/header";
import ProjectCard from "../components/project/projectcard";

export default function Page() {
    let projects: Array<{projectTitle: string, recentEditDate: string}> = [
        {projectTitle: "Sample Project", recentEditDate: "2 days ago"},
        {projectTitle: "Sample Project", recentEditDate: "2 days ago"},
        {projectTitle: "Sample Project", recentEditDate: "2 days ago"},
        {projectTitle: "Sample Project", recentEditDate: "2 days ago"},
    ];

    const navigateProject = () => {

    }
    
    return (
        <body>
            <Header/>
            <main style={{padding: 16, maxWidth: 1600, margin: 'auto'}} >
                <div>
                    <h2 style={{marginBottom: 8}}>My Projects</h2>
                </div>
                <hr style={{borderColor: 'black', borderBottomWidth: 1}}/>
                <div className="flex flex-row gap-4 mt-4">
                    {projects.map((p, index) => {
                        return (
                            <ProjectCard key={index} projectName={p.projectTitle} date={p.recentEditDate} onClickHandler={navigateProject}/>
                        )
                    })}
                </div>
            </main>
        </body>
    )
}