import React from 'react';

import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { Paper, Typography } from '@mui/material';

import { useCurrentDeck } from '../../contexts/currentSlide.context';
import { useDecks } from '../../contexts/deck.context';

import { getBgColorCSS } from '../../utils/slides';

import SlideStyles from './Slide.module.scss';
import { updateContentPositionActionCreator } from '../../actions';

const Slide: React.FC = () => {
  const {
    deckConfig: { defaultBgColor, slides },
    dispatch,
  } = useDecks();

  const { selectedSlide } = useCurrentDeck();

  if (slides.length > selectedSlide) {
    const { contents } = slides[selectedSlide];

    const handleDrag = (_: DraggableEvent, data: DraggableData, id: string) => {
      const { x, y } = data;

      dispatch(
        updateContentPositionActionCreator({ id, selectedSlide, positionX: x, positionY: y }),
      );
    };

    return (
      <Paper
        elevation={6}
        sx={{
          background: defaultBgColor.mainColor,
          backgroundImage: getBgColorCSS(defaultBgColor),
        }}
        className={SlideStyles['container']}
      >
        {contents.map(({ id, variant, value, positionX, positionY }) => (
          <Draggable
            key={id}
            defaultClassName={SlideStyles['draggable']}
            defaultClassNameDragging={SlideStyles['dragging']}
            grid={[32, 32]}
            onStop={(...args) => handleDrag(...args, id)}
            defaultPosition={{ x: positionX, y: positionY }}
            bounds="parent"
          >
            <Typography variant={variant} component="div">
              {value}
            </Typography>
          </Draggable>
        ))}
      </Paper>
    );
  }

  return null;
};

export default Slide;
