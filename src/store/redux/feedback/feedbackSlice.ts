import { createAppSlice } from "../../createAppSlice";
import type { FeedbackStateSlice } from "./types";

// Начальное состояние
const feedbackInitialState: FeedbackStateSlice = {
  likes: 0,
  dislikes: 0,
};

// Создание slice
export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: (create) => ({
    incrementLikes: create.reducer((state) => {
      state.likes += 1;
    }),
    incrementDislikes: create.reducer((state) => {
      state.dislikes += 1;
    }),
    resetFeedback: create.reducer((state) => {
      state.likes = 0;
      state.dislikes = 0;
    }),
  }),
  selectors: {
    likes: (state) => state.likes,
    dislikes: (state) => state.dislikes,
  },
});

// Экспорт экшенов
export const { incrementLikes, incrementDislikes, resetFeedback } = feedbackSlice.actions;

// Экспорт редьюсера по умолчанию
export default feedbackSlice.reducer;
