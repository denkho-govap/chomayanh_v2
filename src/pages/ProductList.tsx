import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductList() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/20 min-h-screen">
      <Header />

      <main className="pt-24 pb-12 w-full">
        {/* Banner Section */}
        <section className="relative max-w-container_max mx-auto px-margin_mobile md:px-gutter mb-12">
          <div className="relative w-full h-[50vh] min-h-[400px] rounded-3xl overflow-hidden shadow-2xl group flex flex-col items-center justify-center p-8 text-center text-white">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105"
            >
              <source src="https://videos.pexels.com/video-files/3201594/3201594-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            
            <div className="relative z-10 max-w-3xl border border-white/20 p-8 md:p-12 backdrop-blur-md rounded-2xl bg-black/20">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold tracking-widest uppercase mb-4 shadow-lg shrink-0">Máy ảnh & Ống kính</span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Khám Phá Thiết Bị</h1>
              <p className="text-lg text-white/80 max-w-xl mx-auto font-medium">Tìm kiếm, lọc và sở hữu các thiết bị nhiếp ảnh hàng đầu thế giới từ những thương hiệu uy tín.</p>
            </div>
          </div>
        </section>

        <div className="max-w-container_max mx-auto px-margin_mobile md:px-gutter py-4">
          {/* Floating Filter Bar */}
          <section className="bg-gray-100 py-8 mb-12 rounded-[2rem]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm grid grid-cols-1 md:grid-cols-4 gap-8 border border-gray-200">
              <div className="flex flex-col gap-3">
                <label className="font-label-sm text-gray-600 flex items-center gap-2 uppercase tracking-tighter">
                  <span className="material-symbols-outlined text-sm">camera_enhance</span> Thương hiệu
                </label>
                <select className="w-full h-12 border border-gray-200 rounded-xl bg-gray-50 text-black focus:ring-2 focus:ring-black px-4 cursor-pointer outline-none">
                  <option>Tất cả thương hiệu</option>
                  <option>Sony Alpha</option>
                  <option>Canon EOS</option>
                  <option>Fujifilm X</option>
                  <option>Nikon Z</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-label-sm text-gray-600 flex items-center gap-2 uppercase tracking-tighter">
                  <span className="material-symbols-outlined text-sm">payments</span> Mức giá
                </label>
                <select className="w-full h-12 border border-gray-200 rounded-xl bg-gray-50 text-black focus:ring-2 focus:ring-black px-4 cursor-pointer outline-none">
                  <option>Mọi mức giá</option>
                  <option>Dưới 30 triệu</option>
                  <option>30 - 70 triệu</option>
                  <option>Trên 70 triệu</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-label-sm text-gray-600 flex items-center gap-2 uppercase tracking-tighter">
                  <span className="material-symbols-outlined text-sm">inventory_2</span> Tình trạng
                </label>
                <select className="w-full h-12 border border-gray-200 rounded-xl bg-gray-50 text-black focus:ring-2 focus:ring-black px-4 cursor-pointer outline-none">
                  <option>Tất cả tình trạng</option>
                  <option>Mới 100% (Seal)</option>
                  <option>Cũ (Like New 99%)</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full h-12 bg-black text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-lg">
                  <span className="material-symbols-outlined">search</span>
                  Tìm sản phẩm
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-12">
          {/* Main Content Area */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6 border-b border-outline-variant pb-8">
              <div>
                <h1 className="font-h2 text-4xl mb-2 text-on-surface">Máy ảnh &amp; Ống kính</h1>
                <p className="text-on-surface-variant flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Hiển thị 24 trong số 156 sản phẩm cao cấp
                </p>
              </div>
              <div className="flex items-center gap-4 bg-surface-container px-4 py-2 rounded-xl">
                <span className="text-xs font-bold text-outline uppercase tracking-widest">Sắp xếp:</span>
                <select className="bg-transparent border-none text-sm font-bold text-on-surface focus:ring-0 cursor-pointer p-0 outline-none">
                  <option>Mới nhất</option>
                  <option>Giá: Thấp đến Cao</option>
                  <option>Giá: Cao đến Thấp</option>
                  <option>Phổ biến nhất</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: Sony A7IV */}
              <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/40 hover:border-primary/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-400">
                <Link className="relative aspect-[4/3] overflow-hidden bg-surface-container block" to="/product/1">
                  <span className="absolute top-4 left-4 z-10 bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">New Arrival</span>
                  <img alt="Sony A7IV" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5WgbOLZBgH2kcmpFPPnUHSktqAF02QJUiLLXUUxCRk-1WdHmJ1ST2pVbgoUeqBPWMvIshnQWJJUI_IMzvGgXnC9-5TeeDsofUPo7LV_Bi2bSWaf0ZioX-Re_hp7nZSz_NzzH_rd_tIL4pVuLRgU1C-SN8d8VMe9a2sDhYyi3JocgHdpeKc3eIwba1rX0bvoZfo5A_DtKsL5uTjiTD10wDxcgUuEngwrk_fvkcpQ3rvCjY4gF7VA-nWD-kPzT422ZHHiA2GIyi9Q"/>
                </Link>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-h3 text-lg leading-tight text-on-surface group-hover:text-primary transition-colors"><Link to="/product/1">Sony Alpha A7 IV (Body Only)</Link></h3>
                    <button className="text-outline hover:text-error transition-all hover:scale-110 active:scale-90"><span className="material-symbols-outlined">favorite</span></button>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">Cảm biến Full-frame Exmor R CMOS 33.0MP, quay 4K 60p chuyên nghiệp.</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-[11px] text-outline font-bold line-through mb-1">62.990.000đ</span>
                      <span className="font-price text-primary text-2xl">58.500.000đ</span>
                    </div>
                    <Link to="/cart" className="bg-inverse-surface text-white w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-primary transition-all shadow-lg active:scale-95 group/btn">
                      <span className="material-symbols-outlined group-hover/btn:scale-110 transition-transform">add_shopping_cart</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: Canon R6 II */}
              <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/40 hover:border-secondary/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-400">
                <Link className="relative aspect-[4/3] overflow-hidden bg-surface-container block" to="/product/2">
                  <span className="absolute top-4 left-4 z-10 bg-secondary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Hot Sale</span>
                  <img alt="Canon EOS R6 Mark II" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMeRFv1b2d6DFKULFtCDMA4zkEzI62onxJ3cjrFy-y18upyZ4_YfWKo_Sjj-KgOhfZ8x3lLUtU_UTpIdB43GyekC8E9ykK0l1oHZkayZGvIIIPGMPXgfx7DD4641mI240G8vSUTtDRBwdyFtCi6JMhTzQC35Bc7z1KfY9yhW7h3Oi2m2KwZDgOEj-KHmpnJS7MTDrfDCmtMkbZjklH0lUhuXpxMWwG21EjPGXkP8Pm_j8I4mlZLBX8L3Gb7Kz_--WK8Wj-haLulg"/>
                </Link>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-h3 text-lg leading-tight text-on-surface group-hover:text-primary transition-colors"><Link to="/product/2">Canon EOS R6 Mark II</Link></h3>
                    <button className="text-outline hover:text-error transition-all"><span className="material-symbols-outlined">favorite</span></button>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">Cảm biến 24.2MP CMOS, Chụp liên tiếp 40 fps, AF thế hệ mới.</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-[11px] text-outline font-bold line-through mb-1">65.000.000đ</span>
                      <span className="font-price text-primary text-2xl">61.900.000đ</span>
                    </div>
                    <button className="bg-inverse-surface text-white w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-primary transition-all shadow-lg text-primary">
                      <span className="material-symbols-outlined text-white">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3: Fuji X-T5 */}
              <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-400">
                <Link className="relative aspect-[4/3] overflow-hidden bg-surface-container block" to="/product/3">
                  <img alt="Fujifilm X-T5" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsWf6KF4JP33s1FhQdvO2MwEnfBuH94HJsTok2mcDJJsMFTWYL_mJLJfw7TDGCrGxH0ZlhkfjX0VU7lvKSRadq-aQkBho6J8_YK00-J8figPFC9blcPHy3Sz2eLIAoCX6C9PI7Ad4uJIey53ojw5tBLPPo3FdWHq1S2X7BRWBYB7zxKW7wrnCDVDPcHG3yuddR5hRYj9fhXYGOEX3D1pHikd89wtgyg07WeaUlpCu9LKAWIjcrY7QxagP7MUWGMJo3FbdabvR5kg"/>
                </Link>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-h3 text-lg leading-tight text-on-surface group-hover:text-primary transition-colors"><Link to="/product/3">Fujifilm X-T5 Mirrorless (Silver)</Link></h3>
                    <button className="text-outline hover:text-error transition-all"><span className="material-symbols-outlined">favorite</span></button>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">40.2MP APS-C X-Trans CMOS 5 HR BSI, quay 6.2K/30p đẳng cấp.</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-price text-primary text-2xl">43.500.000đ</span>
                    </div>
                    <button className="bg-inverse-surface text-white w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-primary transition-all shadow-lg text-primary">
                      <span className="material-symbols-outlined text-white">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>

               {/* Card 4: Sony 35mm GM */}
              <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-400">
                <Link className="relative aspect-[4/3] overflow-hidden bg-surface-container block" to="/product/4">
                  <span className="absolute top-4 left-4 z-10 bg-surface-container-highest text-on-surface text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">Lướt - 99%</span>
                  <img alt="Sony 35mm GM" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLWk4q7aQMN93ODNAmNnWJ8ZLV_Euikc-ANYhahySSJbJl-fMnBxKViOe0Pl-E36oNOz_G4r-6UtcJYWu-mkN8SfuaC1gfqOlq7OT1ez0X9GZlwWOTpEIhqluROq0ITrZ3J3y7lvR-ygr9CJxzmPpKHcW4vjHNOSwwmdVRLIChCiom1UlHrpm_HgUpYl_ec4ukJnfZy-qNGTa6FKmdJF0QWkfklNhHTVQd0g45ZlHd4oL3gT7rSAcPVLWILYWJXpJbgihF2tO8-Q"/>
                </Link>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-h3 text-lg leading-tight text-on-surface group-hover:text-primary transition-colors"><Link to="/product/4">Sony FE 35mm f/1.4 G Master</Link></h3>
                    <button className="text-outline hover:text-error transition-all"><span className="material-symbols-outlined">favorite</span></button>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">Ống kính fix cao cấp cho Full-frame, độ nét kinh ngạc, bokeh mượt.</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-price text-primary text-2xl">31.200.000đ</span>
                    </div>
                    <button className="bg-inverse-surface text-white w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-primary transition-all shadow-lg text-primary">
                      <span className="material-symbols-outlined text-white">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>

               {/* Card 5: Canon RF 24-70 */}
              <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-400">
                <Link className="relative aspect-[4/3] overflow-hidden bg-surface-container block" to="/product/5">
                  <img alt="Canon RF 24-70mm" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6zVir2X85VQEU-oGbbNrkg9EmUSPXenJtd1hqtacgdy9hQlNJdJf-Ei7-ioTzX76dzV-nFCwUrk7zLUGPT-p95EKqPpXDSBQH0hZQ5iizF2EnvC5y9YsPl7Ws3bsH-v6X8paj9Kf31eX7vEcWi8WSDjPO2_oV7krO37R3AlYwMw_JaoHqUjltBfIWorvG53KmKUjAP6AvNvFpsx5oVxx9kUbwIxPazvzsh2ipQWAc5xmu25F-jdKAvc8NyYXFitc_inztxsZ89Q"/>
                </Link>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-h3 text-lg leading-tight text-on-surface group-hover:text-primary transition-colors"><Link to="/product/5">Canon RF 24-70mm f/2.8L IS USM</Link></h3>
                    <button className="text-outline hover:text-error transition-all"><span className="material-symbols-outlined">favorite</span></button>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">Ống kính zoom đa dụng dòng L, chống rung 5-stop, độ mở f/2.8.</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-price text-primary text-2xl">52.800.000đ</span>
                    </div>
                    <button className="bg-inverse-surface text-white w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-primary transition-all shadow-lg text-primary">
                      <span className="material-symbols-outlined text-white">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>

               {/* Card 6: Fuji 56mm f1.2 */}
              <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-400">
                <Link className="relative aspect-[4/3] overflow-hidden bg-surface-container block" to="/product/6">
                  <img alt="Fujifilm 56mm" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF9AdbdOuUWUAVCLXn39gA_KAFg9ty7KsJFovsVAXpXqjgWQmYi6dKGnrZ9TFo2z7ul5zlgGYwGshRDqBdZAGWgEyBD82rea6WG9b3norXVcXrK1PS93pBSfW54fdYcSBwak2xjyy92gjXwZXY8vZv3b869a-8LKrE-bFSS8MdTjUqk1gEW7qiDRDKQja3pK737j5Kd8hmWXZGvR-P-9EYrwAQglReMRPJR3d1IZRR0DS6n_k0whGN6Xdaw-PRFAGQyyGga4DYNg"/>
                </Link>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-h3 text-lg leading-tight text-on-surface group-hover:text-primary transition-colors"><Link to="/product/6">Fujifilm XF 56mm f/1.2 R WR</Link></h3>
                    <button className="text-outline hover:text-error transition-all"><span className="material-symbols-outlined">favorite</span></button>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">Ống kính chân dung thế hệ mới, kháng thời tiết, xóa phông đỉnh cao.</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-price text-primary text-2xl">24.500.000đ</span>
                    </div>
                    <button className="bg-inverse-surface text-white w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-primary transition-all shadow-lg text-primary">
                      <span className="material-symbols-outlined text-white">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-20 flex justify-center items-center gap-3">
              <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-inverse-surface hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-inverse-surface text-white font-bold shadow-lg">1</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-inverse-surface hover:text-white transition-all font-bold">2</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-inverse-surface hover:text-white transition-all font-bold">3</button>
              <span className="px-3 text-outline font-bold">...</span>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-inverse-surface hover:text-white transition-all font-bold">12</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-outline-variant hover:bg-inverse-surface hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
