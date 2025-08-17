import './App.css'
import Profile from './contents/profile'
import Introduce from './contents/introduce'
import Projects from './contents/projects'
import Skills from './contents/skills'
import Footer from './contents/footer'
import Experience from './contents/experience'
import Education from './contents/education'
import ETC from './contents/etc'

function App() {
    return (
        <div className="w-full h-full bg-gradient-to-b to-white from-gray-50">
            <div className="w-full md:w-[1100px] mx-auto p-[16px] md:p-[30px] box-border flex flex-col">
                {/* profile */}
                <Profile />
                {/* introduce */}
                <Introduce />

                {/* Skills */}
                <Skills />

                {/* Project Experience */}
                {/* <Projects /> */}

                {/* Experience */}
                <Experience />

                {/* Education */}
                <Education />

                {/* Awards */}
                <ETC />

                {/* Certifications */}
                {/* <Certifications /> */}

                {/* footer */}
                <Footer />
            </div>
        </div>
    )
}

export default App
