import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, School, BookOpen, ExternalLink, User } from 'lucide-react';
import avatar1 from '../assets/avatar1.jpg';

const info = [
  { icon: <User size={16} />, label: 'Họ và tên', value: 'Lại Như Hiếu Nghĩa' },
  { icon: <BookOpen size={16} />, label: 'Mã sinh viên', value: '25021420' },
  { icon: <School size={16} />, label: 'Ngành học', value: 'Công nghệ kỹ thuật cơ điện tử' },
  { icon: <School size={16} />, label: 'Khoa', value: 'Cơ học kỹ thuật và Tự động hóa' },
  { icon: <MapPin size={16} />, label: 'Trường', value: 'Đại học Công nghệ – ĐHQGHN' },
  { icon: <Mail size={16} />, label: 'Email', value: '25021420@vnu.edu.vn' },
];

const drives = [
  { id: 1, title: 'Quản lý tệp và thư mục', url: 'https://drive.google.com/drive/folders/1O4Lo6m6eROXeZmDZk0cq68lA9RbxN7kh?usp=drive_link' },
  { id: 2, title: 'Tìm kiếm thông tin học thuật', url: 'https://drive.google.com/drive/folders/1z8moMmOrsADLQjsONKZgB80tXpmprhRs?usp=sharing' },
  { id: 3, title: 'Viết Prompt hiệu quả cho AI', url: 'https://drive.google.com/drive/folders/1cSvYM8Bd1s_WztYO1tESHuYoQc_Fe_02?usp=drive_link' },
  { id: 4, title: 'Hợp tác trực tuyến', url: 'https://drive.google.com/drive/folders/1Df0l_45M2p2VjhaKU0st1OvdV5lWN1DS?usp=drive_link' },
  { id: 5, title: 'Sáng tạo nội dung số bằng AI', url: 'https://drive.google.com/drive/folders/1mCdHISVARXYeSgBSSSKGrjIXPubRy5YY?usp=drive_link' },
  { id: 6, title: 'Đạo đức và trách nhiệm AI', url: 'https://drive.google.com/drive/folders/1sTDGjTBaq7oMHmOw9DuvtLW3yOB7R_Fk?usp=drive_link' },
];

export default function Contact() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-900/40 border border-primary-700/30 text-primary-400 text-xs font-mono mb-6">
            Thông tin liên hệ
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Liên hệ với <span className="text-gradient">tôi</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Thông tin cá nhân và các tài liệu dự án đều có sẵn để xem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Avatar & bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl overflow-hidden">
              <img
                src={avatar1}
                alt="Hiking"
                className="w-full h-64 object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="p-6">
                <h2 className="text-white font-bold text-xl mb-1">Lại Như Hiếu Nghĩa</h2>
                <p className="text-primary-400 text-sm font-mono mb-4">MSV: 25021420</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sinh viên đam mê công nghệ, AI và tự động hóa. Luôn sẵn sàng khám phá những đỉnh cao mới – cả trong tự nhiên lẫn trong công nghệ.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="glass rounded-xl p-4 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-900/40 flex items-center justify-center text-primary-400 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">{item.label}</div>
                  <div className="text-gray-200 text-sm font-medium">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Drive links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white font-bold text-2xl mb-6">
            📁 Tài liệu dự án
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {drives.map((d, i) => (
              <motion.a
                key={d.id}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-4 flex items-start gap-3 group hover:border-primary-700/40 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-900/40 flex items-center justify-center text-primary-400 shrink-0 text-sm font-bold">
                  {d.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-300 text-sm font-medium group-hover:text-primary-400 transition-colors leading-snug mb-1">
                    {d.title}
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 text-xs">
                    <ExternalLink size={10} />
                    Google Drive
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Course info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-6 text-center border border-primary-800/20"
        >
          <div className="text-xs font-mono text-gray-600 mb-2">Môn học</div>
          <div className="text-white font-bold text-lg mb-1">Nhập học Công nghệ số và ứng dụng Trí tuệ nhân tạo</div>
          <div className="text-gray-500 text-sm">Lớp: VNU1001_E252018 · Học kỳ 2 · Năm học 2024–2025</div>
        </motion.div>
      </div>
    </div>
  );
}
