import "./styles.css";
import React from "react";
import "./styles.css";
import { useState } from "react";

const BestMusic = {
  Love: [
    {
      name: "Love Story",
      Description:
        "Taylor Swift wrote this song based on a personal experience in her life, just as most of her songs are. The story which this song's lyrics are based on goes back to Swifts' teenage years when her parents did not like her boyfriend at the time and thought that he was a creep; however, Swift thought she was in love. She is Juliet and the unnamed boyfriend is Romeo in the line my daddy said to stay away from Juliet.",
      rating: "5/5"
    },

    {
      name: "Mere samne wali khidki",
      Description:
        "Mere Samne Wali Khidki Mein Lyrics are from Bollywood movie Padosan. This Bollywoods  musical comedy film was released on 29 November 1968. Lyrics Of Mere Samne Wali Khidki Mein written by Lyricist Rajendra Krishan. The song composed by music composer R.D. Burman. The music label by Rajshri (music company). Soundtracks of the movie Padosan was released in 1968. The song Mere Samne Wali Khidki Mein sung by Bollywood singer Kishore Kumar.",
      rating: "4.5/5"
    },
    {
      name: "Raatan lambiya",
      Description:
        "Kaatun kaise raatan, o saawre?Jiya nahi jaata, sun bawre?The days are long, the nights even longer- especially when one is without their beloved lover.",
      rating: "5/5"
    }
  ],

  Happy: [
    {
      name: "Photograph",
      Description:
        "The song “Photograph” I talks about a man who separates from someone (a woman) who he loves. He tells her that he may not be present with her physically, but he'll be there in her heart forever. He tells her that every photograph holds a story. Photographs have the power to keep memories alive. So he tells the lady that in case if she misses him, she can always look at a photograph of him and revive memories, and through a photograph, she will have the power to take him wherever she goes.",
      rating: "5/5"
    },
    {
      name: "Umbrella",
      Description:
        "The song was originally written with Britney Spears in mind, but her label rejected it. Umbrella is a pop, hip hop and R&B song with rock elements, referring to a romantic and platonic relationship and the strength of that relationship.",
      rating: "4/5"
    },
    {
      name: "Okay not to be OKay",
      Description:
        "OK Not to Be OK is a song by American music producer Marshmello and singer Demi Lovato. It was released on September 10, 2020, via Island Records and Joytime Collective, in partnership with the Hope For The Day suicide prevention movement.[2] The song was later included on the expanded edition of Lovato's seventh studio album",
      rating: "4.5/5"
    }
  ],

  Soothing: [
    {
      name: "Alag Aasma",
      Description:
        "“Alag Aasmaan” is the fifth studio single by Anuv Jain. It is a song about a long-distance relationship where it’s hard to bid farewell as you just get the opportunity to meet with your accomplice extremely less.",
      rating: "4/5"
    },
    {
      name: "shaamein",
      Description:
        "Shaamein Lyrics by Armaan Malik is Latest Hindi song from “Broken But Beautiful Season 2” featuring Vikrant M, Harleen S. The music of new song is given by Amaal Mallik while lyrics written by Manoj Muntashir.",
      rating: "5/5"
    },
    {
      name: "chitta ",
      Description:
        "This is currently the world's most popular and favourite song.A love story which lives beyond the lives of two people – how can death separate them? Kabhii Tumhhe is the moment when neither of them knew they were meeting for the last time, saying goodbye for the last time.",
      rating: "4/5"
    }
  ],
  Friendship: [
    {
      name: "Best Friends",
      Description:
        "In 2016, Marshmello remixed Anne-Marie's song Alarm.[6][7] Fond of the remix, Anne-Marie wanted to collaborate with Marshmello, and eventually they met in a studio in London, where production of the song commenced",
      rating: "5/5"
    },
    {
      name: "Friends",
      Description:
        "Friends(stylized in all caps) is a song by American DJ and producer Marshmello and English singer Anne-Marie. It was written by the two artists, Eden Anderson, Richard Boardman, Jasmine Thompson, Nat Dunn, Sarah Blanchard and Pablo Bowman.The song was originally written with Britney Spears in mind, but her label rejected it. Umbrella is a pop, hip hop and R&B song with rock elements, referring to a romantic and platonic relationship and the strength of that relationship.",
      rating: "4/5"
    },
    {
      name: "I'll be there for you",
      Description:
        "I'll Be There for You is a song by American pop rock duo the Rembrandts. The song was written by David Crane, Marta Kauffman, Michael Skloff, and Allee Willis as the main theme song to the NBC sitcom Friends,[2] which was broadcast from 1994 to 2004.[3] American rock band R.E.M. were originally asked to allow one of their songs to be used for the Friends theme, but they turned the opportunity down.",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Relax");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎵 BestMusic </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite music. Select a mood type to get started{" "}
      </p>

      <div>
        {Object.keys(BestMusic).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {BestMusic[selectedGenre].map((Music) => (
            <li
              key={Music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {Music.name} </div>
              <br></br>
              <div style={{ fontSize: "smaller" }}> {Music.Description} </div>
              <br></br>
              <div style={{ fontSize: "smaller" }}> {Music.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}