import React from 'react'
import ProjectsSlider from '../components/ProjectsSlider'
import HeroBanner from '../components/HeroBanner'
import ProjectShowPage from './ProjectShowPage'

const ProjectPage = () => {
    return (
        <div className='min-h-screen '>
            <HeroBanner
                title="My Projects"
                breadcrumb="Home / Projects"
            />
            {/* <ProjectsSlider /> */}
            <ProjectShowPage />
        </div>
    )
}

export default ProjectPage