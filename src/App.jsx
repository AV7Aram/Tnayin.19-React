import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import SectionCourses from './components/SectionCourses/SectionCourses'
import SectionFeatures from './components/SectionFeatures/SectionFeatures'
import SectionStaff from './components/SectionStaff/SectionStaff'

function App({ courses, advantages }) {

  return (
    <>
      <Nav />
      <Header />
      <SectionCourses courses={courses} />
      <SectionFeatures advantages={advantages} />
      <SectionStaff />
    </>
  )
}

export default App
