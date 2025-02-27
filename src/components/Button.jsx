import React from 'react';

export default function Button({ text, type, onClick }) {
  return (
    <button
      className={`button ${type ? `button-${type}` : ''}`.trim()}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
