import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { courses, advantages, links, contacts } from './db/db.js'

createRoot(document.getElementById('root')).render(
  <App courses={courses} advantages={advantages} links={links} contacts={contacts} />
)
