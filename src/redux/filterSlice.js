import { createSlice } from '@reduxjs/toolkit';

// Поточне значення фільтра
const initialFilterState = '';

// Створення slice фільтра з використанням createSlice
const filterSlice = createSlice({
  name: 'filter', // Ім'я slice фільтра
  initialState: initialFilterState, // Поточне значення фільтра
  reducers: {
    changeFilter(_, action) {
      return action.payload; // Обновлення значення фільтра на основі передання дії
    },
  },
});

// Експорт дії changeFilter із slice фільтра
export const { changeFilter } = filterSlice.actions;

// Експорт редюсер фільтра із slice фільтра
export const filterReducer = filterSlice.reducer;