import React, { useState } from 'react';
import About from './Components/About';
import Nav from './Components/Nav';
import Portfolio from "./Components/Portfolio";
import ContactForm from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const [categories] = useState([
    {
      name: 'hobbies',
      description: 'A small glimpse of the hobbies of a simple man',
    },
    {
      name: 'tech',
      description: 'Some newly acquired skills',
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
            <Portfolio currentCategory={currentCategory}></Portfolio>
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
