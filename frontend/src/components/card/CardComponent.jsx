import React from 'react';
import style from '../../styles/CardComponents.module.css';
import { Link } from 'react-router-dom';

export default function CardComponent({ review: { bookId, cardTitle, cardImageUrl, approved } }) {
  return (
    <Link to={`/reviews/${bookId}`} key={bookId} className={style.cardFrame}>
      <div className={style.cardTitle}>{cardTitle}</div>
      <img src={cardImageUrl} className={style.cardImage} alt={cardTitle} />
      {!approved && <h2 className={style.lock}>🔒</h2>}
    </Link>
  );
}
