

import { metadata as meta } from "../layout";
export const metadata = meta({ title: 'Our Projects ' })

export default function ProjectsLayout({
    children, 
}: {

    children: React.ReactNode;
    }) { 

    return (<>{children }</>)
}