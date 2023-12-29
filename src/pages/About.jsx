import React from 'react'
import './Pages.css'
import NavBar from '../components/NavBar'

const About = () => {
  return (
    <div className="about-container">
      <NavBar></NavBar>
        <div className="about-text">
          <img src="/ivorytusk_bw.jpg" alt="Ivory Tusk" />
            <p><span>H</span>ailing from the vibrant streets of Buenos Aires and journeying across continents to finally call Barcelona home, Ezequiel de Lima embodies the wandering soul within music. His path was etched through melodies, leading him across the US, a traverse through Europe, and numerous stages along the way.</p>
            <p>His European voyage was peppered with standout moments, sharing stages with artists like Thomas Dybdahl, a catalyst that saw him grace the esteemed Blue Bird festival in Vienna. From Live at Heart in Sweden to intimate DIY home concerts across different European countries, Ezequiel orchestrated over 200 shows, meticulously charting his own musical course.</p>
            <p>For Ezequiel, music is more than a passion—it’s a vessel for profound self-reflection and a conduit for shared human experience. It’s an odyssey through the labyrinth of existential questions, a form of therapy to navigate the enigmatic nuances of existence.</p>
            <p>The seismic shifts of 2020 ushered in a new chapter, a personal metamorphosis that birthed "The Space Between," a hauntingly beautiful concept album delving into the depths of loneliness and solitude within a post-apocalyptic world. Each track intricately weaves a narrative, a mosaic of memories from a world now lost.</p>
            <p>This evocative album took shape within the intimate confines of home, marking a departure from the solitary troubadour to a collaborative band format. It’s a testament to Ezequiel’s artistic evolution—a departure from the familiar, a plunge into uncharted musical territories.</p>
            <p>The future beckons with promise as Ezequiel prepares a diverse series of singles. These recordings, birthed at home, traverse a myriad of landscapes—from the raw allure of fuzzy guitars to the pulse of drum machines, promising an eclectic journey through new soundscapes.</p>
            <p>Ezequiel de Lima is crafting worlds within sound, beckoning listeners to traverse the depths of human emotion through his immersive musical narratives.</p>
            <div className="contact-container">
              <h3>contact</h3>
              <a href="mailto:ivorytusk.mgmt@gmail.com">ivorytusk.mgmt@gmail.com</a>
              <h3>press kit</h3>
              <a href="/IvoryTusk_Dossier.pdf" target='_blank'>dossier</a>
              <a href="/ivorytusk_pressphoto.jpg" target='_blank'>press photo</a>
              <a href="/thespacebetween.png" target='_blank'>album artwork</a>
              <a href="/Rider_IvoryTusk_Banda.pdf" target='_blank'>rider (band)</a>
            </div>
        </div>
    </div>
  )
}

export default About