import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Home from './views/Home';
import FBB from './views/FBB';
import WTW from './views/WTW';
import About from './views/About';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-best-bundle" element={<FBB />} />
        <Route path="/where-to-watch" element={<WTW />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
    </ThemeProvider>
  );
}

export default App;
