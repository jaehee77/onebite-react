import React from 'react';

export default function DiaryHeader({
  title,
  leftChild,
  rightChild,
}) {
  return (
    <header className="diary-header">
      {leftChild && <div className="d-header-left">{leftChild}</div>}
      {title && <div className="d-header-center">{title}</div>}
      {rightChild && (
        <div className="d-header-right">{rightChild}</div>
      )}
    </header>
  );
}
