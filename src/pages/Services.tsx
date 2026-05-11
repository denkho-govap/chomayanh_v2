import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <header className="sticky top-0 w-full z-50 bg-inverse-surface border-b border-white/10 shadow-lg glass-header">
        <div className="flex justify-between items-center px-margin_mobile md:px-gutter h-16 max-w-container_max mx-auto">
          <div className="flex items-center gap-gutter">
            <Link className="font-h3 text-2xl font-bold text-on-primary" to="/">ChoMáyẢnh<span className="text-primary-fixed-dim">.vn</span></Link>
            <nav className="hidden md:flex gap-8 items-center">
              <Link className="font-body text-sm font-semibold text-on-primary/70 hover:text-on-primary transition-all duration-200" to="/products">Cameras</Link>
              <Link className="font-body text-sm font-semibold text-on-primary/70 hover:text-on-primary transition-all duration-200" to="/products">Lenses</Link>
              <a className="font-body text-sm font-semibold text-on-primary/70 hover:text-on-primary transition-all duration-200" href="#">Accessories</a>
              <Link className="font-body text-sm font-semibold text-primary-fixed-dim border-b-2 border-primary-fixed-dim pb-1" to="/services">Dịch vụ</Link>
              <Link className="font-body text-sm font-semibold text-on-primary/70 hover:text-on-primary transition-all duration-200" to="/support">Hỗ trợ</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-primary/50 text-xl">search</span>
              <input className="h-10 pl-10 pr-4 rounded-full border-none bg-white/10 text-on-primary placeholder:text-on-primary/40 focus:ring-2 focus:ring-primary-fixed-dim w-64 text-sm outline-none transition-all" placeholder="Tìm kiếm dịch vụ..." type="text"/>
            </div>
            <Link to="/cart" className="material-symbols-outlined text-on-primary/70 hover:text-on-primary hover:bg-white/10 p-2 rounded-full transition-all">shopping_cart</Link>
            <button className="material-symbols-outlined text-on-primary/70 hover:text-on-primary hover:bg-white/10 p-2 rounded-full transition-all">person</button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative bg-inverse-surface py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_NLNKbpAH7F8hAhBotFPKZ_j3-wxjAjzKypWrsusRf2Yq43Ove3dAXY8u3lBHR71B92Ro44ODComZHhq2bigQIze8dyAw9NTUiyvO8fjAVE1HLdHyVW0JCEN8ki4WgdocE1Y8Gj_Gyi_Bfd50to5qdL_zZYzgQz6jw0cUpm2Snyjm34mL96cx4q5auVzD2H90VYIDATb38u_8nVCuFUV7CVbsRBHiIEIAdlVET9awDNsUzniqxhLBnRqXn4v6E561AG61rbTEhg" alt="Camera maintenance"/>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-inverse-surface/50"></div>
          <div className="relative max-w-container_max mx-auto px-margin_mobile md:px-gutter text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/20 text-primary-fixed-dim border border-primary-fixed-dim/30 text-xs font-bold tracking-widest uppercase mb-6">Precision Optics</span>
            <h1 className="font-h1 text-h1-mobile md:text-h1 text-on-primary mb-6 tracking-tight text-glow">Dịch vụ kỹ thuật</h1>
            <p className="text-on-primary/70 max-w-2xl mx-auto text-lg mb-10 leading-relaxed font-body">Chăm sóc thiết bị nhiếp ảnh của bạn với tiêu chuẩn chuyên nghiệp nhất. Từ vệ sinh cảm biến đến hiệu chỉnh thấu kính chính xác.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold hover:bg-primary-container hover:shadow-[0_0_20px_rgba(0,102,204,0.4)] transition-all transform hover:-translate-y-0.5 inline-block" href="#contact-form">Đặt lịch ngay</a>
              <button className="border border-on-primary/20 text-on-primary px-8 py-4 rounded-full font-bold hover:bg-white/10 backdrop-blur-sm transition-all transform hover:-translate-y-0.5 inline-block">Xem bảng giá</button>
            </div>
          </div>
        </section>

        <section className="py-section_gap bg-surface">
          <div className="max-w-container_max mx-auto px-margin_mobile md:px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">cleaning_services</span>
                </div>
                <h3 className="font-h3 text-h3 mb-3 text-on-surface">Vệ sinh cảm biến</h3>
                <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">Loại bỏ hoàn toàn bụi bẩn và vết ố trên sensor. Đảm bảo hình ảnh luôn trong trẻo và không tì vết.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-price text-primary text-2xl">350.000đ</span>
                  <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">arrow_forward</span>
                </div>
              </div>

              <div className="group bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">settings_input_component</span>
                </div>
                <h3 className="font-h3 text-h3 mb-3 text-on-surface">Cân chỉnh Focus</h3>
                <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">Khắc phục hiện tượng back/front focus của ống kính. Giúp thiết bị bắt nét chính xác tuyệt đối.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-price text-primary text-2xl">500.000đ</span>
                  <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">arrow_forward</span>
                </div>
              </div>

              <div className="group bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">system_update</span>
                </div>
                <h3 className="font-h3 text-h3 mb-3 text-on-surface">Cập nhật Firmware</h3>
                <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">Nâng cấp phần mềm mới nhất từ nhà sản xuất để tối ưu hiệu năng và thêm tính năng mới.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-price text-primary text-2xl">200.000đ</span>
                  <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-section_gap border-y border-outline-variant/20">
          <div className="max-w-container_max mx-auto px-margin_mobile md:px-gutter">
            <div className="text-center mb-16">
              <h2 className="font-h2 text-h2 mb-4 text-on-surface">Tại sao chọn ChoMáyẢnh?</h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 border border-outline-variant/30 group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300">
                  <span className="material-symbols-outlined text-primary text-4xl">verified_user</span>
                </div>
                <h4 className="font-h3 text-xl font-bold mb-3 text-on-surface">Chuyên gia kỹ thuật</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed px-4">Đội ngũ kỹ thuật viên được đào tạo bài bản và giàu kinh nghiệm thực tế.</p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 border border-outline-variant/30 group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300">
                  <span className="material-symbols-outlined text-primary text-4xl">precision_manufacturing</span>
                </div>
                <h4 className="font-h3 text-xl font-bold mb-3 text-on-surface">Thiết bị hiện đại</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed px-4">Sử dụng máy móc và dụng cụ chuyên dụng nhập khẩu từ Nhật Bản và Đức.</p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 border border-outline-variant/30 group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300">
                  <span className="material-symbols-outlined text-primary text-4xl">history</span>
                </div>
                <h4 className="font-h3 text-xl font-bold mb-3 text-on-surface">Xử lý nhanh chóng</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed px-4">Hầu hết các dịch vụ vệ sinh và cân chỉnh có thể hoàn thành trong ngày.</p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 border border-outline-variant/30 group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300">
                  <span className="material-symbols-outlined text-primary text-4xl">security</span>
                </div>
                <h4 className="font-h3 text-xl font-bold mb-3 text-on-surface">Bảo hành dịch vụ</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed px-4">Cam kết bảo hành cho mọi hạng mục sửa chữa và thay thế linh kiện.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section_gap bg-surface" id="contact-form">
          <div className="max-w-container_max mx-auto px-margin_mobile md:px-gutter">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="mb-10">
                  <h2 className="font-h2 text-h2 mb-4 text-on-surface">Đăng ký dịch vụ</h2>
                  <p className="text-on-surface-variant text-lg">Để lại thông tin và yêu cầu của bạn, chúng tôi sẽ liên hệ tư vấn trong vòng 15 phút làm việc.</p>
                </div>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface px-1">Họ và tên</label>
                      <input className="w-full h-12 px-5 border border-outline-variant/50 rounded-xl bg-surface-container-low focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Nguyễn Văn A" type="text"/>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface px-1">Số điện thoại</label>
                      <input className="w-full h-12 px-5 border border-outline-variant/50 rounded-xl bg-surface-container-low focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="090x xxx xxx" type="tel"/>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface px-1">Loại thiết bị</label>
                    <select className="w-full h-12 px-5 border border-outline-variant/50 rounded-xl bg-surface-container-low focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none cursor-pointer">
                      <option>Mirrorless Camera</option>
                      <option>DSLR Camera</option>
                      <option>Lens / Ống kính</option>
                      <option>Phụ kiện khác</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface px-1">Nội dung yêu cầu</label>
                    <textarea className="w-full p-5 border border-outline-variant/50 rounded-xl bg-surface-container-low focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" placeholder="Mô tả tình trạng thiết bị của bạn..." rows={4}></textarea>
                  </div>
                  <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg hover:shadow-[0_10px_20px_rgba(0,92,186,0.3)] transition-all transform active:scale-[0.98]" type="submit">Gửi yêu cầu đặt lịch</button>
                </form>
              </div>

              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl group">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrpazz9qlADRxlAfxFjeQdpKWY-gYqlna3q6Eyi3kpwxYckRgLu_O5C9RWafFIx3uimY8qcwJA2hrBi42ejXFFacAE00JFSX94Z9aUZBBqCE0MIZF-_UK5mZy2nqnOxoFuEi4blu9vDx59nmiyiMU205XEg9GrnK9ePe10h_KihHp0WXdWUkq1veNvr5-O-ijOE2grv-Ic5LjgtWCuf7wA2rf6Bb3auR75z-nSSsmQRQE0px-2a_ooznXQ48QGp8exJBrFGUvUtg" alt="Camera repair table"/>
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkRxOMfArEkEixm4I15JcflbklYdzbl88Vm3iVk2h8F8zej26ZMkEoPYCSb2rNNau5tusKDypd4TQFBozN3Gsd83rZfHOxqFlB-m-zmKUX6ALn5H1tX8B-XcIo3o6GWDZNxsfApycFI9m4IPC9bPXtSVH9wWedkqD7_DKVHR_e6GTwihXvlwsjpZemndmOwzgNCLkl96kxJA_UrThYVlQIr9a1qQhFHUYN7Eg9GaqlC9Y5Ed2mMzqLPLuQIJ88VELSGEiEtEA1yA" alt="Camera lens calibration"/>
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOXWoHqie6JcjhV_FZK8mkpEzwRTarijDJgeU-SFZz-pDwaiUDb6ckGUWWDsQSY7tNxrr11TDVoE-V4OIbrM4_9uhz3jB2PgLtyRJ_eGvCJIv49ofdxJ0Vscjw6R2vQpDyFr0PzLeovB3ZwtYsxOtgf1-LwEGCocv4KCHIgn4U_JrFyAJ--PKhCSKKU54yP0MwSNM_z-lMqiKjsK6ewrZcm1VDFHmPnLDV3z0FPYIz3KiOgo4oYhE4AEmAv8Q5LrSJa53D1CJNVQ" alt="Cleaning sensor"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-inverse-surface text-on-primary w-full border-t border-white/5">
        <div className="max-w-container_max mx-auto px-margin_mobile md:px-gutter py-section_gap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="font-h3 text-2xl font-bold text-on-primary mb-6 block">ChoMáyẢnh<span className="text-primary-fixed-dim">.vn</span></span>
              <p className="text-on-primary/60 text-sm leading-relaxed mb-8 max-w-sm">Chợ điện tử máy ảnh chuyên nghiệp hàng đầu Việt Nam. Nơi kết nối niềm đam mê nhiếp ảnh và các chuyên gia kỹ thuật hàng đầu.</p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg">public</span></a>
                <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg">camera</span></a>
                <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg">play_circle</span></a>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="font-bold mb-6 text-primary-fixed-dim uppercase tracking-wider text-xs">Sản phẩm</h4>
              <ul className="space-y-4">
                <li><Link className="text-on-primary/60 hover:text-on-primary transition-all text-sm" to="/products">Cameras</Link></li>
                <li><Link className="text-on-primary/60 hover:text-on-primary transition-all text-sm" to="/products">Lenses</Link></li>
                <li><a className="text-on-primary/60 hover:text-on-primary transition-all text-sm" href="#">Phụ kiện chuyên nghiệp</a></li>
                <li><a className="text-on-primary/60 hover:text-on-primary transition-all text-sm" href="#">Hàng ký gửi (Pre-owned)</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="font-bold mb-6 text-primary-fixed-dim uppercase tracking-wider text-xs">Thông tin</h4>
              <ul className="space-y-4">
                <li><Link className="text-primary-fixed-dim font-bold transition-all text-sm" to="/support">Trung tâm hỗ trợ</Link></li>
                <li><Link className="text-on-primary/60 hover:text-on-primary transition-all text-sm" to="/support">Chính sách bảo hành</Link></li>
                <li><a className="text-on-primary/60 hover:text-on-primary transition-all text-sm" href="#">Vận chuyển &amp; Thanh toán</a></li>
                <li><a className="text-on-primary/60 hover:text-on-primary transition-all text-sm" href="#">Điều khoản sử dụng</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-4">
              <h4 className="font-bold mb-6 text-primary-fixed-dim uppercase tracking-wider text-xs">Vị trí của chúng tôi</h4>
              <div className="h-48 w-full rounded-2xl overflow-hidden mb-4 border border-white/10 relative group filter grayscale invert contrast-125 hover:grayscale-0 hover:invert-0 transition-all duration-700">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500 z-10 pointer-events-none"></div>
                <iframe allowFullScreen height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.46023242831!2d106.69741547610196!3d10.772583259196144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3f9827018d%3A0x67399589255653b0!2zTMOqIEzhu6NpLCBC4bq_biBUaMOgbmgsIFF14bqtbiAxLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1715694800000!5m2!1svi!2s" style={{border: 0}} width="100%"></iframe>
              </div>
              <div className="flex flex-col gap-3 text-sm text-on-primary/60">
                <p className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-fixed-dim text-lg">location_on</span> 123 Lê Lợi, Quận 1, TP. HCM</p>
                <p className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-fixed-dim text-lg">call</span> 1900 6789</p>
                <p className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-fixed-dim text-lg">mail</span> support@chomayanh.vn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 py-8 text-center bg-black/20">
          <p className="text-xs text-on-primary/40 font-medium tracking-widest uppercase">© 2024 ChoMáyẢnh.vn • Precision Optics Technical Services • Thiết kế bởi Team ChoMáyẢnh</p>
        </div>
      </footer>
    </div>
  );
}
