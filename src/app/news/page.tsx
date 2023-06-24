import News from "@/ui/news/News";
import { metadata as meta } from '../layout';
import { api } from "@/utils/api";


export const metadata = meta({ title: 'News' });

async function getData(data: object) {
  const res = await api.get(`${process.env.NEXT_PUBLIC_URL}/Resource?${Object.keys(data)[0]}=${Object.values(data)[0]}`,)
  return res.data
}

export default async function page(props: any) {
  const { searchParams } = props
  
  const data  =  await getData(searchParams)
  return (
          <News search={Object.values(searchParams)[0]} data={data}/>
  )
}
