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
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { formShema, formType } from '@/lib/contact/zod';
import { useStore } from '@/lib/contact/store';
import { useRouter } from 'next/navigation';

const Contact = () => {
  //入力タグの無効化のため
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

  //グローバル状態管理
  const formAdd = useStore((state) => state.updateForm);

  const router = useRouter();

  const onSubmit: SubmitHandler<formType> = (data: formType) => {
    //入力タグ無効化
    setIsSending(true);
    //グローバル状態管理に入力データ格納
    formAdd(data);
    //確認画面に遷移
    router.push('/confirmation');
  };

  return (
    <div className="container flex items-center py-5">
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
              確認
            </motion.button>
          </motion.form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
