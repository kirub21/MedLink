declare module 'react-youtube' {
  import * as React from 'react';

  interface YouTubeProps {
    videoId?: string;
    id?: string;
    className?: string;
    containerClassName?: string;
    opts?: {
      height?: string;
      width?: string;
      playerVars?: Record<string, any>;
    };
    onReady?: (event: any) => void;
    onPlay?: (event: any) => void;
    onPause?: (event: any) => void;
    onEnd?: (event: any) => void;
    onError?: (event: any) => void;
    onStateChange?: (event: any) => void;
  }

  export default class YouTube extends React.Component<YouTubeProps> {}
}
