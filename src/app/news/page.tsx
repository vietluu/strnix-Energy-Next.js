'use client';
export default function News() {
  return (
    <>
      <div
        className='page-baner banner-title'
        style={{
          backgroundImage: 'url(/assets/images/services/banner-bg-2.jpg)',
        }}
        data-aos='custom-center'
        data-aos-duration='500'
      >
        <div className='mt-11 pt-8 font-weight-bold'>
          <h5>
            {"strnix world's energy "}
            {'  →  News'}
          </h5>
          <h1 className='text-6xl mt-4'>News</h1>
        </div>
      </div>
    </>
  );
}
