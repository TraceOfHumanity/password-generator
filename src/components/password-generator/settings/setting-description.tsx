export const SettingDescription = ({children}: {children: React.ReactNode}) => {
  return (
    <span className='text-xs text-green'>
      <span className='text-white/20'>(</span>
      {children}
      <span className='text-white/20'>)</span>
    </span>
  );
};
