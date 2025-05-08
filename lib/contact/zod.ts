import { z } from 'zod';

export const formShema = z.object({
  name: z
    .string()
    .min(2, { message: '2文字で入力してください' })
    .max(15, { message: '15文字以内で入力してください' }),
  email: z.string().email({ message: 'メールアドレスの形式ではありません' }),
  content: z
    .string()
    .min(2, { message: '2文字で入力してください' })
    .max(200, { message: '200文字以内で入力してください' }),
});

export type formType = z.infer<typeof formShema>;
