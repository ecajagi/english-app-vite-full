
import IntroCard from '../../components/common/IntroCard';
import { Image as ImageIcon } from 'lucide-react';

const images = [
    { src: '/img1.jpg', desc: 'A calm fjord landscape with mountains.' },
    { src: '/img2.jpg', desc: 'Early morning light on a Scandinavian village.' },
];

const Images = () => (
    <div className="p-6 bg-scandi.bg min-h-screen">
        <IntroCard
            title="Visual Inspiration"
            summary="Themed image collections with short mood-based descriptions."
            Icon={ImageIcon}
        />

        <div className="grid md:grid-cols-2 gap-4">
            {images.map(({ src, desc }, i) => (
                <div key={i} className="bg-white rounded shadow overflow-hidden">
                    <img src={src} alt={desc} className="w-full h-48 object-cover" />
                    <p className="p-3 text-sm text-gray-700">{desc}</p>
                </div>
            ))}
        </div>
    </div>
);
export default Images;