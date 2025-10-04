import Button from './Button';

export default function Modal({ rating, closeModal }) {
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2>Thank you</h2>
        <p>
          You rated us {rating} star{rating > 1 && 's'}
        </p>
        <Button className='close-btn' onClick={closeModal}>
          Close
        </Button>
      </div>
    </div>
  );
}
