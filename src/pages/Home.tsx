import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedHeading from '../components/AnimatedHeading';
import FadeIn from '../components/FadeIn';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('banchay');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-on-background font-body antialiased min-h-screen">
      <Header />

      {/* Full-Bleed Hero Banner */}
      <div className="relative h-screen w-full flex flex-col overflow-hidden bg-black text-white font-sans">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/du1mgs8hq/video/upload/v1778483464/14383252_3840_2160_25fps_gnabee.mp4"
        />

        <div className="relative z-10 flex-1 flex flex-col justify-end pb-32 px-6 md:px-12 lg:px-16 w-full">
          <FadeIn delay={4000} duration={1500}>
            <h1 className="text-[54px] text-[#cdcdcd] font-semibold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
              Ký ức là vô giá.
            </h1>
            <p className="text-[32px] text-[#b4b9bf] font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              Hãy lưu giữ nó bằng sự hoàn hảo.
            </p>
          </FadeIn>
        </div>
      </div>

      <main>
        {/* Sản phẩm bán chạy (Product Highlights) */}
        <section className="py-24 bg-white">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-normal mb-8 text-black">Product Highlights</h2>
            
            <div className="flex gap-6 md:gap-10 mb-12 text-sm tracking-[0.2em] uppercase border-b border-gray-200 overflow-x-auto whitespace-nowrap">
              <button 
                onClick={() => setActiveTab('banchay')}
                className={`pb-2 -mb-[1px] transition-colors ${activeTab === 'banchay' ? 'text-black font-semibold border-b-2 border-black' : 'text-gray-400 hover:text-black border-b-2 border-transparent'}`}
              >
                Sản phẩm bán chạy
              </button>
              <button 
                onClick={() => setActiveTab('mayanh')}
                className={`pb-2 -mb-[1px] transition-colors ${activeTab === 'mayanh' ? 'text-black font-semibold border-b-2 border-black' : 'text-gray-400 hover:text-black border-b-2 border-transparent'}`}
              >
                Máy ảnh
              </button>
              <button 
                onClick={() => setActiveTab('lens')}
                className={`pb-2 -mb-[1px] transition-colors ${activeTab === 'lens' ? 'text-black font-semibold border-b-2 border-black' : 'text-gray-400 hover:text-black border-b-2 border-transparent'}`}
              >
                Lens
              </button>
            </div>

            <div className="relative">
              {/* Left Arrow */}
              <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 z-10 w-12 h-12 bg-[#f0f0f0] hover:bg-gray-200 rounded-full flex items-center justify-center shadow-sm transition-colors">
                <span className="material-symbols-outlined text-gray-600 text-sm">arrow_back</span>
              </button>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {activeTab === 'banchay' && (
                  <>
                    <Link to="/product/1" className="bg-[#f6f6f6] h-[650px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#ebebeb] block animate-in fade-in duration-500">
                      <h3 className="text-base tracking-widest text-black/80 font-medium">SONY ALPHA A7R V</h3>
                      <div className="w-full flex justify-center py-10 flex-1 items-center">
                        <img 
                          alt="Sony Alpha A7R V" 
                          className="w-full max-w-[340px] object-contain group-hover:scale-[1.03] transition-transform duration-700" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKqxG8LoTVre5HMV1aof3CykIQ88GM7zbyrhDPkuJxWSGSLgCKMWhQf4MXh2nDCLp6RKFXUVEdfDQCsSxRtGdrSe7ye3itx-O4ejdzL6EFeiDN4Lm5cUJR20I1NXIGdZE3IXji-AoNUHQLSMG3xEIcR_2VrDWC3xEXqOwl5eTD9UbxSHHqMnuI6skmQ-r6B2fHHQW4_8dFCfvbT5jMxWkfxkrZlf6ICSmsVy_JxnhAuFm976PUTD-2VGijAtIX2elr8Lw32mMD_Q"
                        />
                      </div>
                      <div className="text-center w-full">
                        <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                          Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/product/2" className="bg-[#d9d9d9] h-[650px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#d0d0d0] block animate-in fade-in duration-500">
                      <h3 className="text-base tracking-widest text-black/80 font-medium">CANON EOS R6 MARK II</h3>
                      <div className="w-full flex justify-center py-10 flex-1 items-center">
                        <img 
                          alt="Canon EOS R6 Mark II" 
                          className="w-[110%] max-w-[400px] object-contain group-hover:scale-[1.03] transition-transform duration-700 -ml-4" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnwFLC_QL8JUcbO7TJ4qu6fbgU_k6KizBo7lscL_dfSjSCmIV49O8eEI9D-cAjQJ6UN65oUEPsTBPAlzjySP4HAfRWEKY-IO263bez2cpsq0dwev_8z8be6vtLrA4O6QXTg9jxspqH-PaFA6w4Ze5AXL30RMgpNlRf-RndjtNmNubpjwcAq0NEjSF7JpLIpvomq3zPIONcPQl7eIb8Vm1o0MwoinzbjNo3iJc2a7brQEAZhsqPPsB48W350VIBHm3WwFgEvs9Ljw"
                        />
                      </div>
                      <div className="text-center w-full">
                        <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                          Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/product/3" className="bg-[#f6f6f6] h-[650px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#ebebeb] block animate-in fade-in duration-500">
                      <h3 className="text-base tracking-widest text-black/80 font-medium">FUJIFILM X-T5</h3>
                      <div className="w-full flex justify-center py-10 flex-1 items-center">
                        <img 
                          alt="Fujifilm X-T5" 
                          className="w-full max-w-[340px] object-contain group-hover:scale-[1.03] transition-transform duration-700" 
                          src="https://lh3.googleusercontent.com/aida/ADBb0uhLdCXbXkySfd0sVS5L2AyNxwFjiL90BhGc2BY9LbVnMvGsbYl9ptiYNizolhlyhOkryXVN6OeayWYqwpK4MQvVZrgP9CwdSlSXt6Q6yRfIxBVVeyRZcxbf4S9MJTUDsfO8ZcAABoN7hGHD5c3Qa8cxhqhwhlivhjEMO-45afqymFLN5VIQF7-vKL6O_1de63DxnxvvCENKz1MQpoU0OgJNnoV4xHwS7AQtXoGTsoHou9dbXPT-ibECEnQaVgJmI21umlXdPM4Z"
                        />
                      </div>
                      <div className="text-center w-full">
                        <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                          Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                        </span>
                      </div>
                    </Link>
                  </>
                )}

                {activeTab === 'mayanh' && (
                  <>
                    <Link to="/product/4" className="bg-[#f0f0f0] h-[650px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#e6e6e6] block animate-in fade-in duration-500">
                      <h3 className="text-base tracking-widest text-black/80 font-medium">NIKON Z8</h3>
                      <div className="w-full flex justify-center py-10 flex-1 items-center">
                        <img 
                          alt="Nikon Z8" 
                          className="w-full max-w-[340px] object-contain group-hover:scale-[1.03] transition-transform duration-700" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKqxG8LoTVre5HMV1aof3CykIQ88GM7zbyrhDPkuJxWSGSLgCKMWhQf4MXh2nDCLp6RKFXUVEdfDQCsSxRtGdrSe7ye3itx-O4ejdzL6EFeiDN4Lm5cUJR20I1NXIGdZE3IXji-AoNUHQLSMG3xEIcR_2VrDWC3xEXqOwl5eTD9UbxSHHqMnuI6skmQ-r6B2fHHQW4_8dFCfvbT5jMxWkfxkrZlf6ICSmsVy_JxnhAuFm976PUTD-2VGijAtIX2elr8Lw32mMD_Q"
                        />
                      </div>
                      <div className="text-center w-full">
                        <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                          Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                        </span>
                      </div>
                    </Link>
                    
                    <Link to="/product/5" className="bg-[#e0e0e0] h-[650px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#d5d5d5] block animate-in fade-in duration-500">
                      <h3 className="text-base tracking-widest text-black/80 font-medium">SONY ALPHA 1</h3>
                      <div className="w-full flex justify-center py-10 flex-1 items-center">
                        <img 
                          alt="Sony Alpha 1" 
                          className="w-[110%] max-w-[400px] object-contain group-hover:scale-[1.03] transition-transform duration-700 -ml-4" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnwFLC_QL8JUcbO7TJ4qu6fbgU_k6KizBo7lscL_dfSjSCmIV49O8eEI9D-cAjQJ6UN65oUEPsTBPAlzjySP4HAfRWEKY-IO263bez2cpsq0dwev_8z8be6vtLrA4O6QXTg9jxspqH-PaFA6w4Ze5AXL30RMgpNlRf-RndjtNmNubpjwcAq0NEjSF7JpLIpvomq3zPIONcPQl7eIb8Vm1o0MwoinzbjNo3iJc2a7brQEAZhsqPPsB48W350VIBHm3WwFgEvs9Ljw"
                        />
                      </div>
                      <div className="text-center w-full">
                        <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                          Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/product/6" className="bg-[#f0f0f0] h-[650px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#e6e6e6] block animate-in fade-in duration-500">
                      <h3 className="text-base tracking-widest text-black/80 font-medium">LUMIX DC-S5IIX</h3>
                      <div className="w-full flex justify-center py-10 flex-1 items-center">
                        <img 
                          alt="Lumix S5IIX" 
                          className="w-full max-w-[340px] object-contain group-hover:scale-[1.03] transition-transform duration-700" 
                          src="https://lh3.googleusercontent.com/aida/ADBb0uhLdCXbXkySfd0sVS5L2AyNxwFjiL90BhGc2BY9LbVnMvGsbYl9ptiYNizolhlyhOkryXVN6OeayWYqwpK4MQvVZrgP9CwdSlSXt6Q6yRfIxBVVeyRZcxbf4S9MJTUDsfO8ZcAABoN7hGHD5c3Qa8cxhqhwhlivhjEMO-45afqymFLN5VIQF7-vKL6O_1de63DxnxvvCENKz1MQpoU0OgJNnoV4xHwS7AQtXoGTsoHou9dbXPT-ibECEnQaVgJmI21umlXdPM4Z"
                        />
                      </div>
                      <div className="text-center w-full">
                        <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                          Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                        </span>
                      </div>
                    </Link>
                  </>
                )}

                {activeTab === 'lens' && (
                  <>
                    <Link to="/product/7" className="bg-[#f6f6f6] h-[650px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#ebebeb] block animate-in fade-in duration-500">
                      <h3 className="text-base tracking-widest text-black/80 font-medium">CANON RF 50MM F/1.2L</h3>
                      <div className="w-full flex justify-center py-10 flex-1 items-center">
                        <img 
                          alt="Canon Lens" 
                          className="w-full max-w-[280px] object-contain group-hover:scale-[1.03] transition-transform duration-700" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSlHGyw4E5vcRH1HLKTE81_YiwtdPB9KS3DaL4elPNXiE8shlcHSANA-DfmOP88FdxVBaBc_xfD1Yiidx6jcKjVMLTQ48SBZx8tpzmFvsfv8QbooHlwDzGUyosRHYmEpgG_rCrEi48110gvFUAyZgSHtwau-iclSQKBsrLXYCTptS4IKu5akTMCwukD66mAI250Yxnn3EvjKoA5pVvEuL13wYr5XnjFRBShRbdJ1qxIGDdM_OgBESSbZVwt1doNBcXsNlipSE8A"
                        />
                      </div>
                      <div className="text-center w-full">
                        <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                          Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/product/8" className="bg-[#e5e5e5] h-[650px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#dddddd] block animate-in fade-in duration-500">
                      <h3 className="text-base tracking-widest text-black/80 font-medium">SONY FE 135MM F/1.8 GM</h3>
                      <div className="w-full flex justify-center py-10 flex-1 items-center">
                        <img 
                          alt="Sony Lens" 
                          className="w-full max-w-[280px] object-contain group-hover:scale-[1.03] transition-transform duration-700" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSlHGyw4E5vcRH1HLKTE81_YiwtdPB9KS3DaL4elPNXiE8shlcHSANA-DfmOP88FdxVBaBc_xfD1Yiidx6jcKjVMLTQ48SBZx8tpzmFvsfv8QbooHlwDzGUyosRHYmEpgG_rCrEi48110gvFUAyZgSHtwau-iclSQKBsrLXYCTptS4IKu5akTMCwukD66mAI250Yxnn3EvjKoA5pVvEuL13wYr5XnjFRBShRbdJ1qxIGDdM_OgBESSbZVwt1doNBcXsNlipSE8A"
                        />
                      </div>
                      <div className="text-center w-full">
                        <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                          Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/product/9" className="bg-[#f6f6f6] h-[650px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#ebebeb] block animate-in fade-in duration-500">
                      <h3 className="text-base tracking-widest text-black/80 font-medium">NIKON Z 70-200MM F/2.8</h3>
                      <div className="w-full flex justify-center py-10 flex-1 items-center">
                        <img 
                          alt="Nikon Lens" 
                          className="w-full max-w-[280px] object-contain group-hover:scale-[1.03] transition-transform duration-700" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSlHGyw4E5vcRH1HLKTE81_YiwtdPB9KS3DaL4elPNXiE8shlcHSANA-DfmOP88FdxVBaBc_xfD1Yiidx6jcKjVMLTQ48SBZx8tpzmFvsfv8QbooHlwDzGUyosRHYmEpgG_rCrEi48110gvFUAyZgSHtwau-iclSQKBsrLXYCTptS4IKu5akTMCwukD66mAI250Yxnn3EvjKoA5pVvEuL13wYr5XnjFRBShRbdJ1qxIGDdM_OgBESSbZVwt1doNBcXsNlipSE8A"
                        />
                      </div>
                      <div className="text-center w-full">
                        <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                          Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                        </span>
                      </div>
                    </Link>
                  </>
                )}
              </div>

              {/* Right Arrow */}
              <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-10 w-12 h-12 bg-[#666666] hover:bg-gray-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors">
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Pagination Indicators with Zoom Effect */}
            <div className="flex justify-center mt-12 gap-3 items-center h-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <button 
                  key={i}
                  className={`rounded-full transition-all duration-300 ease-out 
                    ${i === 1 ? 'w-8 h-[6px] bg-black shadow-md' : 'w-2 h-2 bg-gray-300 hover:w-6 hover:bg-black hover:shadow-md'}
                  `}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Banner Tinh Tế */}
        <section className="w-full relative h-[250px] overflow-hidden group">
           <img 
              src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2000&auto=format&fit=crop" 
              alt="Camera Setup" 
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000"
           />
           <div className="absolute inset-0 bg-black/40"></div>
           <div className="absolute inset-0 flex items-center justify-center px-4">
             <p className="text-white text-2xl md:text-3xl font-light tracking-[0.3em] uppercase drop-shadow-lg text-center">Đỉnh cao quang học</p>
           </div>
        </section>

        {/* Ống kính chuyên nghiệp (Lenses) */}
        <section className="py-24 bg-white">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-normal text-black mb-4">Ống kính chuyên nghiệp</h2>
              <p className="text-gray-500 text-lg">Hệ thống ống kính cao cấp giúp bạn chinh phục mọi góc nhìn.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {/* Product 1 */}
              <div className="bg-[#f6f6f6] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#ebebeb]">
                <h3 className="text-base tracking-widest text-black/80 font-medium">CANON RF 85MM F/1.2L</h3>
                <div className="w-full flex justify-center py-10 flex-1 items-center">
                  <img className="w-full max-w-[280px] object-contain group-hover:scale-[1.03] transition-transform duration-700 drop-shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSlHGyw4E5vcRH1HLKTE81_YiwtdPB9KS3DaL4elPNXiE8shlcHSANA-DfmOP88FdxVBaBc_xfD1Yiidx6jcKjVMLTQ48SBZx8tpzmFvsfv8QbooHlwDzGUyosRHYmEpgG_rCrEi48110gvFUAyZgSHtwau-iclSQKBsrLXYCTptS4IKu5akTMCwukD66mAI250Yxnn3EvjKoA5pVvEuL13wYr5XnjFRBShRbdJ1qxIGDdM_OgBESSbZVwt1doNBcXsNlipSE8A" alt="Canon Lens"/>
                </div>
                <div className="text-center w-full">
                  <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                    Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                  </span>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-[#d9d9d9] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#d0d0d0]">
                <h3 className="text-base tracking-widest text-black/80 font-medium">SONY FE 24-70MM F/2.8 GM II</h3>
                <div className="w-full flex justify-center py-10 flex-1 items-center">
                  <img className="w-full max-w-[280px] object-contain group-hover:scale-[1.03] transition-transform duration-700 drop-shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSlHGyw4E5vcRH1HLKTE81_YiwtdPB9KS3DaL4elPNXiE8shlcHSANA-DfmOP88FdxVBaBc_xfD1Yiidx6jcKjVMLTQ48SBZx8tpzmFvsfv8QbooHlwDzGUyosRHYmEpgG_rCrEi48110gvFUAyZgSHtwau-iclSQKBsrLXYCTptS4IKu5akTMCwukD66mAI250Yxnn3EvjKoA5pVvEuL13wYr5XnjFRBShRbdJ1qxIGDdM_OgBESSbZVwt1doNBcXsNlipSE8A" alt="Sony Lens"/>
                </div>
                <div className="text-center w-full">
                  <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                    Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                  </span>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-[#f6f6f6] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#ebebeb]">
                <h3 className="text-base tracking-widest text-black/80 font-medium">NIKON Z 50MM F/1.2 S</h3>
                <div className="w-full flex justify-center py-10 flex-1 items-center">
                  <img className="w-full max-w-[280px] object-contain group-hover:scale-[1.03] transition-transform duration-700 drop-shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSlHGyw4E5vcRH1HLKTE81_YiwtdPB9KS3DaL4elPNXiE8shlcHSANA-DfmOP88FdxVBaBc_xfD1Yiidx6jcKjVMLTQ48SBZx8tpzmFvsfv8QbooHlwDzGUyosRHYmEpgG_rCrEi48110gvFUAyZgSHtwau-iclSQKBsrLXYCTptS4IKu5akTMCwukD66mAI250Yxnn3EvjKoA5pVvEuL13wYr5XnjFRBShRbdJ1qxIGDdM_OgBESSbZVwt1doNBcXsNlipSE8A" alt="Nikon Lens"/>
                </div>
                <div className="text-center w-full">
                  <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                    Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                  </span>
                </div>
              </div>

              {/* Product 4 */}
              <div className="bg-[#f6f6f6] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#ebebeb]">
                <h3 className="text-base tracking-widest text-black/80 font-medium">FUJIFILM XF 56MM F/1.2 R</h3>
                <div className="w-full flex justify-center py-10 flex-1 items-center">
                  <img className="w-full max-w-[280px] object-contain group-hover:scale-[1.03] transition-transform duration-700 drop-shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSlHGyw4E5vcRH1HLKTE81_YiwtdPB9KS3DaL4elPNXiE8shlcHSANA-DfmOP88FdxVBaBc_xfD1Yiidx6jcKjVMLTQ48SBZx8tpzmFvsfv8QbooHlwDzGUyosRHYmEpgG_rCrEi48110gvFUAyZgSHtwau-iclSQKBsrLXYCTptS4IKu5akTMCwukD66mAI250Yxnn3EvjKoA5pVvEuL13wYr5XnjFRBShRbdJ1qxIGDdM_OgBESSbZVwt1doNBcXsNlipSE8A" alt="Fujifilm Lens"/>
                </div>
                <div className="text-center w-full">
                  <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                    Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                  </span>
                </div>
              </div>

              {/* Product 5 */}
              <div className="bg-[#f0f0f0] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#e0e0e0]">
                <h3 className="text-base tracking-widest text-black/80 font-medium">CANON RF 28-70MM F/2L</h3>
                <div className="w-full flex justify-center py-10 flex-1 items-center">
                  <img className="w-full max-w-[280px] object-contain group-hover:scale-[1.03] transition-transform duration-700 drop-shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSlHGyw4E5vcRH1HLKTE81_YiwtdPB9KS3DaL4elPNXiE8shlcHSANA-DfmOP88FdxVBaBc_xfD1Yiidx6jcKjVMLTQ48SBZx8tpzmFvsfv8QbooHlwDzGUyosRHYmEpgG_rCrEi48110gvFUAyZgSHtwau-iclSQKBsrLXYCTptS4IKu5akTMCwukD66mAI250Yxnn3EvjKoA5pVvEuL13wYr5XnjFRBShRbdJ1qxIGDdM_OgBESSbZVwt1doNBcXsNlipSE8A" alt="Canon 28-70"/>
                </div>
                <div className="text-center w-full">
                  <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                    Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                  </span>
                </div>
              </div>

              {/* Product 6 */}
              <div className="bg-[#f6f6f6] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#ebebeb]">
                <h3 className="text-base tracking-widest text-black/80 font-medium">SONY FE 16-35MM F/2.8 GM</h3>
                <div className="w-full flex justify-center py-10 flex-1 items-center">
                  <img className="w-full max-w-[280px] object-contain group-hover:scale-[1.03] transition-transform duration-700 drop-shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSlHGyw4E5vcRH1HLKTE81_YiwtdPB9KS3DaL4elPNXiE8shlcHSANA-DfmOP88FdxVBaBc_xfD1Yiidx6jcKjVMLTQ48SBZx8tpzmFvsfv8QbooHlwDzGUyosRHYmEpgG_rCrEi48110gvFUAyZgSHtwau-iclSQKBsrLXYCTptS4IKu5akTMCwukD66mAI250Yxnn3EvjKoA5pVvEuL13wYr5XnjFRBShRbdJ1qxIGDdM_OgBESSbZVwt1doNBcXsNlipSE8A" alt="Sony 16-35"/>
                </div>
                <div className="text-center w-full">
                  <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                    Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
                <Link to="/products" className="inline-flex items-center gap-2 border border-black text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors">
                  Khám phá tất cả <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                </Link>
            </div>
          </div>
        </section>

        {/* Combo Tiết Kiệm */}
        <section className="w-full flex flex-col">
          {/* Top Banner */}
          <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop" 
              alt="Combo Máy Ảnh" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out object-center"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto w-full">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-md">CỔ ĐIỂN VÀ TINH TẾ</h2>
              <p className="text-lg text-white/90 mb-8 font-light max-w-lg drop-shadow">Nét đẹp cổ điển đi cùng sức mạnh công nghệ hiện đại.</p>
              <div>
                <button className="bg-white text-black px-8 py-3 font-medium text-sm transition-colors hover:bg-gray-100 uppercase tracking-widest flex items-center gap-2">
                  Khám phá combo <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                </button>
              </div>
            </div>
          </div>
          {/* Bottom Banner */}
          <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=2000&auto=format&fit=crop" 
              alt="Combo Chuyên Nghiệp" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out object-center"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto w-full">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-md">SỨC MẠNH VƯỢT TRỘI</h2>
              <p className="text-lg text-white/90 mb-8 font-light max-w-lg drop-shadow">Lựa chọn tối ưu cho những nhà làm phim đa năng.</p>
              <div>
                <button className="bg-white text-black px-8 py-3 font-medium text-sm transition-colors hover:bg-gray-100 uppercase tracking-widest flex items-center gap-2">
                  Khám phá combo <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* The Blog Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-normal text-black">The CMA Blog</h2>
              <button className="border border-black text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors">
                All Blog Posts
              </button>
            </div>

            <div className="relative w-full overflow-hidden">
              {/* Main Content Area */}
              <div className="flex items-center">
                {/* Left Cutoff Image */}
                <div className="hidden md:block w-[5%] h-[600px] opacity-40 shrink-0">
                  <img className="w-full h-full object-cover object-right" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop" alt="Previous Post"/>
                </div>

                {/* Left Arrow (Absolute positioning on top of image edge) */}
                <button className="absolute left-[2%] z-10 w-12 h-12 bg-black/20 hover:bg-black/40 border border-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all">
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                </button>

                {/* Center Main Image Content */}
                <Link to="/blog/1" className="w-[90%] flex-1 h-[600px] relative group cursor-pointer border-x-[4px] border-white shrink-0 block overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop" alt="Current Post"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-10 left-10 text-white z-20">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-90">FEATURED • Q-CAMERAS</p>
                    <h3 className="text-3xl lg:text-4xl font-semibold mb-3 group-hover:underline">Bali: The Island of Gods and Silence</h3>
                    <p className="text-sm font-medium opacity-80">Julia Nimke</p>
                  </div>
                </Link>

                {/* Right Arrow */}
                <button className="absolute right-[2%] z-10 w-12 h-12 bg-black/20 hover:bg-black/40 border border-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>

                {/* Right Cutoff Image */}
                <div className="hidden md:block w-[5%] h-[600px] opacity-40 shrink-0">
                  <img className="w-full h-full object-cover object-left" src="https://images.unsplash.com/photo-1516483638261-f4089025062b?q=80&w=1000&auto=format&fit=crop" alt="Next Post"/>
                </div>
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-center mt-8 gap-[6px]">
              <span className="w-1 h-[14px] bg-black"></span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
