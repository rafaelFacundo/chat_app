import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/loginScreen';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
      </Routes>
    </Router>
  );
}
