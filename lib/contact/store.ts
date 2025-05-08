import { create } from 'zustand';
import { formType } from './zod';

interface Store {
  form: formType;
  updateForm: (form: formType) => void;
}

export const useStore = create<Store>((set) => ({
  form: { name: '', email: '', content: '' },
  updateForm: (form) => set({ form: form }),
}));
