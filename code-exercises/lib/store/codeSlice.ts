// lib/store/codeSlice.ts
"use client";

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface CodeState {
  [exerciseId: string]: {
    code: string;
    results: any | null;
    isRunning: boolean;
    error: string | null;
  };
}

const initialState: CodeState = {};

// Async thunk for running code
export const runCode = createAsyncThunk(
  'code/runCode',
  async ({ exerciseId }: { exerciseId: string }, { getState, rejectWithValue }) => {
    try {
      // Get the current code from the state
      const state = getState() as { code: CodeState };
      const code = state.code[exerciseId]?.code || '';

      // In a real app, you might send this to a serverless function or use a web worker
      // For now, we'll use Function constructor to evaluate the code (with limitations)
      // This is UNSAFE for production and only for demonstration
      const result = new Function(`
        try {
          ${code}
          return { success: true, output: eval('(' + ${code} + ')()') };
        } catch (error) {
          return { success: false, error: error.toString() };
        }
      `)();

      if (!result.success) {
        return rejectWithValue(result.error);
      }

      return result.output;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    updateCode: (state, action: PayloadAction<{ exerciseId: string; code: string }>) => {
      const { exerciseId, code } = action.payload;
      
      if (!state[exerciseId]) {
        state[exerciseId] = {
          code: '',
          results: null,
          isRunning: false,
          error: null,
        };
      }
      
      state[exerciseId].code = code;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(runCode.pending, (state, action) => {
        const exerciseId = action.meta.arg.exerciseId;
        
        if (!state[exerciseId]) {
          state[exerciseId] = {
            code: '',
            results: null,
            isRunning: true,
            error: null,
          };
        } else {
          state[exerciseId].isRunning = true;
          state[exerciseId].error = null;
        }
      })
      .addCase(runCode.fulfilled, (state, action) => {
        const exerciseId = action.meta.arg.exerciseId;
        
        if (state[exerciseId]) {
          state[exerciseId].isRunning = false;
          state[exerciseId].results = action.payload;
          state[exerciseId].error = null;
        }
      })
      .addCase(runCode.rejected, (state, action) => {
        const exerciseId = action.meta.arg.exerciseId;
        
        if (state[exerciseId]) {
          state[exerciseId].isRunning = false;
          state[exerciseId].error = action.payload as string;
        }
      });
  },
});

export const { updateCode } = codeSlice.actions;
export default codeSlice.reducer;