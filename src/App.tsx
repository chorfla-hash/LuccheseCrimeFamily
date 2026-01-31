import { useState } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import BiographyPage from './pages/BiographyPage';
import HierarchyPage from './pages/HierarchyPage';
import FamilyPage from './pages/FamilyPage';
import CVForm from './pages/CVForm';
import QuestionForm from './pages/QuestionForm';
import { Page, CVData } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cvData, setCVData] = useState<CVData | null>(null);
  const [showQuestions, setShowQuestions] = useState(false);

  const handleCVComplete = (data: CVData) => {
    setCVData(data);
    setShowQuestions(true);
  };

  const handleBackToCV = () => {
    setShowQuestions(false);
  };

  const renderPage = () => {
    if (currentPage === 'cv') {
      if (showQuestions && cvData) {
        return <QuestionForm cvData={cvData} onBack={handleBackToCV} />;
      }
      return <CVForm onComplete={handleCVComplete} />;
    }

    switch (currentPage) {
      case 'home':
        return <LandingPage />;
      case 'biography':
        return <BiographyPage />;
      case 'hierarchy':
        return <HierarchyPage />;
      case 'family':
        return <FamilyPage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation
        currentPage={currentPage}
        onNavigate={(page) => {
          setCurrentPage(page);
          setShowQuestions(false);
        }}
      />
      <div className="pt-16">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
