import React from 'react';

const NotesWrapper = ({ noteIds }) => {
  const cardsData = [...Array(5)];
  const cards = cardsData.map((card, index) => (
      <div className="column is-one-third">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              {`Title ${index + 1}`}
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              {`Content ${index + 1}`}
            </div>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              Labels
            </p>
            <p className="card-footer-item">
              Actions
            </p>
          </footer>
        </div>
      </div>
  ));
  return (
    <div className="columns is-multiline is-mobile">
      {cards}
    </div>
  );
};

export default NotesWrapper;
