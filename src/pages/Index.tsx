
// This file is replaced by HomePage.tsx - redirects handled in App.tsx routing
import { Navigate } from 'react-router-dom';

const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
