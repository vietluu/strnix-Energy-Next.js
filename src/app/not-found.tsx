"use client"
import '../../assets/css/not-found.css'


export default function NotFound() {
    return (

        <>
          <div
        className="page-baner banner-title"
        style={{backgroundImage: 'url(/assets/images/services/banner-bg-2.jpg)'}}
        data-aos="custom-center"
        data-aos-duration="500"
      >
        <div className="mt-11 pt-8 font-weight-bold">
          <h5>
            {"strnix world's energy "}
            {'  →  Not found page'}
          </h5>
          <h1 className="text-6xl mt-4">Notfound!</h1>
        </div>
      </div>
        <div className="page-err">
            <h1 className='title'>Whoops!</h1>
            <p className='description'>Something went wrong!</p>
        </div>
    
        </>
    )
};
