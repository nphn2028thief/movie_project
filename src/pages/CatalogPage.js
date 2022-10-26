import { useParams } from 'react-router-dom';
import PageHeader from '~/components/PageHeader';
import { category as cate } from '~/api/tmdbApi';
import PageGrid from '~/components/PageGrid/PageGrid';

function CatalogPage() {
    const { category } = useParams();

    return (
        <>
            <PageHeader>{category === cate.movie ? 'Movies' : 'TV Series'}</PageHeader>

            <div className="container">
                <div className="section mb-3">
                    <PageGrid categoryData={category} />
                </div>
            </div>
        </>
    );
}

export default CatalogPage;
