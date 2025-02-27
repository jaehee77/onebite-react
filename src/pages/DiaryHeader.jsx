import React from 'react';

export default function DiaryHeader({
  title,
  leftChild,
  rightChild,
}) {
  return (
    <header className="diary-header">
      <div className="d-header-left">{leftChild}</div>
      <div className="d-header-center">{title}</div>
      <div className="d-header-right">{rightChild}</div>
    </header>
  );
}

