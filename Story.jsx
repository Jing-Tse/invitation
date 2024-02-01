import { motion } from 'framer-motion';
import styled from 'styled-components';

const Story = () => {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className='title'>Wedding Photo Gallery</h1>
        <p>To Be Added...</p>
      </motion.div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .title {
    font-family: 'Great Vibes', cursive;
    font-size: 4rem;
    color: #638889;
  }
`;
export default Story;
