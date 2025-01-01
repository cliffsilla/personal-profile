import React, { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  fallbackImage?: string;
}

export default function VideoBackground({ fallbackImage }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play the video
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, show fallback image
          if (fallbackImage) {
            video.style.display = 'none';
          }
        });
      }
    }
  }, [fallbackImage]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70 z-10" />
      {fallbackImage && (
        <img
          src={fallbackImage}
          alt="Background"
          className="absolute w-full h-full object-cover"
          style={{ display: 'none' }}
        />
      )}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-typing-on-a-keyboard-9444/1080p.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.coverr.co/videos/coverr-close-up-of-computer-coding-1584/1080p.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
