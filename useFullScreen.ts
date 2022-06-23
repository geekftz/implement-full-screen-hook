import { useCallback, useEffect, useRef, useState } from 'react';

export function useFullScreen() {
  const ref = useRef<any>();
  const isFull = useRef<boolean>(false);

  useEffect(() => {
    listenFullScreenEvent();
  }, []);

  const listenFullScreenEvent = useCallback(() => {
    ref?.current?.addEventListener('fullscreenchange', (e: any) => {
      console.log(
        '🚀 --> ref?.current?.addEventListener --> isFull',
        isFull.current
      );

      if (isFull.current) {
        console.log(111);
        ref.current!.currentTime = 0;
        ref.current.play();
        isFull.current = false;
      } else {
        ref.current.pause();
      }
    });
  }, []);

  const enter = useCallback(() => {
    ref?.current?.requestFullscreen().then(() => {
      isFull.current = true;
    });
  }, []);

  const leave = useCallback(() => {
    ref?.current?.exitFullscreen().then(() => {
      isFull.current = false;
    });
  }, []);

  return [ref, enter, leave];
}
