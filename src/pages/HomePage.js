import Slider from '~/components/Slider';
import Card from '~/components/Card';
import { category, movieType, tvType } from '~/api/tmdbApi';

function HomePage() {
    return (
        <>
            <Slider />

            {/* Trending movie list */}
            <Card title="Trending Movies" category={category.movie} type={movieType.popupar} delay={2000} />

            {/* Top rate movie list */}
            <Card title="Top Rated Movies" category={category.movie} type={movieType.top_rated} delay={2100} />

            {/* Trending Tv list */}
            <Card title="Trending TV Series" category={category.tv} type={tvType.popupar} delay={2200} />

            {/* Top rate Tv list */}
            <Card title="Top Rated TV Series" category={category.tv} type={tvType.top_rated} delay={2300} />
        </>
    );
}

export default HomePage;
