import React from 'react'
import Desktop from './desktop';
import Mobile from './mobile';

export default function Header({ headerTab, setHeaderTab }) {
  const [position, setPosition] = React.useState(window.innerWidth <= 645);


  const handleHomeClick = () => {
    const element = document.getElementById('home');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 160,
        behavior: 'smooth'
      });
    }
  };

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 160,
        behavior: 'smooth'
      });
    }
  };

  const handleAboutClick = () => {
    const element = document.getElementById('about');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 90,
        behavior: 'smooth'
      });
    }
  };

  const handleWorkClick = () => {
    const element = document.getElementById('work');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 90,
        behavior: 'smooth'
      });
    }
  };

  React.useEffect(() => {
    window.onresize = function () {
      setPosition(window.innerWidth <= 645);
    };
  }, []);
  return (
    position ? (<Mobile />) : (<Desktop headerTab={headerTab} setHeaderTab={setHeaderTab} handleHomeClick={handleHomeClick} handleContactClick={handleContactClick} handleAboutClick={handleAboutClick} handleWorkClick={handleWorkClick} />)
  )
}
