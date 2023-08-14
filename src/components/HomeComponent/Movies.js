
import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";
import { getDatabase, ref, onValue, set , } from "firebase/database";
import Card from "../../reddit_Components/Card";
import { initializeApp } from "firebase/app";

function Movies() {
  const firebaseConfig = {
    apiKey: "AIzaSyDuoPwHRZ_T5IcivnhBcel1guYgcUe0dJ0",
    authDomain: "ai-flix-678f3.firebaseapp.com",
    projectId: "ai-flix-678f3",
    storageBucket: "ai-flix-678f3.appspot.com",
    messagingSenderId: "393754793668",
    appId: "1:393754793668:web:c5f14ac85f353701c55b91",
  };

  // initializeApp(firebaseConfig);
  initializeApp(firebaseConfig);

  const db = getFirestore();
  const colRef = collection(db, "Movies");

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      let MovieDataArray = [];
      snapshot.docs.forEach((doc) => {
        MovieDataArray.push({ ...doc.data(), id: doc.id });
      });

      // Sort the trending data in descending order based on the score
      const sortedMoviesData = sortMoviesByScoreDescending(MovieDataArray);
      setMovieData(sortedMoviesData);
    });

    return () => {
      // Clean up the real-time data listener
      unsubscribe();
    };
  }, []);


  function UpVoteClick(index) {
    const updatedMovieData = [...movieData];
    updatedMovieData[index].score++;

    // Sort the movie data in descending order based on the score
    const sortedMovieData = sortMoviesByScoreDescending(updatedMovieData);
    setMovieData(sortedMovieData);

    // Update the score in the Realtime Database
    const movieId = updatedMovieData[index].id;
    const scoreToUpdate = updatedMovieData[index].score;
    const movieDocRef = doc(db, "Movies", movieId);
    updateDoc(movieDocRef, { score: scoreToUpdate });
  }

  // Function to handle downvote click
  function DownVoteClick(index) {
    const updatedMovieData = [...movieData];
    updatedMovieData[index].score--;

    // Sort the movie data in descending order based on the score
    const sortedMovieData = sortMoviesByScoreDescending(updatedMovieData);
    setMovieData(sortedMovieData);

    // Update the score in the Realtime Database
    const movieId = updatedMovieData[index].id;
    const scoreToUpdate = updatedMovieData[index].score;
    const movieDocRef = doc(db, "Movies", movieId);
    updateDoc(movieDocRef, { score: scoreToUpdate });
  }

  // Function to sort movies in descending order based on score
  function sortMoviesByScoreDescending(movies) {
    return movies.slice().sort((a, b) => b.score - a.score);
  }
  return (
    <Container>
      <h1 className="flex flex-initial m-3 text-3xl font-serif text-white"> Latest Movies </h1>
      <Content >
        {movieData.map((doc, index) => (
          <CardStyling key={doc.id}  className="flex justify-center">
            <Card className="justify-center"
              title={doc.title}
              videoUrl={doc.videoUrl}
              desc={doc.desc}
              score={doc.score}
              upVoteClicked={() => UpVoteClick(index)}
              downVoteClicked={() => DownVoteClick(index)}
            />
          </CardStyling>
        ))}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  padding: 0 20px 26px;
`;

const CardStyling = styled.div`
  
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat( 3, minmax(300px, 1fr))
  ; /* Responsive grid */
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr)); /* Single column on small screens */
  }-+ 
  `;