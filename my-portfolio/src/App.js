import React from 'react';
import Header from './components/Header';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Dark / Light Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeSwitcher />
      </div>

      {/* Header */}
      <header className="pt-24 px-4 sm:px-6 lg:px-8">
        <Header />
      </header>

      {/* Tech Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <TechStack />
      </section>

      {/* Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <Projects />
      </section>

      {/* GitHub Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <GitHubStats />
      </section>

      {/* Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <Contact />
      </section>
    </div>
  );
}

export default App;
