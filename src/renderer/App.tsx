import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import SignUpScreen from './src/screens/SignUpScreen';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpScreen />} />
      </Routes>
    </Router>
  );
}
