import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import Home from './pages/Home';
import Layout from './components/Layout';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="todo-theme">
      <TaskProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </Router>
        <Toaster />
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
