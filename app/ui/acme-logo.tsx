import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { inter } from '../ui/fonts';


export default function AcmeLogo() {
  return (
    <div
      className={`${inter.className} antialiased flex flex-row items-center leading-none text-black`}
    >
      <GlobeAltIcon className="h-1 w-10 rotate-[15deg]" />
      <p className="text-[30px]">DataControl</p>
    </div>
  );
}
