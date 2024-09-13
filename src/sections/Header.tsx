import Logo from '@/assets/logo.svg'
import Menu from '@/assets/icon-menu.svg'
import GradientButton from '@/components/ui/GradientButton'
export const Header = () => {
  return (
    <header className="py-4 z-50  fixed w-full border-b border-white/15 md:border-none  ">
      <div className="container">
        <div className="flex justify-between backdrop-blur-xl items-center md:border border-white/15 md:px-6 md:py-3 max-w-2xl  mx-auto rounded-full  ">
          <div className="border h-10 w-10 rounded-lg  inline-flex justify-center items-center border-white/15">
            <Logo className="h-8 w-8 " />
          </div>
          <div>
            <nav className='md:flex gap-8 hidden text-sm  '>
              <a href="#" className='text-white/70 hover:text-white transition'>Features</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Developers</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Pricing</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Changelog</a>
            </nav>
          </div>
          <div className="flex gap-6 md:gap-0 items-center ">
          <GradientButton
            initial="close"
            whileInView="open"
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 250,
                  damping: 25,
                  delay: 1,
                },
              },
              close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
            }}
          >
            Join waitlist
          </GradientButton>
            <span>
              <Menu className=" block md:hidden" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
