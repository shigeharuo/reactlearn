// Booklist.jsx

import React, { useState, useEffect } from 'react'; // 動画７追加


const Booklist = props => {
    const [bookData, setBookData] = useState(null);   // ここから追加
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])                                       // ここまで追加
    return (
        <div>
            <ul>
                {     // 動画８編集 元コード→<p> {bookData.data.items.map(x => <li>{x.volumeInfo.title}</li>)}</p> <img src={x.volumeInfo.imageLinks.smallThumbnail} alt=""></img>
                    bookData === null
                        ? <p>now loading...</p>
                        : bookData.data.items.map((x, index) => <li key={index}>{x.volumeInfo.readingModes.image}{x.volumeInfo.title}　名前：{x.volumeInfo.authors}</li>)
                }
            </ul>

        </div>
    );
}
export default Booklist;