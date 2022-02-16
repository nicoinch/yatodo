import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Button from './components/buttons/Button';
import logoDark from './images/logo-dark.png';
import logoLight from './images/logo-light.png';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Project from './pages/Project';
import CreateProject from './pages/CreateProject';
import CreateTask from './pages/CreateTask';

function App() {
  const location = useLocation();
  const [dark, setDark] = React.useState(false);

  return (
    <div className={`${dark ? 'bg-black' : 'bg-white'} h-full`}>
      <div
        className={`min-h-screen flex flex-col items-center justify-center relative ${
          dark ? 'bg-black' : 'bg-white'
        }`}
      >
        <div className={`max-w-xxl w-full relative`}>
          {location.pathname !== '/' && (
            <Button
              className={'absolute top-0 left-0 m-4'}
              dark={dark}
              color={'gray'}
              label={'< Go back'}
              outlined
              small
              onClick={() => window.history.back()}
            />
          )}
          <Button
            className={'absolute top-0 right-0 m-4'}
            dark={dark}
            color={'gray'}
            label={dark ? 'Go light' : 'Go dark'}
            outlined
            small
            onClick={() => setDark(!dark)}
          />
        </div>
        <div className={'flex justify-center w-full'}>
          <Link to={'/'}>
            <img className={'w-32'} src={dark ? logoDark : logoLight} alt="logo" />
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home dark={dark} />}>
            <Route path="projects" element={<Projects dark={dark} />}>
              <Route path=":projectId" element={<Project dark={dark} />}>
                <Route path="newTask" element={<CreateTask dark={dark} />} />
              </Route>
            </Route>
            <Route path="tasks" element={<Tasks dark={dark} />} />
            <Route path="projects/new" element={<CreateProject dark={dark} />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
