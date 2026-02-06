import './App.css'
import Footer from './components/Footer'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import NaveBar from './components/NaveBar'

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <NaveBar />

      {/* Main content */}
      <main className="flex-fill">
        <ListEmployeeComponent />
      </main>

      <Footer />
    </div>
  )
}

export default App
