import React, { useState, useRef } from 'react';

import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { InputBase, Paper, Typography } from '@mui/material';

import { useCurrentDeck } from '../../contexts/currentSlide.context';
import { useDecks } from '../../contexts/deck.context';

import { getBgColorCSS } from '../../utils/slides';

import useDimensions from '../../hooks/useDimensions';
import { updateContentPositionActionCreator, updateContentValueActionCreator } from '../../actions';

import SlideStyles from './Slide.module.scss';

const Slide: React.FC = () => {
  const containerRef = useRef(null);

  const {
    deckConfig: { defaultBgColor, slides },
    dispatch,
  } = useDecks();

  const [isTextEditable, setTextEditable] = useState(false);

  const { selectedSlide } = useCurrentDeck();

  const { width, height } = useDimensions(containerRef);

  if (slides.length > selectedSlide) {
    const { contents } = slides[selectedSlide];

    const handleDrag = (_: DraggableEvent, data: DraggableData, id: string) => {
      const { x, y } = data;

      dispatch(
        updateContentPositionActionCreator({
          id,
          selectedSlide,
          x: x,
          y: y,
          xPercentage: (x / width) * 100,
          yPercentage: (y / height) * 100,
        }),
      );
    };

    const onChangeContentValue = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      id: string,
    ) => {
      dispatch(
        updateContentValueActionCreator({ id, selectedSlide, value: e.currentTarget.value }),
      );
    };

    const onTypographyClick = () => setTextEditable(true);

    const onInputBlurred = () => setTextEditable(false);

    return (
      <Paper
        ref={containerRef}
        elevation={6}
        sx={{
          background: defaultBgColor.mainColor,
          backgroundImage: getBgColorCSS(defaultBgColor),
        }}
        className={SlideStyles['container']}
      >
        {contents.map(({ id, variant, value, x, y, xPercentage, yPercentage }) =>
          !isTextEditable ? (
            <Draggable
              key={id}
              defaultClassName={SlideStyles['draggable']}
              defaultClassNameDragging={SlideStyles['dragging']}
              grid={[32, 32]}
              onStop={(...args) => handleDrag(...args, id)}
              defaultPosition={{ x: x, y: y }}
              bounds="parent"
            >
              <Typography variant={variant} component="div" onDoubleClick={onTypographyClick}>
                {value}
              </Typography>
            </Draggable>
          ) : (
            <InputBase
              key={id}
              className={`${SlideStyles['input']} ${SlideStyles[`typography-${variant}`]}`}
              sx={{
                width: `${value.length}ch`,
                left: `${xPercentage}%`,
                top: `${yPercentage}%`,
              }}
              value={value}
              inputProps={{ 'aria-label': 'slide-content' }}
              onChange={(arg) => onChangeContentValue(arg, id)}
              onBlur={onInputBlurred}
            />
          ),
        )}
      </Paper>
    );
  }

  return null;
};

export default Slide;
