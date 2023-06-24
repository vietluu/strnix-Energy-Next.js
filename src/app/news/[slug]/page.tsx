import Detail from "@/ui/news/Detail";
import { api } from "@/utils/api";

async function getData(slug:string) {
  const res = (await api.get(`${process.env.NEXT_PUBLIC_URL}/Resource?slug=${slug}`))
  return res.data
}

interface params{
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
