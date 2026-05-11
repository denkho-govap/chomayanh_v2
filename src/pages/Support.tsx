import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Support() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <Header />

      <main className="pt-24 pb-12">
        <section className="relative max-w-container_max mx-auto px-margin_mobile md:px-gutter mb-20 text-center">
          <div className="relative w-full h-[60vh] min-h-[450px] rounded-3xl overflow-hidden shadow-2xl group flex items-center justify-center py-20 px-6">
            {/* Animated Banner Image / Video */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110"
            >
              <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

            <div className="relative z-10 max-w-[800px] mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">Trung tâm trợ giúp</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-8 leading-tight tracking-tight">Chúng tôi có thể giúp gì cho bạn?</h1>
              <div className="relative max-w-2xl mx-auto">
                <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-white/50">search</span>
                <input className="w-full h-[64px] pl-14 pr-6 rounded-2xl bg-white/10 border border-white/20 focus:border-white focus:ring-0 outline-none text-body text-white placeholder-white/60 backdrop-blur-md transition-all shadow-lg" placeholder="Tìm kiếm chủ đề hỗ trợ (ví dụ: Bảo hành, Giao hàng...)" type="text"/>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-container_max mx-auto px-margin_mobile md:px-gutter py-section_gap">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="bg-surface-container-low p-8 border border-transparent hover:border-outline-variant/30 hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="w-12 h-12 bg-on-background text-white flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              <h3 className="font-h3 text-h3 mb-3">Vận chuyển</h3>
              <p className="text-on-surface-variant mb-6 text-[15px] leading-relaxed">Thông tin về phí giao hàng, thời gian nhận hàng và đối tác vận chuyển của chúng tôi.</p>
              <span className="text-on-background font-bold inline-flex items-center gap-2 group-hover:text-primary transition-colors">Tìm hiểu thêm <span className="material-symbols-outlined text-[18px]">east</span></span>
            </div>

            <div className="bg-surface-container-low p-8 border border-transparent hover:border-outline-variant/30 hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="w-12 h-12 bg-on-background text-white flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3 className="font-h3 text-h3 mb-3">Bảo hành</h3>
              <p className="text-on-surface-variant mb-6 text-[15px] leading-relaxed">Chính sách bảo hành chính hãng và hỗ trợ sửa chữa máy ảnh chuyên nghiệp tại Việt Nam.</p>
              <span className="text-on-background font-bold inline-flex items-center gap-2 group-hover:text-primary transition-colors">Tìm hiểu thêm <span className="material-symbols-outlined text-[18px]">east</span></span>
            </div>

            <div className="bg-surface-container-low p-8 border border-transparent hover:border-outline-variant/30 hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="w-12 h-12 bg-on-background text-white flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <h3 className="font-h3 text-h3 mb-3">Thanh toán</h3>
              <p className="text-on-surface-variant mb-6 text-[15px] leading-relaxed">Các phương thức thanh toán an toàn, trả góp 0% và bảo mật thông tin tuyệt đối.</p>
              <span className="text-on-background font-bold inline-flex items-center gap-2 group-hover:text-primary transition-colors">Tìm hiểu thêm <span className="material-symbols-outlined text-[18px]">east</span></span>
            </div>

            <div className="bg-surface-container-low p-8 border border-transparent hover:border-outline-variant/30 hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="w-12 h-12 bg-on-background text-white flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">assignment_return</span>
              </div>
              <h3 className="font-h3 text-h3 mb-3">Đổi trả</h3>
              <p className="text-on-surface-variant mb-6 text-[15px] leading-relaxed">Quy trình đổi trả hàng trong vòng 7 ngày và điều kiện hoàn tiền sản phẩm nhanh chóng.</p>
              <span className="text-on-background font-bold inline-flex items-center gap-2 group-hover:text-primary transition-colors">Tìm hiểu thêm <span className="material-symbols-outlined text-[18px]">east</span></span>
            </div>
          </div>
        </section>

        <section className="bg-white py-section_gap border-y border-surface-container-high">
          <div className="max-w-[900px] mx-auto px-margin_mobile">
            <div className="text-center mb-16">
              <h2 className="font-h2 text-h2 mb-4 tracking-tight">Câu hỏi thường gặp</h2>
              <p className="text-on-surface-variant">Những thắc mắc phổ biến nhất từ cộng đồng nhiếp ảnh của chúng tôi.</p>
            </div>
            <div className="space-y-4">
              <details className="group bg-surface-container-lowest border-b border-surface-container-high last:border-0 py-6 px-4 transition-all">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-on-surface text-lg">
                  Máy ảnh mua tại ChoMáyẢnh.vn có được bảo hành chính hãng không?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-outline">expand_more</span>
                </summary>
                <p className="mt-4 text-on-surface-variant leading-relaxed">Tất cả sản phẩm mới 100% đều được bảo hành chính hãng theo tiêu chuẩn của nhà sản xuất (Sony, Canon, Nikon, Fujifilm). Đối với hàng đã qua sử dụng, chúng tôi cung cấp gói bảo hành riêng từ 6 đến 12 tháng tại hệ thống ủy quyền.</p>
              </details>
              
              <details className="group bg-surface-container-lowest border-b border-surface-container-high last:border-0 py-6 px-4 transition-all">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-on-surface text-lg">
                  Tôi có thể kiểm tra máy trước khi thanh toán không?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-outline">expand_more</span>
                </summary>
                <p className="mt-4 text-on-surface-variant leading-relaxed">Có, quý khách hoàn toàn được quyền mở hộp và kiểm tra ngoại quan cũng như hoạt động cơ bản của máy (số shot, cảm biến) trước khi thanh toán cho nhân viên giao hàng.</p>
              </details>

              <details className="group bg-surface-container-lowest border-b border-surface-container-high last:border-0 py-6 px-4 transition-all">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-on-surface text-lg">
                  Thời gian giao hàng tại TP. Hồ Chí Minh là bao lâu?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-outline">expand_more</span>
                </summary>
                <p className="mt-4 text-on-surface-variant leading-relaxed">Tại khu vực nội thành TP. HCM, chúng tôi hỗ trợ giao hàng hỏa tốc "Precision Direct" trong vòng 2-4 giờ làm việc sau khi xác nhận đơn hàng.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="max-w-container_max mx-auto px-margin_mobile md:px-gutter py-section_gap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center">
              <h2 className="font-h2 text-h2 mb-6 tracking-tight">Kết nối với chuyên gia</h2>
              <p className="text-on-surface-variant mb-12 text-body leading-relaxed max-w-md">Đội ngũ nhiếp ảnh gia và kỹ thuật viên của chúng tôi luôn sẵn sàng hỗ trợ bạn tối ưu hóa thiết bị của mình.</p>
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-on-background text-white flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Địa chỉ Flagship Store</h4>
                    <p className="text-on-surface-variant">123 Lê Lợi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-on-background text-white flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Đường dây nóng</h4>
                    <p className="text-on-surface-variant font-price tracking-tight">1900 8888 • 028 3456 7890</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-on-background text-white flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email hỗ trợ</h4>
                    <p className="text-on-surface-variant">support@chomayanh.vn</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-10 md:p-14 border border-outline-variant/30">
              <h3 className="font-h3 text-h3 mb-10 tracking-tight">Gửi yêu cầu hỗ trợ</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[12px] uppercase tracking-widest font-bold text-on-surface-variant">Họ và tên</label>
                    <input className="w-full bg-white border-b-2 border-outline-variant focus:border-on-background focus:ring-0 py-3 transition-colors outline-none" placeholder="Nguyễn Văn A" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] uppercase tracking-widest font-bold text-on-surface-variant">Email</label>
                    <input className="w-full bg-white border-b-2 border-outline-variant focus:border-on-background focus:ring-0 py-3 transition-colors outline-none" placeholder="example@email.com" type="email"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] uppercase tracking-widest font-bold text-on-surface-variant">Chủ đề cần giúp đỡ</label>
                  <select className="w-full bg-white border-b-2 border-outline-variant focus:border-on-background focus:ring-0 py-3 transition-colors outline-none cursor-pointer">
                    <option>Tư vấn mua hàng chuyên sâu</option>
                    <option>Hỗ trợ bảo hành thiết bị</option>
                    <option>Khiếu nại chất lượng dịch vụ</option>
                    <option>Hợp tác kinh doanh</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] uppercase tracking-widest font-bold text-on-surface-variant">Nội dung chi tiết</label>
                  <textarea className="w-full bg-white border-b-2 border-outline-variant focus:border-on-background focus:ring-0 py-3 transition-colors outline-none resize-none" placeholder="Hãy cho chúng tôi biết vấn đề của bạn..." rows={4}></textarea>
                </div>
                <button className="w-full bg-on-background text-white py-5 px-8 font-bold uppercase tracking-widest hover:bg-primary transition-all active:scale-95 shadow-lg">Gửi yêu cầu hỗ trợ</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
