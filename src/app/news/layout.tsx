

import { metadata as meta } from "../layout";
export const metadata = meta({ title: 'News' })

export default function NewsLayout({
    children, 
}: {

    children: React.ReactNode;
    }) { 

    return (<>{children }</>)
}