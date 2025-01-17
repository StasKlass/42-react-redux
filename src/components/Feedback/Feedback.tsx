import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { incrementLikes, incrementDislikes, resetFeedback } from "../../store/redux/feedback/feedbackSlice";
import thumbsUp from "../../assets/like.png";
import thumbsDown from "../../assets/dislike.png";
import { FeedbackContainer, FeedbackItem, FeedbackIcon, ResetButton } from "./styles"; // Импортируем стили

const Feedback: React.FC = () => {
  const dispatch = useAppDispatch();
  const { likes, dislikes } = useAppSelector((state) => state.feedback);

  return (
    <FeedbackContainer>
      <FeedbackItem>
        <FeedbackIcon
          src={thumbsUp}
          alt="Thumbs up"
          onClick={() => dispatch(incrementLikes())}
        />
        <span>{likes}</span>
      </FeedbackItem>
      <FeedbackItem>
        <FeedbackIcon
          src={thumbsDown}
          alt="Thumbs down"
          onClick={() => dispatch(incrementDislikes())}
        />
        <span>{dislikes}</span>
      </FeedbackItem>
      <ResetButton onClick={() => dispatch(resetFeedback())}>
        Reset Results
      </ResetButton>
    </FeedbackContainer>
  );
};

export default Feedback;
