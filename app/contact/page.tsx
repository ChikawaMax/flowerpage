'use client';

import React, { useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import { init, send } from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

const formShema = z.object({
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

type formType = z.infer<typeof formShema>;

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const form = useForm<formType>({
    mode: 'onChange',
    resolver: zodResolver(formShema),
    defaultValues: {
      name: '',
      email: '',
      content: '',
    },
  });

  const onSubmit: SubmitHandler<formType> = async (data: formType) => {
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    const { name, email, content } = data;

    if (userId && serviceId && templateId) {
      setIsSending(true);
      const loadingToast = toast.loading('送信中...');

      //emailjsを初期化する
      init(userId);

      //送信するデータを定義する
      const params = {
        name: name,
        email: email,
        content: content,
      };

      try {
        //送信する
        await send(serviceId, templateId, params);
        toast.success('送信が成功しました。');
      } catch {
        toast.error('送信に失敗しました。');
      } finally {
        form.reset();
        toast.dismiss(loadingToast);
        setIsSending(false);
      }
    }
  };

  return (
    <div className="container flex items-center py-5">
      <Toaster />
      <div className="lg:w-[60%] w-full mx-auto">
        <motion.h2
          className="text-[40px] font-bold mb-[30px]"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          お問い合わせ
        </motion.h2>
        <Form {...form}>
          <motion.form
            className="space-y-8"
            onSubmit={form.handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>名前</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="お名前をお書きください。"
                      {...field}
                      disabled={isSending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>メールアドレス</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="メールアドレスをお書きください。"
                      {...field}
                      disabled={isSending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>お問い合わせ内容</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="お問い合わせ内容をお書きください。"
                      {...field}
                      className="resize-none h-[200px]"
                      disabled={isSending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary hover:bg-primary/90  rounded-md px-6 py-3"
              disabled={isSending}
            >
              送信
            </motion.button>
          </motion.form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
