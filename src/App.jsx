import Rating from './components/Rating';

const App = () => {
  return (
    <>
      <Rating
        feedbackMessages={[
          'Hate it',
          'Dislike it',
          'Meh',
          'Like It',
          'Love It',
        ]}
      />
    </>
  );
};

export default App;
