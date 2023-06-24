import News from "@/ui/news/News";
import { metadata as meta } from '../layout';
import { api } from "@/utils/api";
import Search from "@/ui/news/Search";

export const metadata = meta({ title: 'News' });

async function getData(data: object) {
  console.log(data)
  const res = await api.get(`${process.env.NEXT_PUBLIC_URL}/Resource?${Object.keys(data)[0]}=${Object.values(data)[0]}`,)
  return res.data
}
export default async function page(props: any) {
  const {searchParams} = props
  const data  =  await getData(searchParams)
  return (
    <>
      {
        Object.keys(searchParams).length ? (<Search data={data} keyword={Object.values(searchParams)[0]} />) : (
          <News data={data}/>
        )
    }
    </>
  )
}
