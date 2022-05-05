import { Box } from '@chakra-ui/react';
import Phaser from 'phaser';
import React, { useEffect } from 'react';
import { Main } from 'scenes';

export const emitter = new Phaser.Events.EventEmitter();

export const App = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: '100%',
      height: '100%',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
      scene: [Main],
      scale: {
        parent: 'game-container',
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
      },
    };

    new Phaser.Game(config);
  }, []);

  return <Box id={'game-container'} w={'100%'} h={'100%'} />;
};
