import React from 'react';

interface SideBarProps {
  selectedGenre: GenreResponseProps
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

const SideBar: React.FC<SideBarProps> = ({ selectedGenre }) => {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  );
}

export default SideBar;