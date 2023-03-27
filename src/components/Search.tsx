import { useEffect, useState } from "react"

type SearchProps = {
    defaultWords?: string,
    updateList: (newList: ImgItem[]) => void
}

export default function Search({ defaultWords = '', updateList }: SearchProps) {
    const [keywords, setKeywords] = useState(defaultWords)

    const updateKeywords = (e: React.FormEvent<HTMLInputElement>) => {
        setKeywords(e.currentTarget?.value)
    }

    useEffect(() => {
        //check words validate,
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3e7cc266ae2b0e0d78e279ce8e361736&format=json&nojsoncallback=1&safe_search=1&text=kittens')
            // res check
            .then(res => res.json())
            .then(res => {
                console.log("----", res);
                updateList(res?.photos.photo);
            })
            .catch(e => {
                console.log(e);
            })

    }, [keywords])

    return <div>
        <input type="text" value={keywords} onChange={updateKeywords} />
        <button > search </button>
    </div>
}
