import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

export const Profile: FC = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });

    return (
        <article>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <p>テスト</p>
            <div ref={ref}>
           <h1>{`Header inside viewport ${inView}.`}</h1>
           </div>
        </article>
    );
};