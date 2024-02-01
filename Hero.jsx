import {
  AnimatePresence,
  easeInOut,
  motion,
  stagger,
  useAnimate,
  useInView,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/wedding logo.png';

const Hero = () => {
  const dropVariant = {
    hidden: { opacity: 0, y: -50 },
    visual: { opacity: 1, y: 0, transition: { duration: 1, delay: 2.8 } },
  };
  const dateVariant = {
    hidden: { opacity: 0, y: -50 },
    visual: { opacity: 1, y: 0, transition: { duration: 1, delay: 5 } },
  };
  const name1 = 'Sebastian';
  const name2 = 'Jing';
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    animate(
      'span',
      { opacity: 1, y: 0 },
      { delay: stagger(0.1, { startDelay: 3.5 }), duration: 1.5 }
    );
  }, [isInView]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const letterVariant = {
    hidden: { opacity: 0, y: -30 },
  };

  return (
    <Wrapper>
      <AnimatePresence>
        {loading && (
          <motion.div
            className='opening'
            key='logo'
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.img
              src={logo}
              alt='logo'
              className='logo'
              key='logo'
              initial={{ scale: 0.5 }}
              animate={{
                scale: 1,
                transition: { duration: 1, ease: 'linear' },
              }}
              exit={{
                scale: 2.5,
                transition: { duration: 1, ease: 'linear' },
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className='container'
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, delay: 2.2, ease: 'easeIn' },
        }}
      >
        <div className='content'>
          <motion.p
            className='title'
            variants={dropVariant}
            initial='hidden'
            whileInView='visual'
            viewport={{ once: true }}
          >
            We are getting married!
          </motion.p>
          <div className='name' ref={scope}>
            <h1 className='handwriting first'>
              {name1.split('').map((letter, index) => {
                return (
                  <motion.span
                    key={index}
                    variants={letterVariant}
                    initial='hidden'
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </h1>
            <h3 className='handwriting second'>
              <motion.span variants={letterVariant} initial='hidden'>
                &amp;
              </motion.span>
            </h3>
            <h1 className='handwriting third'>
              {name2.split('').map((letter, index) => {
                return (
                  <motion.span
                    key={index}
                    variants={letterVariant}
                    initial='hidden'
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </h1>
          </div>
          <div className='date'>
            <motion.p
              variants={dateVariant}
              initial='hidden'
              whileInView='visual'
              viewport={{ once: true }}
            >
              16 . 03 . 24
            </motion.p>
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  .opening {
    background-color: rgb(248, 248, 248);
    height: 100%;
    width: 100%;
    grid-area: 1/1/2/2;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
  }
  .container {
    grid-area: 1/1/2/2;
    background-image: url('../src/assets/images/hero.jpg');
    background-position: center;
    background-size: cover;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #638889;
    align-content: center;
  }
  .content {
    grid-column: 2/3;
    justify-self: center;
    display: grid;
    grid-template-rows: min-content max-content min-content;
    row-gap: 8vh;
  }
  .title {
    font-size: 1.5rem;
    grid-row: 1/2;
    justify-self: center;
  }
  .name {
    font-family: 'Great Vibes', cursive;
    font-size: 3rem;
    grid-row: 2/3;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    text-align: center;
  }
  .first {
    grid-row: 1/2;
  }
  .second {
    grid-row: 2/3;
    align-self: center;
  }
  .third {
    grid-row: 3/4;
  }
  .date {
    font-size: 1.5rem;
    grid-row: 3/4;
    align-self: center;
    justify-self: center;
  }
  @media (max-width: 920px) {
    .name {
      font-size: 2.5rem;
    }
    .title,
    .date {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 780px) {
    .name {
      font-size: 2rem;
    }
    .title,
    .date {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 430px) {
    .content {
      margin-left: -35px;
    }
    .name {
      font-size: 1.8rem;
    }
    .title,
    .date {
      font-size: 1rem;
    }
  }
`;
export default Hero;
