import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  return (
    <div className="bg-background font-body text-on-surface">
      <header className="sticky top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
        <div className="flex justify-between items-center px-margin_mobile md:px-gutter h-14 max-w-container_max mx-auto">
          <div className="flex items-center gap-6">
            <span className="font-h3 text-h3 font-bold text-primary">ChoMáyẢnh.vn</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center p-2 rounded-full hover:bg-surface-container-low transition-all duration-200 scale-95 active:scale-90 text-on-surface-variant">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
            <button className="flex items-center justify-center p-2 rounded-full hover:bg-surface-container-low transition-all duration-200 scale-95 active:scale-90 text-on-surface-variant">
              <span className="material-symbols-outlined">person</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-container_max mx-auto px-margin_mobile md:px-gutter py-section_gap min-h-[calc(100vh-56px-400px)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-container text-white mb-6 shadow-lg">
              <span className="material-symbols-outlined !text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
            </div>
            <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-primary mb-4">Đặt hàng thành công!</h1>
            <p className="text-on-surface-variant max-w-lg mx-auto">Cảm ơn bạn đã tin tưởng ChoMáyẢnh.vn. Đơn hàng của bạn đã được tiếp nhận và đang được xử lý bởi đội ngũ chuyên gia của chúng tôi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 space-y-6">
              <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/30 shadow-sm">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-outline-variant/20">
                  <h2 className="font-h3 text-h3 text-on-surface">Chi tiết đơn hàng</h2>
                  <span className="font-price text-label-sm px-3 py-1 bg-surface-container rounded-full text-primary">#CMA-882910</span>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-32 h-24 rounded-lg overflow-hidden bg-surface-container relative shrink-0">
                    <img alt="Sony Alpha A7 IV" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKelEvVt4F24pl_K6talNEmYTm_a31GPrz6zu9v2b5UQVLx8taxNcE5AWqBdZmMKFbXUN1cWQ1gwHCKGURZO133d18pS_kGIP9Ii5f0BPNVLNlXoxZVpWwsxf-PFdJbTYdLEhnpkpJOOynHHwdGorCv0brRVhm3LWPduoXkYIhUlzlb6C2Hkvp43bqhlgHctRnuzt2mlwVC_iQ1LmvyQYkDgTbn2fEkPz9Oq9WGlQ9M13l7B4LhydlctpVXiuaFXUnTCLrknshWQ"/>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-body font-bold text-on-surface">Sony Alpha A7 IV Mirrorless Camera</h3>
                      <span className="font-body text-on-surface-variant">x1</span>
                    </div>
                    <p className="text-label-sm text-on-surface-variant mb-4">Bảo hành chính hãng 24 tháng</p>
                    <div className="flex justify-between items-center">
                      <span className="font-price text-body text-primary">54.990.000₫</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-outline-variant/30 space-y-3">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Tạm tính</span>
                    <span>54.990.000₫</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Phí vận chuyển</span>
                    <span className="text-secondary font-bold">Miễn phí</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-outline-variant/20">
                    <span className="font-h3 text-h3 text-on-surface">Tổng cộng</span>
                    <span className="font-price text-h3 text-primary">54.990.000₫</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 space-y-6">
              <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/30">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                  <h3 className="font-body font-bold text-on-surface">Thông tin giao hàng</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Ngày dự kiến nhận</p>
                    <p className="font-body font-bold text-on-surface">Thứ Năm, 24 Tháng 10, 2024</p>
                  </div>
                  <div>
                    <p className="text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Địa chỉ</p>
                    <p className="font-body text-on-surface leading-relaxed">
                        Nguyễn Văn A<br/>
                        123 Đường Lê Lợi, Phường Bến Thành<br/>
                        Quận 1, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link to="/products" className="w-full bg-primary-container text-white py-3 px-6 rounded-lg font-body font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2">
                    Tiếp tục mua sắm
                    <span className="material-symbols-outlined !text-xl">arrow_forward</span>
                </Link>
                <button className="w-full bg-surface-container-highest text-on-surface py-3 px-6 rounded-lg font-body font-bold hover:bg-outline-variant/20 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined !text-xl">receipt_long</span>
                    Xem đơn hàng của tôi
                </button>
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 flex gap-3 items-start">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <p className="text-label-sm text-on-surface-variant leading-tight">Mọi giao dịch được bảo vệ bởi Precision Optics Protection. Hỗ trợ 24/7 cho các vấn đề kỹ thuật.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-surface-container-highest border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter px-margin_mobile md:px-gutter py-section_gap max-w-container_max mx-auto">
          <div className="space-y-4">
            <span className="font-h3 text-h3 font-bold text-primary">ChoMáyẢnh.vn</span>
            <p className="text-on-surface-variant">© 2024 ChoMáyẢnh.vn. Professional Photography Marketplace.</p>
          </div>
          <div>
            <h4 className="font-body font-bold text-on-surface mb-4">Sản phẩm</h4>
            <ul className="space-y-2">
              <li><Link className="text-on-surface-variant hover:text-primary hover:underline transition-all" to="/products">Cameras</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary hover:underline transition-all" to="/products">Lenses</Link></li>
              <li><a className="text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-bold text-on-surface mb-4">Dịch vụ</h4>
            <ul className="space-y-2">
              <li><a className="text-on-surface-variant hover:text-primary hover:underline transition-all" href="#">Pre-owned</a></li>
              <li><Link className="text-on-surface-variant hover:text-primary hover:underline transition-all" to="/support">Support</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary hover:underline transition-all" to="/about">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-bold text-on-surface mb-4">Kết nối</h4>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary opacity-80 hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined">public</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary opacity-80 hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined">mail</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
