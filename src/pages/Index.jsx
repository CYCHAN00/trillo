import React from 'react';

const index = () => {
  return (
    <div className='container'>
      <header className='header'>
        <img
          src={require('../assets/logo.png')}
          alt='trillo logo'
          className='logo'
        />
        <form action='#' className='search'>
          <input
            type='text'
            className='search__input'
            placeholder='Search hotels'
          />
          <button className='search__button'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 search__icon'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </form>
        <nav className='user-nav'>
          <div className='user-nav__icon-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 user-nav__icon'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
              />
            </svg>
            <span className='user-nav__notification'>7</span>
          </div>
          <div className='user-nav__icon-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 user-nav__icon'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
              />
            </svg>
            <span className='user-nav__notification'>13</span>
          </div>
          <div className='user-nav__user'>
            <img
              src={require('../assets/user.jpg')}
              alt='UserPhoto'
              className='user-nav__user-photo'
            />
            <span className='user-nav__user-name'>Roy</span>
          </div>
        </nav>
      </header>
      <div className='content'>
        <nav className='sidebar'>
          <ul className='side-nav'>
            <li className='side-nav__item side-nav__item--active'>
              <a href='/#' className='side-nav__link'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 side-nav__icon'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
                <span>Hotel</span>
              </a>
            </li>
            <li className='side-nav__item'>
              <a href='/#' className='side-nav__link'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 side-nav__icon'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                  />
                </svg>
                <span>Flight</span>
              </a>
            </li>
            <li className='side-nav__item'>
              <a href='/#' className='side-nav__link'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 side-nav__icon'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
                  />
                </svg>
                <span>Car rental</span>
              </a>
            </li>
            <li className='side-nav__item'>
              <a href='/#' className='side-nav__link'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 side-nav__icon'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
                  />
                </svg>
                <span>Tours</span>
              </a>
            </li>
          </ul>
          <div className='legal'>&copy; 2022 by Roy.</div>
        </nav>
        <main className='hotel-view'>
          <div className='gallery'>
            <figure className='gallery__item'>
              <img
                src={require('../assets/hotel-1.jpg')}
                alt='PhotoOfHotel1'
                className='gallery__photo'
              />
            </figure>
            <figure className='gallery__item'>
              <img
                src={require('../assets/hotel-2.jpg')}
                alt='PhotoOfHotel2'
                className='gallery__photo'
              />
            </figure>
            <figure className='gallery__item'>
              <img
                src={require('../assets/hotel-3.jpg')}
                alt='PhotoOfHotel3'
                className='gallery__photo'
              />
            </figure>
          </div>
          <div className='overview'>
            <h1 className='overview__heading'>Hotel Las Palmas</h1>

            <div className='overview__star'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 overview__icon-star'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 overview__icon-star'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 overview__icon-star'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 overview__icon-star'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 overview__icon-star'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
            </div>
            <div className='overview__location'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 overview__icon-location'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
              <button className='btn-inline'>Albufeira, Portugal</button>
            </div>
            <div className='overview__rating'>
              <div className='overview__rating-average'>8.6</div>
              <div className='overview__rating-count'>429 votes</div>
            </div>
          </div>

          <div className='detail'>
            <div className='description'>
              <p className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                nisi dignissimos debitis ratione sapiente saepe. Accusantium
                cumque, quas, ut corporis incidunt deserunt quae architecto
                voluptate. Accusantium cumque, quas, ut corporis incidunt
                deserunt quae architecto voluptate delectus, inventore iure
                aliquid aliquam.
              </p>
              <p className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi, totam, itaque officia ex.
              </p>
              <ul className='list'>
                <li className='list__item'>Close to the beach</li>
                <li className='list__item'>Breakfast included</li>
                <li className='list__item'>Free airport shuttle</li>
                <li className='list__item'>Free wifi in all rooms</li>
                <li className='list__item'>Air conditioning and heating</li>
                <li className='list__item'>Pets allowed</li>
                <li className='list__item'>We speak all languages</li>
                <li className='list__item'>Perfect for families</li>
              </ul>
              <div className='recommend'>
                <p className='recommend__count'>
                  Lucy and 3 other friend recommend this hotel.
                </p>
                <div className='recommend__friends'>
                  <img
                    src={require('../assets/user-3.jpg')}
                    alt='User1'
                    className='recommend__photo'
                  />
                  <img
                    src={require('../assets/user-4.jpg')}
                    alt='User1'
                    className='recommend__photo'
                  />
                  <img
                    src={require('../assets/user-5.jpg')}
                    alt='User1'
                    className='recommend__photo'
                  />
                  <img
                    src={require('../assets/user-6.jpg')}
                    alt='User1'
                    className='recommend__photo'
                  />
                </div>
              </div>
            </div>
            <div className='user_reviews'>
              <figure className='review'>
                <blockquote className='review__text'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  doloremque architecto dicta animi, totam, itaque officia ex.
                </blockquote>
                <figcaption className='review__user'>
                  <img
                    src={require('../assets/user-1.jpg')}
                    alt='User1'
                    className='review__photo'
                  />
                  <div className='review__user-box'>
                    <p className='review__user-name'>Nick Smith</p>
                    <p className='review__user-date'>Feb 23rd. 2017</p>
                  </div>
                  <div className='review__rating'>7.8</div>
                </figcaption>
              </figure>

              <figure className='review'>
                <blockquote className='review__text'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  doloremque architecto dicta animi.
                </blockquote>
                <figcaption className='review__user'>
                  <img
                    src={require('../assets/user-2.jpg')}
                    alt='User1'
                    className='review__photo'
                  />
                  <div className='review__user-box'>
                    <p className='review__user-name'>Mary Thomas</p>
                    <p className='review__user-date'>Sept 13th, 2017</p>
                  </div>
                  <div className='review__rating'>9,3</div>
                </figcaption>
              </figure>
              <button className='btn-inline'>
                Show all <span>&rarr;</span>
              </button>
            </div>
          </div>
          <div className='cta'>
            <h2 className='cta__book-now'>
              Good news! We have 4 free rooms for your selected dates!
            </h2>
            <button className='btn'>
              <span className='btn__visible'>Book now</span>
              <span className='btn__invisible'>Only 4 rooms left</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default index;
