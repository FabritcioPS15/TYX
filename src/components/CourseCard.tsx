import { Link } from 'react-router-dom';
import { FaClock, FaUsers, FaLaptop, FaTag, FaCertificate } from 'react-icons/fa';
import { Reveal } from './Reveal';

interface CourseCardProps {
    id: string;
    title: string;
    description: string;
    level: string;
    duration: string;
    students: number;
    modality: string;
    category: string;
    price: number;
    image: string;
    index: number;
}

export const CourseCard = ({
    id,
    title,
    description,
    level,
    duration,
    students,
    modality,
    category,
    price,
    image,
    index
}: CourseCardProps) => {
    // Determine badge color based on level
    const getLevelColor = (level: string) => {
        if (level.includes('Básico')) return 'bg-green-500';
        if (level.includes('Intermedio')) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    return (
        <Reveal delay={index * 0.1} className="h-full">
            <div className="bg-[#0f1623] border border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col group">
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold text-white rounded uppercase tracking-wider ${getLevelColor(level)}`}>
                        {level}
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-heading font-bold text-white mb-3 line-clamp-2 min-h-[3.5rem]">
                        {title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                        {description}
                    </p>

                    <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-gray-400">
                            <FaClock className="w-4 h-4 mr-2 text-primary-light" />
                            <span>{duration}</span>
                            <span className="mx-2">•</span>
                            <FaUsers className="w-4 h-4 mr-2 text-primary-light" />
                            <span>{students} estudiantes</span>
                        </div>

                        <div className="flex items-center text-sm text-gray-400">
                            <FaLaptop className="w-4 h-4 mr-2 text-primary-light" />
                            <span>{modality}</span>
                        </div>

                        <div className="flex items-center text-sm text-gray-400">
                            <FaTag className="w-4 h-4 mr-2 text-primary-light" />
                            <span>{category}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <span className="text-2xl font-bold text-primary-light">
                            S/ {price.toFixed(2)}
                        </span>
                    </div>

                    <Link
                        to={`/recursos/cursos/${id}`}
                        className="w-full py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                        <FaCertificate className="w-4 h-4" />
                        Imprime tu certificado
                    </Link>
                </div>
            </div>
        </Reveal>
    );
};
