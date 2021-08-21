import MetaTags from '../components/MetaTags'
import Navbar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <MetaTags 
        title="Salbi Mohamed -Software Engineer, Creator"
      />
      
      <div className="flex flex-col h-screen container mx-auto px-6">
        <Navbar />
        {/* {children} */}
      </div>
    </div>
  )
}
