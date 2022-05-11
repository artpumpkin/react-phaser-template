import { Box } from '@chakra-ui/react';
import Phaser from 'phaser';
import React, { useEffect } from 'react';
import { Main } from 'scenes';

export const emitter = new Phaser.Events.EventEmitter();

export const App = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      backgroundColor: '#388e3c',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
      scene: [Main],
      title: 'React Phaser App',
      url: 'https://example.com',
      version: '0.0.1',
      scale: {
        parent: 'game-container',
        width: 1024,
        height: 768,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
    };

    new Phaser.Game(config);
  }, []);

  return <Box id={'game-container'} />;
};
