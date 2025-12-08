import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Listings } from './pages/Listings';
import { PropertyDetails } from './pages/PropertyDetails';
import { Checkout } from './pages/Checkout';
import { Auth } from './pages/Auth';
import { HostDashboard } from './pages/HostDashboard';
import { BecomeHost } from './pages/BecomeHost';
import { About } from './pages/About';
import { Newsroom } from './pages/Newsroom';
import { Careers } from './pages/Careers';
import { HelpCenter } from './pages/HelpCenter';
import { TravelGuidelines } from './pages/TravelGuidelines';
import { Safety } from './pages/Safety';
import { Cancellation } from './pages/Cancellation';
import { HostExperience } from './pages/HostExperience';
import { CommunityForum } from './pages/CommunityForum';
import { Experiences } from './pages/Experiences';
import { Services } from './pages/Services';
import { Resources } from './pages/Resources';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Sitemap } from './pages/Sitemap';

function App() {
  return (
    <Router>
      <AuthProvider>
        <BookingProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/listings" element={<Listings />} />
                <Route path="/property/:id" element={<PropertyDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/host" element={<HostDashboard />} />
                <Route path="/become-host" element={<BecomeHost />} />
                <Route path="/about" element={<About />} />
                <Route path="/newsroom" element={<Newsroom />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/support" element={<HelpCenter />} />
                <Route path="/guidelines" element={<TravelGuidelines />} />
                <Route path="/safety" element={<Safety />} />
                <Route path="/cancellation" element={<Cancellation />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/host-experience" element={<HostExperience />} />
                <Route path="/community" element={<CommunityForum />} />
                <Route path="/services" element={<Services />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/sitemap" element={<Sitemap />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BookingProvider>
      </AuthProvider>
    </Router> 
  );
}

export default App;
