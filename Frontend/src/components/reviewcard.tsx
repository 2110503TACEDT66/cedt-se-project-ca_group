// components/ReviewCard.tsx
interface ReviewCardProps {
    carName: string;  // The name of the car for the review
    reviewer: string;
    comment: string;
    rating: number;
}

// components/ReviewCard.tsx
const ReviewCard = ({ carName, reviewer, comment, rating }: ReviewCardProps) => {
    // Utility function to render stars based on rating
    const renderStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= rating ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow space-y-2">
            <h4 className="font-bold">{carName} Review</h4>
            <p>Reviewer:{reviewer}</p>
            <p> {comment}</p>
            <div className="flex">{renderStars()}</div>
        </div>
    );
};

export default ReviewCard;
