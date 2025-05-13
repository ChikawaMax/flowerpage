'use client';

import { motion } from 'framer-motion';
import { useStore } from '@/lib/contact/store';
import { useRouter } from 'next/navigation';
import { init, send } from '@emailjs/browser';
import { useEffect, useState } from 'react';

export default function Confirmation() {
  //入力タグ無効化のため
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  // グローバル状態管理
  const form = useStore((state) => state.form);

  //nullの場合、contactに遷移
  useEffect(() => {
    if (!form) {
      router.push('/contact');
    }
  }, [form, router]);

  const handleClick = async () => {
    //入力タグ無効化
    setIsSending(true);
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    // 環境変数が正しく設定されているか確認
    const { name, email, content } = form || {
      name: '',
      email: '',
      content: '',
    };

    if (userId && serviceId && templateId) {
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
        router.push('/complete');
      } catch {
        router.push('/error');
      }
    }
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
          確認画面
        </motion.h2>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <p>名前：{form?.name}</p>
          <p>メールアドレス：{form?.email}</p>
          <p>お問い合わせ内容：{form?.content}</p>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary hover:bg-primary/90  rounded-md px-6 py-3"
            onClick={handleClick}
            disabled={isSending}
          >
            送信
          </motion.button>
          {isSending && <span className="ml-4">送信中・・・</span>}
        </motion.div>
      </div>
    </div>
  );
}
