"use client";
import { useState, useEffect } from "react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    // Set up the audio object with the correct path
    const newAudio = new Audio("/music.mp3");
    newAudio.loop = true;
    newAudio.volume = 0.2;
    setAudio(newAudio);

    // Clean up audio object on unmount
    return () => {
      newAudio.pause();
      setAudio(null);
    };
  }, []);

  useEffect(() => {
    // Handle playing and pausing
    if (audio) {
      isPlaying
        ? audio.play().catch((e) => console.error("Play failed", e))
        : audio.pause();
    }
  }, [isPlaying, audio]);

  if (typeof window === "undefined" || !audio) return null;

  // Toggle the play state
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center shadow-lg focus:outline-none"
      aria-label={
        isPlaying ? "Pause background music" : "Play background music"
      }
    >
      {isPlaying ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.364 5.636a9 9 0 1112.728 12.728 9 9 0 01-12.728-12.728z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v8m4-4H8"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14.752 11.168a.75.75 0 000 1.664H21.75a.75.75 0 000-1.664h-7zM14.752 11.168L9 8.528v6.944l5.752-3.304z"
          />
        </svg>
      )}
    </button>
  );
};

export default BackgroundMusic;
