import { SlideData } from '../types/slideProps';

// Array of slides that will be shown in the onboarding
export const slidesData: SlideData[] = [
	{
		id: '1',
		title: 'Personaliza Tu Viaje Ideal',
		subtitle: 'Cuenca, Ecuador',
		image: require('@/assets/images/onboarding/cajas_one.png') // Suponiendo que usas imágenes locales
	},
	{
		id: '2',
		title: 'Selecciona Experiencias Únicas',
		subtitle: 'Cuenca, Ecuador',
		image: require('@/assets/images/onboarding/cajas_two.png')
	},
	{
		id: '3',
		title: 'Ajusta Estadía a Tu Presupuesto',
		subtitle: 'Cuenca, Ecuador',
		image: require('@/assets/images/onboarding/cajas_three.png') // Suponiendo que usas imágenes locales
	},
	{
		id: '4',
		title: 'Explora Cultura y Disfruta',
		subtitle: 'Cuenca, Ecuador',
		image: require('@/assets/images/onboarding/cajas_four.png') // Suponiendo que usas imágenes locales
	}
];
