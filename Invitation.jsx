import styled from 'styled-components';
import couple1 from '../assets/images/couple1.jpg';
import couple2 from '../assets/images/couple2.jpg';
import boyly from '../assets/images/boyly.jpg';
import { motion } from 'framer-motion';
const Invitation = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visual: { opacity: 1 },
  };
  const raiseVariant = {
    hidden: { opacity: 0, y: 100 },
    visual: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };
  return (
    <Wrapper>
      <motion.div
        className='invitation'
        variants={containerVariant}
        initial='hidden'
        animate='visual'
      >
        <motion.div
          className='ceremony'
          variants={raiseVariant}
          initial='hidden'
          whileInView='visual'
          viewport={{ once: true }}
        >
          <h1 className='title'>Ceremony</h1>
          <div className='info'>
            <p>Small Forest Ceremony</p>
            <p>Within Family Circle</p>
            <p>08 . 03 . 24</p>
            <p>Friday</p>
          </div>
        </motion.div>
        <div className='imgContainer1'>
          <div className='container'>
            <motion.img
              src={couple1}
              alt='couple photo in Karijini'
              className='coupleImg'
              variants={raiseVariant}
              initial='hidden'
              whileInView='visual'
              viewport={{ once: true }}
            />
          </div>
        </div>
        <div className='imgContainer2'>
          <div className='container'>
            <motion.img
              src={couple2}
              alt='couple photo in Germany'
              className='coupleImg'
              variants={raiseVariant}
              initial='hidden'
              whileInView='visual'
              viewport={{ once: true }}
            />
          </div>
        </div>
        <motion.div
          className='reception'
          variants={raiseVariant}
          initial='hidden'
          whileInView='visual'
          viewport={{ once: true }}
        >
          <h1 className='title'>Wedding Party</h1>
          <div className='info'>
            <p>140 Roche Rd</p>
            <p>16 . 03 . 24</p>
            <p>Saturday</p>
            <p>4:ooPM</p>
          </div>
          <a
            href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqTgHnmrzNDzctNqlTfCCfmsxLJGtspWnQhjHbzQNflPRZpLgHXmgrDDkdQFhcgklllJxB'
            className='btn'
          >
            RSVP
          </a>
        </motion.div>
        <div className='imgContainer3'>
          <div className='container'>
            <motion.img
              src={boyly}
              alt='boyly'
              className='coupleImg'
              variants={raiseVariant}
              initial='hidden'
              whileInView='visual'
              viewport={{ once: true }}
            />
          </div>
        </div>
        <motion.div
          className='gallery'
          variants={raiseVariant}
          initial='hidden'
          whileInView='visual'
          viewport={{ once: true }}
        >
          <h1 className='title'>Wedding photos</h1>
          <p className='info'>To Be Added</p>
        </motion.div>
      </motion.div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 40px 0;
  .invitation {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    row-gap: 15px;
    column-gap: 20px;
  }
  .ceremony {
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
  }
  .title {
    font-family: 'Great Vibes', cursive;
    font-size: 3.5rem;
    color: #638889;
    letter-spacing: 1px;
    text-align: center;
  }

  .imgContainer1 {
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    align-items: center;
  }

  .imgContainer2 {
    grid-column: 1/2;
    grid-row: 2/3;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .imgContainer3 {
    grid-column: 2/3;
    grid-row: 3/4;
    display: flex;
    align-items: center;
  }
  .container {
    width: 44vw;
    height: 27vw;
  }
  .coupleImg {
    object-fit: cover;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0),
      2px 5px 16px 0px rgba(13, 47, 86, 0.8);
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
  }
  .reception {
    grid-row: 2/3;
    grid-column: 2/3;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .info {
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.8;
    margin-top: 1.5rem;
    color: #333;
  }
  .gallery {
    grid-row: 3/4;
    grid-column: 1/2;
    justify-self: center;
    align-self: center;
  }
  .btn {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    width: 6.5rem;
    height: 2.5rem;
    margin-top: 1rem;
    border-width: 1px;
    color: #fff;
    border-color: #4e6096;
    border-radius: 10px;
    box-shadow: 0px 0px 0px 2px #9fb4f2;
    text-shadow: 0px 1px 0px #283966;
    background: linear-gradient(rgb(120, 146, 194), #476e9e);
  }

  .btn:hover {
    background: linear-gradient(#476e9e, rgb(120, 146, 194));
  }
  @media (max-width: 1300px) {
    .title {
      font-size: 3rem;
    }
    .info {
      font-size: 1.1rem;
      margin-top: 0.5rem;
    }
    .btn {
      font-size: 1rem;
      width: 5.5rem;
      height: 2rem;
      margin-top: 0.5rem;
    }
  }
  @media (max-width: 1100px) {
    .title {
      font-size: 2.5rem;
    }
    .info {
      font-size: 1rem;
    }
  }
  @media (max-width: 980px) {
    .title {
      font-size: 2rem;
    }
    .info {
      font-size: 1rem;
    }
    .btn {
      font-size: 0.9rem;
      width: 5rem;
      height: 1.8rem;
    }
  }
  @media (max-width: 857px) {
    .invitation {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      row-gap: 3rem;
      justify-items: center;
      align-items: center;
    }
    .title {
      font-size: 2rem;
    }
    .info {
      font-size: 1.25rem;
      margin-top: 1rem;
    }
    .ceremony {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    .imgContainer1 {
      grid-column: 1/2;
      grid-row: 1/2;
    }
    .imgContainer2 {
      grid-column: 1/2;
      grid-row: 3/4;
    }

    .imgContainer3 {
      grid-column: 1/2;
      grid-row: 5/6;
    }
    .container {
      width: 80vw;
      height: 49vw;
    }
    .reception {
      grid-column: 1/2;
      grid-row: 4/5;
    }
    .gallery {
      grid-column: 1/2;
      grid-row: 6/7;
    }
    @media (max-width: 430px) {
      .info {
        font-size: 1rem;
      }
    }
  }
`;
export default Invitation;
