import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c0d0f] text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="text-3xl font-bold tracking-tight text-white mb-8 block">CMA</Link>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed text-sm">Hệ sinh thái máy ảnh chuyên nghiệp. Cung cấp thiết bị, giải pháp và dịch vụ tối ưu cho từng khung hình.</p>
            <div className="flex gap-4">
              <a className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-black transition-all group border border-white/10 hover:border-white/30" href="#"><span className="material-symbols-outlined text-white/70 group-hover:text-white transition-colors">public</span></a>
              <a className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-black transition-all group border border-white/10 hover:border-white/30" href="#"><span className="material-symbols-outlined text-white/70 group-hover:text-white transition-colors">alternate_email</span></a>
              <a className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-black transition-all group border border-white/10 hover:border-white/30" href="#"><span className="material-symbols-outlined text-white/70 group-hover:text-white transition-colors">share</span></a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-10 uppercase text-xs tracking-[0.2em]">Danh mục</h4>
            <ul className="space-y-5 text-sm text-white/50">
              <li><Link className="hover:text-white transition-colors" to="/products">Máy ảnh Mirrorless</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/products">Ống kính cao cấp</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/products">Phụ kiện Studio</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/products">Thiết bị quay phim</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/verify">Xác minh thiết bị</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-10 uppercase text-xs tracking-[0.2em]">Hỗ trợ</h4>
            <ul className="space-y-5 text-sm text-white/50">
              <li><Link className="hover:text-white transition-colors" to="/support">Bảo hành 24 tháng</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/support">Giao hàng 2h</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/support">Trả góp 0% lãi suất</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/support">Trung tâm sửa chữa</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/about">Về chúng tôi</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-[0.2em]">Vị trí của chúng tôi</h4>
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/10 mb-6 bg-white/5 filter grayscale invert contrast-125">
              <iframe allowFullScreen height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4602324222333!2d106.6922572!3d10.7760195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed0e13%3A0xd211e4f48b1d9198!2zNjkgTMOqIEzhu6NpLCBC4bq_biBUaMOgbmgsIFF14bqtbiAxLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1715690000000!5m2!1sen!2s" style={{border:0}} width="100%"></iframe>
            </div>
            <div className="flex items-start gap-3 text-sm text-white/60">
              <span className="material-symbols-outlined">location_on</span>
              <p>69 Lê Lợi, Bến Thành, Quận 1, TP. Hồ Chí Minh</p>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/30">© 2024 ChoMáyẢnh.vn (CMA). All rights reserved. Professional Photography Ecosystem.</p>
          <div className="flex gap-8 text-sm text-white/30">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
