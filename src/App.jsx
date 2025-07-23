import Rating from './components/Rating';

const App = () => {
  return (
    <>
      <Rating
        feedbackMessages={[
          'Hate it',
          'Dislike it',
          'Meh',
          'Like it',
          'Love it',
        ]}
      />
    </>
  );
};

export default App;
