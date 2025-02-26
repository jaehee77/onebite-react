import React from 'react';
import style from './voca.module.css';
import { Link } from 'react-router-dom';

export default function VocaHeader() {
  return (
    <div className={style.header}>
      <h1>
        <Link to="/">영단어 단어장</Link>
      </h1>
      <div className={style.menu}>
        <a href="#none" className={style.link}>
          단어 추가
        </a>
        <a href="#none" className={style.link}>
          Day 추가
        </a>
      </div>
    </div>
  );
}
