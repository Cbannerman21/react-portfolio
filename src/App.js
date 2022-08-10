import React, { useState } from 'react';
import Nav from './Components/Nav';
import About from './Components/About';
import Gallery from './Components/Gallery';
import ContactForm from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  const [categories] = useState([
    {
      name: 'Hobbies',
      description: 'Some of the things I enjoy doing in my off time.',
    },
    {
      name: 'Skills',
      description: 'Recently aquired skill sets.',
    },

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Gallery currentCategory={currentCategory}></Gallery>
            <ContactForm></ContactForm>
            <Footer></Footer>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
