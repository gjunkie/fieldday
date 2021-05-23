import * as React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import { Poster } from '../Poster';

import styles from './AnimatedList.module.css';

export const AnimatedList = ({
  onClickPoster,
  videosList,
}) => {
  const [firstVisiblePoster, setFirstVisiblePoster] = React.useState(500);
  const [isAnimatingList, setIsAnimatingList] = React.useState(false);

  const listRef = React.createRef();

  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToItem(500, "start");
    }
  }, [videosList]);

  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToItem(firstVisiblePoster, "start");
    }
  }, [firstVisiblePoster]);

  const animationComplete = () => {
    setIsAnimatingList(false);
  };

  const scrollLeft = () => {
    setFirstVisiblePoster(firstVisiblePoster - 1);
    setIsAnimatingList(true);
  };

  const scrollRight = () => {
    setFirstVisiblePoster(firstVisiblePoster + 1);
    setIsAnimatingList(true);
  };

  const renderRow = ({ index, style }) => (
    <div style={{
        ...style,
        top: `50px`
      }}>
      <Poster
        id={videosList[index].id}
        imgUrl={videosList[index].poster.url}
        key={index}
        onClick={onClickPoster}
        brand={videosList[index].brand}
      />
    </div>
  );

  const updateVisibleItem = ({ visibleStartIndex }) => {

  };

  return (
    <>
      <div className={styles.carouselWrapper}>
        <AutoSizer>
          {({width}) => (
            <FixedSizeList
              direction="horizontal"
              height={540}
              itemCount={videosList.length}
              itemSize={155}
              onItemsRendered={updateVisibleItem}
              onAnimationComplete={animationComplete}
              ref={listRef}
              width={width}
            >
              {renderRow}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div>
      <div className={styles.controls}>
        <div
          aria-role="button"
          className={styles.button}
          disabled={isAnimatingList}
          onClick={scrollLeft}
          >
          &#60;
        </div>
        <div
          aria-role="button"
          className={styles.button}
          disabled={isAnimatingList}
          onClick={scrollRight}
          >
          &#62;
        </div>
      </div>
    </>
  );
};
