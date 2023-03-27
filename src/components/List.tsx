import { useEffect, useRef, useState } from "react"

type ListProps = {
    sourceData: ImgItem[],
    pageSize?: number
}

export default function List({ sourceData }: ListProps) {
    const [currentList, setCurrentList] = useState<ImgItem[]>([]);
    const loadingRef = useRef<HTMLDivElement>(null);

    const checkPage = () => {
        if (loadingRef.current) {
            console.log(loadingRef.current.getBoundingClientRect().top);
        }
    }

    return <ul style={{
        maxHeight: '400px',
        overflowY: 'scroll',
        border: '1px solid rgba(233,233,233,0.5)'
    }} onScroll={checkPage}>
        {sourceData.slice(90).map(item => <li key={item.id}>{item.title}</li>)}
        <div ref={loadingRef}>loading</div>
    </ul>
}
