import { Route, Routes } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Home from '../pages/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};