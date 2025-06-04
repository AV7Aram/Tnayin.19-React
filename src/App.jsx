import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import SectionAbout from './components/SectionAbout/SectionAbout'
import SectionCourses from './components/SectionCourses/SectionCourses'
import SectionFeatures from './components/SectionFeatures/SectionFeatures'
import SectionStaff from './components/SectionStaff/SectionStaff'

function App({ courses, advantages, links, contacts }) {

  return (
    <>
      <Nav />
      <Header />
      <SectionCourses courses={courses} />
      <SectionFeatures advantages={advantages} />
      <SectionStaff />
      <SectionAbout />
      <Footer links={links} contacts={contacts}/>
    </>
  )
}

export default App
