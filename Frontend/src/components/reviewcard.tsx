import React from 'react';

interface ReviewCardProps {
    carName: string;
    reviewer: string;
    comment: string;
    rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ carName, reviewer, comment, rating }) => {
    // Utility function to render stars based on rating
    const renderStars = () => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`cursor-pointer hover:text-yellow-500 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
            </span>
        ));
    };

    return (
        <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-3 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800">{carName} Review</h4>
            <p className="text-sm font-medium text-gray-600">Reviewer: {reviewer}</p>
            <p className="text-gray-700">{comment}</p>
            <div className="flex">{renderStars()}</div>
        </div>
    );
};

export default ReviewCard;
