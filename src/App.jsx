import { Routes, Route } from 'react-router-dom';

/* Import Components */
import NavBar from './px-comp/header/px-header';
import Footer from './px-comp/footer/px-footer';

/* Import Pages */
import Home from './px-pages/home/index';
/* import About from './px-pages/about'; uncomment when creating about page */

/* Import Style */
import './px-styles/index.scss';

import './px-script/anim.js';

/* App Start */

function App() {
  return (
    <div className="px-body-container">
      <NavBar />
      <main className="px-main px-page--home" id="px-main">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          {/* <Route path="/about" element={<About />} uncomment when creating about page */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
/* App End */
