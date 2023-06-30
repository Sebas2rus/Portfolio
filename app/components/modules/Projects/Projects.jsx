import React from 'react';
import styles from './styles.module.scss';
import SectionTitle from '@/ui/SectionTitle/SectionTitle';
import FeaturesProject from '@/ui/Cards/FeaturesProject';

export default function Projects() {
  const projects = [
    {
      title: 'Featured Project',
      image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg',
      name: 'Halcyon Theme',
      description:
        'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on __Visual Studio Marketplace__, __Package Control__, __Atom Package Manager__, and __npm__.',
      technologies: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
      gitHubUrl: 'https://github.com/',
      hostedUrl: '#',
      readMoreUrl: '#',
    },
    {
      title: 'Featured Project',
      image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg',
      name: 'Build a Spotify Connected App',
      description:
        'Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotifys OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.',
      technologies: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku'],
      gitHubUrl: 'https://github.com/',
    },
    {
      title: 'Featured Project',
      image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg',
      name: 'Spotify Profile',
      description:
        'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      technologies: ['React', 'Express', 'Spotify API', 'Styled Components'],
      gitHubUrl: 'https://github.com/',
      readMoreUrl: '#',
    },
  ];

  return (
    <div className="container">
      <SectionTitle number="03" title="Some Things I’ve Built" />
      <FeaturesProject data={projects} />
    </div>
  );
}
