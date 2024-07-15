'use client'
import ProjectThumb from "./projectThumb";

export default function ProjectCard({projectName, date, onClickHandler}:{projectName: string, date: string, onClickHandler:() => void}) {
    return (
        <div className="flex flex-col">
            <div>
                <ProjectThumb onClickHandler={onClickHandler}/>
            </div>
            <div className="flex flex-col">
                <div style={{fontWeight: 700}}>
                    {projectName}
                </div>
                <div style={{color: 'silver'}}>
                    {date}
                </div>
            </div>
        </div>
    )
}