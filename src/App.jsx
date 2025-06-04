import React, { useRef } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import SectionAbout from './components/SectionAbout/SectionAbout'
import SectionCourses from './components/SectionCourses/SectionCourses'
import SectionFeatures from './components/SectionFeatures/SectionFeatures'
import SectionStaff from './components/SectionStaff/SectionStaff'

function App({ courses, advantages, links, contacts }) {
  const coursesRef = useRef(null)
  const featuresRef = useRef(null)
  const staffRef = useRef(null)
  const aboutRef = useRef(null)

  return (
    <>
      <Nav
        onNavClick={[
          () => coursesRef.current.scrollIntoView({ behavior: 'smooth' }),
          () => featuresRef.current.scrollIntoView({ behavior: 'smooth' }),
          () => staffRef.current.scrollIntoView({ behavior: 'smooth' }),
          () => aboutRef.current.scrollIntoView({ behavior: 'smooth' }),
        ]}
      />
      <Header />
      <SectionCourses ref={coursesRef} courses={courses} />
      <SectionFeatures ref={featuresRef} advantages={advantages} />
      <SectionStaff ref={staffRef} />
      <SectionAbout ref={aboutRef} />
      <Footer links={links} contacts={contacts} />
    </>
  )
}

export default App