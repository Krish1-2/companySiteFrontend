import './reviews.css';

export default function Review() {
    const reviews = {
        krish: 'Lorem ipsum dolor sit amet...',
        krisha: 'Lorem ipsum dolor sit amet...',
        ami: 'Lorem ipsum dolor sit amet...',
    };

    return (
        <div className='review-main-div'>
            <div className='review-pic-div'>
                <div>
                    <h2>REVIEW</h2>
                    <h4>Your opinion matters</h4>
                </div>
                <a className='review-link'>Click here to write a review</a>
                <h6>Have a look at what others think...</h6>
                {Object.keys(reviews).map((key) => (
                    <div className='card' key={key}>
                        <p>{reviews[key]}</p>
                        <p>{key}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
