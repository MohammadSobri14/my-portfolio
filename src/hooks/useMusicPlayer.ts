import { useEffect, useRef, useState } from 'react';

export const useMusicPlayer = (audioSrc: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(audioSrc);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    // Attempt autoplay
    const playAudio = async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Autoplay blocked by browser:', error);
        setIsPlaying(false);
      }
    };

    playAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  return { isPlaying, togglePlayPause, volume, handleVolumeChange };
};
