import React from 'react';

interface PaginationProps {
  onPrevious: () => void;
  onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ onPrevious, onNext }) => {
  return (
    <div className="pagination">
      <button className="previous-button" onClick={onPrevious}>Previous Pokemon</button>
      <button className="next-button" onClick={onNext}>Next Pokemon</button>
    </div>
  );
};

export default Pagination;