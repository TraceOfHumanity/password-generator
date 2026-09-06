const Wrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='fixed left-1/2 top-1/2 flex w-xl -translate-x-1/2 -translate-y-1/2 flex-col gap-2 p-3 backdrop-blur-xs rounded-xl bg-white/5 border-b-3 border-r border-green/50 max-w-[95vw]'>
      {children}
    </div>
  );
};

export default Wrapper;
