import * as React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import { Poster } from '../Poster';

import styles from './AnimatedList.module.css';

function easeInOutQuint(t) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
}

export const AnimatedList = ({
  onClickPoster,
  videosList,
}) => {
  const [firstVisiblePoster, setFirstVisiblePoster] = React.useState(500);
  const [isAnimatingList, setIsAnimatingList] = React.useState(false);
  const [scrollOffsetInitial, setScrollOffsetInitial] = React.useState(0);
  const [scrollOffsetFinal, setScrollOffsetFinal] = React.useState(0);
  const [scrollToItem, setScrollToItem] = React.useState(500);
  const [animationStartTime, setAnimationStartTime] = React.useState(undefined);

  const listRef = React.createRef();

  React.useEffect(() => {
    initAnimation();
  }, [])
  // React.useEffect(() => {
  //   animate();
  // }, [animationStartTime])

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

  const scrollLeft = () => {
    console.log('left')
    setScrollToItem(scrollToItem - 1);
    setIsAnimatingList(true);
  };

  const scrollRight = () => {
    console.log('right')
    setScrollToItem(scrollToItem + 1);
    setIsAnimatingList(true);
  };

  const renderRow = ({ index, style }) => (
    <div style={{
        ...style,
        paddingTop: `50px`
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

  const initAnimation = () => {
    if (animationStartTime) {
      throw Error('Animation in progress'); // You handle this however you want.
    }

    const itemSize = videosList.length;

    setScrollOffsetFinal(scrollToItem * itemSize)
    setAnimationStartTime(performance.now());
  };

  const animate = () => {
    requestAnimationFrame(() => {
      const duration = 500;
      const now = performance.now();
      const ellapsed = now - animationStartTime;
      const scrollDelta = scrollOffsetFinal - scrollOffsetInitial;
      const easedTime = easeInOutQuint(Math.min(1, ellapsed / duration));
      const scrollOffset = scrollOffsetInitial + scrollDelta * easedTime;

      if (listRef.current) {
        listRef.current.scrollTo(scrollOffset);
      }

      if (ellapsed < duration) {
        animate();
      } else {
        setAnimationStartTime(undefined);
        setScrollOffsetInitial(scrollOffsetFinal);
        setIsAnimatingList(false);
      }
    });
  };

  const onScroll = ({ scrollOffset, scrollUpdateWasRequested }) => {
    if (!scrollUpdateWasRequested) {
      setScrollOffsetInitial(scrollOffset);
    }
  };

  return (
    <>
      <div className={styles.carouselWrapper}>
        <AutoSizer>
          {({width}) => (
            <FixedSizeList
              layout="horizontal"
              height={595}
              itemCount={videosList.length}
              itemSize={155}
              onScroll={onScroll}
              ref={listRef}
              scrollToItem={scrollToItem}
              width={width}
            >
              {renderRow}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div>
      <div className={styles.controls}>
        <div
          role="button"
          className={styles.button}
          disabled={isAnimatingList}
          onClick={scrollLeft}
          >
          &#60;
        </div>
        <div
          role="button"
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
