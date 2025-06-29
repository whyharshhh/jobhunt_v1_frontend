import { Divider, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import HomePage from './pages/HomePage';
import { createTheme } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@mantine/carousel/styles.css';
import FindJobs from './pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalent from './pages/FindTalent';
import TalentProfilePage from './pages/TalentProfilePage';
import PostJobPage from './pages/PostJobPage';
import '@mantine/tiptap/styles.css';
import JobDescPage from './pages/JobDescPage';
import ApplyJobsPage from './pages/ApplyJobsPage';
import CompanyPage from './pages/CompanyPage';
import PostedJobPage from './pages/PostedJobPage';
import JobHistoryPage from './pages/JobHistoryPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';


function App() {
  const theme = createTheme({
    primaryColor: 'brightSun',
    primaryShade: 4,
    colors: {
        'brightSun': [
            '#fff6b', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20', 
            '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902'
        ],
        'mineShaft': [
            '#ff6f6f6', '#e7e7e7', '#dd1d1d1', '#bbbbb0', '#888888',
            '#dd6d6d', '#5d5d5d', '#4f4f4f', '#45d5d5', '#3d3d3d', '#2d2d2d'
        ]
    },
    fontFamily: 'Poppins, sans-serif'
});
  
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
        <div className='relative'>
          <Header />
          <Divider size="xs" mx="md" />
          <Routes>
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/find-talent" element={<FindTalent />} />
            <Route path="/talent-profile" element={<TalentProfilePage />} />
            <Route path="/posted-job" element={<PostedJobPage />} />
            <Route path="/jobs" element={<JobDescPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/apply-jobs" element={<ApplyJobsPage />} />
            <Route path="/job-history" element={<JobHistoryPage />} />
            <Route path="/post-job" element={<PostJobPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<SignUpPage />} />
            <Route path="/about" element={<FindJobs />} />
            <Route path="/profile" element={<ProfilePage />} />


            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
