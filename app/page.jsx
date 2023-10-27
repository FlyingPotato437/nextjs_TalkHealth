import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Share Your Experiences
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'> at TalkHealth</span>
    </h1>
    <p className='desc text-center'>
      TalkHealth is an online forum where people who suffer from post-traumatic stress disorder (PTSD) can talk to each other about experiences that are unique to them, and struggles that are unique to them as well. 
    </p>

    <Feed />
  </section>
);

export default Home;
