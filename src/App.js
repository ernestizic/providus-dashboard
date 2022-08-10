import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import HomeScreen from './screens/HomeScreen';
import NewAccountScreen from './screens/NewAccountScreen';

import './scss/style.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path='/new-account' element={<NewAccountScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
