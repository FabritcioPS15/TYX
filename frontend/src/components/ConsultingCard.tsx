import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

interface ConsultingCardProps {
    id: string;
    title: string;
    category: string;
    image: string;
    index: number;
}

export const ConsultingCard = ({
    id,
    title,
    category,
    image,
    index
}: ConsultingCardProps) => {
    return (
        <Reveal delay={index * 0.1} className="h-full">
            <div className="bg-[#0f1623] rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 h-full flex flex-col group border border-gray-800">
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1623] via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-6 flex flex-col items-center text-center flex-grow">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                        {title}
                    </h3>

                    <p className="text-primary-light font-medium mb-8">
                        {category}
                    </p>

                    <Link
                        to={`/asesoria-consultoria/${id}`}
                        className="w-full mt-auto py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-colors shadow-lg shadow-primary/20 hover:shadow-primary/40 block"
                    >
                        Empieza hoy
                    </Link>
                </div>
            </div>
        </Reveal>
    );
};
