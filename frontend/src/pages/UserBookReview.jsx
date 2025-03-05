import React, { useEffect, useState } from 'react';
import authApi from '../api/authApi';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardComponent from '../components/card/CardComponent';
import style from '../styles/CardComponents.module.css';

export default function UserBookReview() {
  const { username } = useParams();
  const loginUsername = useSelector((state) => state.auth.username);
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        const reviews = await authApi.getUserReviews(username);
        setUserReviews(reviews.data.userBookReviews);
      } catch (e) {
        console.error(e);
      }
    };

    fetchUserReviews();
  }, [username]);

  return (
    <>
      {userReviews.length > 0 ? (
        <div className={style.cardContainer}>
          {userReviews.map((review) => (
            <CardComponent key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <p>리뷰가 없습니다.</p>
      )}
    </>
  );
}
