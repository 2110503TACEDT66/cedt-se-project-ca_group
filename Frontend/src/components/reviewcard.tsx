// components/ReviewCard.tsx
interface ReviewCardProps {
    carName: string;  // The name of the car for the review
    reviewer: string;
    comment: string;
    rating: number;
}

const ReviewCard = ({ carName, reviewer, comment, rating }: ReviewCardProps) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h4 className="font-bold">{carName} Review</h4>  // Displaying the car name in each review card
            <p>Reviewer: {reviewer}</p>
            <p>{comment}</p>
            <p>Rating: {rating} / 5</p>
        </div>
    );
};

export default ReviewCard;
