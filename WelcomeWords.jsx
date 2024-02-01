import styled from 'styled-components';
import divider from '../assets/images/divider.svg';
import dividerBottom from '../assets/images/divider_bottom.svg';
import { GiPresent } from 'react-icons/gi';
import { GiPartyPopper } from 'react-icons/gi';
import { GiGlassCelebration } from 'react-icons/gi';
import { GiPirateCoat } from 'react-icons/gi';
import { GiFarmTractor } from 'react-icons/gi';
import { motion } from 'framer-motion';
const WelcomeWords = () => {
  return (
    <Wrapper>
      <div className='divider top'>
        <img src={divider} alt='floral divider' />
      </div>
      <motion.div
        className='words'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p>
          <span className='icon'>
            <GiPartyPopper />
          </span>
          Grab your dancing shoes and your best jokes because we're throwing a
          wedding party that's going to be an absolute ripper!
        </p>
        <p>
          <span className='icon'>
            <GiGlassCelebration />
          </span>
          Casual garden party with finger food and drinks are ready to roll.
        </p>
        <p>
          <span className='icon'>
            <GiPresent />
          </span>
          No presents necessary.
        </p>
        <p>
          <span className='icon'>
            <GiPirateCoat />
          </span>
          Dress code? Whether you're suited up or rocking thongs, it's all good
          with us.
        </p>
        <p>
          <span className='icon'>
            <GiFarmTractor />
          </span>
          After party transport? There might be a lift service available,give us
          a shout. But if you're keen to camp out, pitch a tent and stay a night
          in our garden.
        </p>
      </motion.div>
      <div className='divider bottom'>
        <img src={dividerBottom} alt='floral divider' />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #f3f8ff;
  display: grid;
  grid-template-columns: 1fr;
  padding: 5vh 0;
  .divider {
    height: 4rem;
    justify-self: center;
  }
  .words {
    color: #333;
    font-size: 1.5rem;
    margin: 0 15vw;
    display: grid;
    row-gap: 2.5vw;
  }
  p {
    display: flex;
    line-height: 1.5;
  }
  .icon {
    margin-right: 1rem;
  }
  @media (max-width: 920px) {
    .words {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 430px) {
    .words {
      font-size: 1rem;
    }
  }
`;
export default WelcomeWords;
