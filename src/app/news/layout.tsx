import NewsSidebar from "@/components/NewsSidebar";
import BannerBreadcrumbs from "@/components/banner/BannerBreadcrumbs";
import { api } from "@/utils/api";

async function getData() {
    const res = await api.get(`${process.env.NEXT_PUBLIC_URL}/Resource`)
    return res.data
  }

export default async function Layout({
    children,
  }: {
    children: React.ReactNode;
    }) {
  const data = await getData()
  const get = () => {
    console.log('jij')
  }
    return(
     <>
     <BannerBreadcrumbs
        title="News Blog"
        url="/assets/images/services/banner-bg-2.jpg"
      />
      <div className="news-container">
        <div className="container-xl py-[100px]">
          <div className="row">
            <div className="col-lg-8 col-md-12">
            {children}  
             </div> 
         <NewsSidebar data={data}/>
          </div>
        </div>
      </div>
    </> 
    );
  }