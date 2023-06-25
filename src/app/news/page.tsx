import News from "@/ui/news/News";
import { metadata as meta } from '../layout';
import { api } from "@/utils/api";


export const metadata = meta({ title: 'News' });

async function getData(data: object) {
  const res = await api.get(`${process.env.NEXT_PUBLIC_URL}/Resource`, { params:data})
  return res.data
}

export default async function page({ searchParams }: any) {
  const data = await getData(searchParams)
  const keyword:string =  ""+ Object.values(searchParams)[0]
  return (
          <News search={keyword} data={data}/>
  )
}
