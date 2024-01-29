import './MagicBall.css';

export function MagicBall({ answer, answerNumber }) {
    return (<h5 
    className='magic-ball'
    >
        { answer }
    </h5>)
}