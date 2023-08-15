import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFirestore, collection, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import Card from '../../reddit_Components/Card';
import db from "../../firebase";


export default function Trending() {


   getFirestore();
  const colRef = collection(db, 'Trending');

  const [TrendingData, setTrendingData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      let TMovieDataArray = [];
      snapshot.docs.forEach((doc) => {
        TMovieDataArray.push({ ...doc.data(), id: doc.id });
      });
      
      // Sort the trending data in descending order based on the score
      const sortedTrendingData = sortTrendingByScoreDescending(TMovieDataArray);
      setTrendingData(sortedTrendingData);
    });

    return () => {
      // Clean up the real-time data listener
      unsubscribe();
    };
  }, []);


  // Function to handle upvote click
  function UpVoteClick(index) {
    const updatedTrendingData = [...TrendingData];
    updatedTrendingData[index].score++;

    // Sort the trending data in descending order based on the score
    const sortedTrendingData = sortTrendingByScoreDescending(updatedTrendingData);
    setTrendingData(sortedTrendingData);

    // Update the score in the Firestore
    const movieId = updatedTrendingData[index].id;
    const scoreToUpdate = updatedTrendingData[index].score;
    const movieDocRef = doc(db, 'Trending', movieId);
    updateDoc(movieDocRef, { score: scoreToUpdate });
  }

  // Function to handle downvote click
  function DownVoteClick(index) {
    const updatedTrendingData = [...TrendingData];
    updatedTrendingData[index].score--;

    // Sort the trending data in descending order based on the score
    const sortedTrendingData = sortTrendingByScoreDescending(updatedTrendingData);
    setTrendingData(sortedTrendingData);

    // Update the score in the Firestore
    const movieId = updatedTrendingData[index].id;
    const scoreToUpdate = updatedTrendingData[index].score;
    const movieDocRef = doc(db, 'Trending', movieId);
    updateDoc(movieDocRef, { score: scoreToUpdate });
  }

  // Function to sort trending data in descending order based on score
  function sortTrendingByScoreDescending(data) {
    return data.slice().sort((a, b) => b.score - a.score);
  }

  return (
    <Container>
      <h1 className="flex flex-initial m-3 text-3xl font-serif text-white"> Trending Movies </h1>
    <Content>
      {TrendingData.map((doc, index) => (
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

const Container = styled.div`
  padding: 0 20px 26px;
`;

const CardStyling = styled.div`
  margin: 10px 0;
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