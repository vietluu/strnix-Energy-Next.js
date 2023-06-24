'use client';
import Image from 'next/image';
import Link from 'next/link';
import NewsSkeleton from '@/components/skeleton/NewsSkeleton';

interface props {
  data: [
    {
      id: number;
      title: string;
      slug: string;
      image: string;
      category: string;
      content: string;
      tag: string;
      createAt: Date;
    }
  ];
}

export default function News(props:props) {
  const {data} = props

  return (
    <>
    
      <div className="news-box">
                {data.length > 0 ? (
                  data.map((value :any ) => (
                    <div
                      key={value.id}
                      className="news-box__inner px-4 mb-[40px]"
                    >
                      <div className="pb-[50px]">
                        <Link href={`news/${value.slug}`}>
                          <Image
                            priority
                            fill
                            className="aspect-[13/9]"
                            src={value.image}
                            alt="img"
                          />
                          <h2 className="text-3xl font-bold p-[20px]">
                            {value.title}
                          </h2>
                        </Link>
                        <p className=" p-[20px] whitespace-nowrap overflow-hidden text-ellipsis">
                          {value.content}
                        </p>
                        <div className="d-flex items-center p-[20px] ">
                          <span className="ml-0 text-[#999999] font-bold cursor-pointer hover:text-[green]">
                            {value.category}
                          </span>
                          <Link
                            href={`news/${value.slug}`}
                            className="mr-0 text-blue-700 text-xl"
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <NewsSkeleton />
                  </>
                )}
              </div>
    </>
  );
}
