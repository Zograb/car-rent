import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);
export const SCREENS = fullConfig.theme?.screens as { [key: string]: string };
export const COLORS = fullConfig.theme?.colors as { [key: string]: string };
