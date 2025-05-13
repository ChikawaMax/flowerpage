import { create } from 'zustand';
import { formType } from './zod';

interface Store {
  form: formType | null;
  updateForm: (form: formType) => void;
}

export const useStore = create<Store>((set) => ({
  form: null,
  updateForm: (form) => set({ form: form }),
}));
