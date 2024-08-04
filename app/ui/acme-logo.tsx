import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { inter } from '../ui/fonts';


export default function AcmeLogo() {
  return (
    <div
      className={`${inter.className} antialiased flex flex-row items-center leading-none text-green-500 w-full`}
    >
      <GlobeAltIcon className="h-10 w-10 rotate-[15deg]" />
      <p className="text-[22px] font-extrabold">DataControl</p>
    </div>
  );
}
