import { FC, useState, memo, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Scontents } from '../../../styleSetting/CommonStyle';


type categoryDataType = {
    id: number,
    name: string,
    slug: string
}

type recordListDataType = {
    id: number,
    title: {
        rendered: string
    },
    acf: {
        [s: string]: string
    },
    categories: {
        key: number
    }[],
    category_name: {
        key: string
    }[]
}

type urlParams = {
    page: string
}

export const RecordList: FC = memo(() => {

    const [ categoryData, setCategoryData ] = useState<categoryDataType[]>([]);
    const [ recordData, setRecordData ] = useState<recordListDataType[]>([]);
    const { page } = useParams<urlParams>();
        

    useEffect(() => {
        axios.get(`http://wp.hiromi-ogawa.com/wp-json/wp/v2/categories`).then((categoryRes) => {
            setCategoryData(categoryRes.data);
        })
        axios.get(`http://wp.hiromi-ogawa.com/wp-json/wp/v2/posts?_embed&per_page=8&page=${page}`).then((recordRes) => {
            setRecordData(recordRes.data);
        })
    }, []);
    const categoryList = categoryData.map((value,i) => (
        <li key={i}>
            <Link to={`/record/${value.slug}/1`}>{value.name}</Link>
        </li>
    ));

    const recordList = recordData.map((value,i) => (
        <li key={i}>
            <article>
            <Link to={`/record/detail/${value.id}`}>
                <img src={value.acf.img1} />
                <div className="txt-area">
                    <h2 className="title">{value.title.rendered}</h2>
                </div>
                <p>{value.category_name[1]}</p>
            </Link>
            <ul className="category">
                {value.category_name.map((cat, i, []) =>
                <li key={i}><Link to={"/record/1?categories=" + value.categories[i]}>{cat}</Link></li>
                )}
            </ul>
            </article>
        </li>
    ));


    return (
        <article>
            <div className="page_heading"></div>
            <Scontents>
                { categoryList }
                { recordList }
            </Scontents>
        </article>
    );
});
