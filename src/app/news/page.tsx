import dynamicComponent from 'next/dynamic';
import { metadata as meta } from '../layout';
import { api } from '@/utils/api';

const News = dynamicComponent(() => import('@/ui/news/News'));

type post = [
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

export const revalidate = 0;
export const dynamicParams = true;
export const dynamic = 'force-dynamic';
export const metadata = meta({ title: 'News' });

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
async function getData(data: object) {
  const res = await api.get(`${process.env.NEXT_PUBLIC_URL}/Resource`, {
    params: data,
  });
  return res.data;
}

export default async function page({ params, searchParams }: Props) {
  const data = await getData(searchParams);

  const keyword: string = '' + Object.values(searchParams)[0];
  return <News search={keyword} data={data} />;
}
