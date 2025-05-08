'use client';

import { motion } from 'framer-motion';

export default function Complete() {
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
          送信完了
        </motion.h2>
      </div>
    </div>
  );
}
