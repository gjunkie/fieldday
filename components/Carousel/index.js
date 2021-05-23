import * as React from 'react'
import styles from './Carousel.module.css'
import { Poster } from '../Poster'

export const Carousel = ({
  onClickPoster,
  videos
}) => {
  const [videosList, setPostList] = React.useState([]);
  // tracking on which page we currently are
  const [page, setPage] = React.useState(1);
  // add loader refrence
  const loader = React.useRef(null);
  const listRef = React.useRef(null);

  React.useEffect(() => {
    var options = {
      root: null,
      rootMargin: "500px",
      threshold: .5
    };
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current)
    }
  }, []);

  React.useEffect(() => {
    // here we simulate adding new posts to List
    const newList = videosList.concat(videos);
    setPostList(newList);
  }, [page, videos])


  // here we handle what happens when user scrolls to Load More div
  // in this case we just update page variable
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage(page => page + 1);
    }
  }

  const [x, setX] = React.useState();
  const [y, setY] = React.useState();

  const handleMouse = (e) => {
    // Verify that x and y already have some value
    if (x && y && listRef.current) {
      // Scroll window by difference between current and previous positions
      // const element = document.getElementsByClassName('carousel').scrollBy(e.clientX - x, e.clientY - y);
      // element.scrollLeft = x;
      listRef.current.scrollIntoView()
    }

    // Store current position
    setX(e.clientX);
    setY(e.clientY);
  }

  // Assign handleMouse to mouse movement events
  // document.onmousemove = handleMouse;

  return (
    <ul
      className={styles.carousel}
      onMouseOver={handleMouse}
    >
      { videosList.map(video => (
        <Poster
          id={video.id}
          imgUrl={video.poster.url}
          key={`page-${page}-${video.id}`}
          onClick={onClickPoster}
          brand={video.brand}
          ref={listRef}
        />
        ))
      }
      <li className="loading" ref={loader}>
        <h2>Load More</h2>
      </li>
    </ul>
  )
};
