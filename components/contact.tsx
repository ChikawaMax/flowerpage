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
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import { init, send } from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

const formShema = z.object({
  name: z.string().min(2, { message: '2文字で入力してください' }).max(50),
  email: z.string().email({ message: 'メールアドレスの形式ではありません' }),
  content: z.string(),
});

type formType = z.infer<typeof formShema>;

export const Contactform = () => {
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
    <div className="container flex items-center">
      <Toaster />
      <div className="lg:w-[60%] w-full mx-auto">
        <h2 className="text-[40px] font-bold mb-[30px]">お問い合わせ</h2>
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
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
                      placeholder="お問い合わせ内容をご記載ください。"
                      {...field}
                      className="resize-none h-[200px]"
                      disabled={isSending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isSending}>送信</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
