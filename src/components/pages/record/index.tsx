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
    const [ totalPage, setTotalpage] = useState<number>(1);
    const [ apiUrl, setApiUrl ] = useState<string>();
    const [ postsData, setPostsData ] = useState<postsDataType[]>([]);
    const { page, category } = useParams<urlParams>();
    const perPage: number = 1;

    const getJson = (url: string, type: string) => {
        axios.get(url).then((res) => {
            switch(type) {
                case 'posts':
                    setTotalpage(Number(res.headers["x-wp-totalpages"]));
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
                setApiUrl(`http://wp.hiromi-ogawa.com/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}&categories=${result.id}`);
            } else if (category == 'all') {
                setApiUrl(`http://wp.hiromi-ogawa.com/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`);
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
                <li key={i}><Link to={`/record/?categories=${value.categories[i]}`}>{cat}</Link></li>
                )}
            </ul>
            </article>
        </li>
    ));

    const getPageNation = (totalPage: number) => {
        let startPage: number;
        let endPage: number;
        const numberPage: number = Number(page);
        const pageNation: JSX.Element[]  = [];

        if(numberPage + 3 > totalPage) {
            endPage = totalPage;
        } else {
            endPage = numberPage + 2;
        }

        if(numberPage < 3 ) {
            startPage = 1;
        } else if(numberPage + 2 > totalPage) {
            startPage = numberPage - ((numberPage + 4) - totalPage);
        } else {
            startPage = numberPage - 2;
        }

        if(endPage < 5 ) {
            startPage = 1;
            if(numberPage < 3) {
                endPage = endPage + ((numberPage - 3) * -1);
                if (endPage > totalPage) {
                    endPage = totalPage;
                }
            }
        }

        for(let i = startPage; i <= endPage; i++) {
            if (numberPage == i) {
                pageNation.push(
                    <li key={i}>{i}</li>
                )
            } else {
                pageNation.push(
                    <li key={i}><Link to={`/record/${category}/${i}`}>{i}</Link></li>
                )            
            }
        }

        return pageNation;
    };

    return (
        <article>
            <div className="page_heading"></div>
            <Scontents>
                <ul>
                <li><Link to="/record/all/1">全て</Link></li>
                    { categoryList }
                </ul>
                <ul>
                    { recordList }
                </ul>
                <ol>
                    { getPageNation(totalPage) }
                </ol>
            </Scontents>
        </article>
    );
});
