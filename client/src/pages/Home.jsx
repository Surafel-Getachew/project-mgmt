import AddClient from '../components/AddClient';
import AddProject from '../components/AddProject';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
const Home = () => {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClient />
        <AddProject />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
