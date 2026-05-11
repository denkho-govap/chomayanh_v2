import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <Header />

      <main className="pt-24 pb-12">
        <section className="relative max-w-container_max mx-auto px-margin_mobile md:px-gutter mb-20">
          <div className="relative w-full h-[70vh] min-h-[500px] rounded-3xl overflow-hidden shadow-2xl group flex items-center justify-center">
            {/* Animated Banner Image / Video */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110"
            >
              <source src="https://videos.pexels.com/video-files/5538202/5538202-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            
            <div className="relative z-10 text-center px-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">Về chúng tôi</span>
              <h1 className="text-4xl md:text-6xl text-white mb-6 tracking-tight font-semibold">Câu chuyện của CMA</h1>
              <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">Hành trình mang nghệ thuật nhiếp ảnh chuyên nghiệp đến gần hơn với mọi người qua từng khung hình.</p>
            </div>
          </div>
        </section>

        <section className="py-section_gap bg-surface">
          <div className="max-w-container_max mx-auto px-margin_mobile md:px-gutter text-center">
            <h2 className="font-h2 text-2xl font-bold mb-6">Tầm nhìn và Sứ mệnh</h2>
            <p className="max-w-3xl mx-auto text-on-surface-variant leading-relaxed">
              Từ một nhóm những người yêu thích nhiếp ảnh, chúng tôi nhận ra thị trường Việt Nam cần một nền tảng giao dịch thiết bị máy ảnh chuyên nghiệp, minh bạch và tiện lợi. ChoMáyẢnh.vn ra đời với mục tiêu kết nối những nhiếp ảnh gia ở mọi cấp độ, cung cấp các sản phẩm chất lượng cao với mức giá hợp lý và dịch vụ hậu mãi xuất sắc.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
