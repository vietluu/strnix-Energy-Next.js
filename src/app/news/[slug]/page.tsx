import Detail from "@/ui/news/Detail";
import { api } from "@/utils/api";
import { metadata as meta } from '../../layout';

async function getData(slug:string) {
  const res = (await api.get(`${process.env.NEXT_PUBLIC_URL}/Resource?slug=${slug}`))
  return res.data
}

export const metadata = meta({ title: 'News' });

type params = {
  params: {
    slug:string
  }
}

export default async function page({params:{slug}}:params) {
  const data = await getData(slug)
  return (
    <Detail data = {data} />
  )
}
