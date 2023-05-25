import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="container mx-auto">
      <div className="border-t border-gray-200 py-8 flex gap-16">
        <Logo className="-translate-y-[12px]" />

        <div className="">
            <h3 className="font-medium mb-4">Result Oriented Digital Agency</h3>
        </div>

        <div className="flex flex-col gap-4 ml-2">

        </div>
      </div>
    </footer>
  );
}
