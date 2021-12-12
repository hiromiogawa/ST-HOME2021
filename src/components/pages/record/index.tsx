import { FC, useState, memo, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Scontents } from '../../../styleSetting/CommonStyle';


type categoriesDataype = {
    id: number,
    name: string,
    slug: string
}

type postsDataType = {
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
    page: string,
    category: string
}

export const RecordList: FC = memo(() => {

    const [ categoriesData, setCategoryData ] = useState<categoriesDataype[]>([]);
    const [ apiUrl, setApiUrl ] = useState<string>();
    const [ postsData, setPostsData ] = useState<postsDataType[]>([]);
    const { page, category } = useParams<urlParams>();

    const getJson = (url: string, type: string) => {
        axios.get(url).then((res) => {
            switch(type) {
                case 'posts':
                setPostsData(res.data);
                break;
                case 'categories':
                setCategoryData(res.data);
                break;
            }
        })
    }
        
    useEffect(() => {
        getJson('http://wp.hiromi-ogawa.com/wp-json/wp/v2/categories', 'categories');
    }, []);

    useEffect(() => {
        if(categoriesData) {
            const result = categoriesData.find((value) => value.slug === category);
            if(result) {
                setApiUrl(`http://wp.hiromi-ogawa.com/wp-json/wp/v2/posts?_embed&per_page=12&page=${page}&categories=${result.id}`);
            } else if (category == 'all') {
                setApiUrl(`http://wp.hiromi-ogawa.com/wp-json/wp/v2/posts?_embed&per_page=12&page=${page}`);
            }
        }
    }, [categoriesData, category, page]);

    useEffect(() => {
        if (apiUrl) {
            getJson(apiUrl, 'posts');
        }
    }, [apiUrl]);

    const categoryList = categoriesData.map((value,i) => (
        <li key={i}>
            <Link to={`/record/${value.slug}/1`}>{value.name}</Link>
        </li>
    ));

    const recordList = postsData.map((value,i) => (
        <li key={i}>
            <article>
            <Link to={`/record/detail/${value.id}`}>
                <img src={value.acf.img1} />
                <div className="txt-area">
                    <h2 className="title">{value.title.rendered}</h2>
                </div>
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
