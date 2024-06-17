type SeperatorProps = {
  orientation?: 'vertical' | 'horizontal';
  mode?: 'dark' | 'light';
};

const Seperator = ({
  orientation = 'horizontal',
  mode = 'dark'
}: SeperatorProps) => {
  const isVertical = orientation === 'vertical';
  const isDark = mode === 'dark';

  if (isVertical) return (
    <div className={`flex ${isVertical ? 'flex-row' : 'flex-col'}`}>
      <div className={`bg-${isDark ? 'red' : 'white/5'} w-[5px] h-full ${isVertical ? 'h-full w-[5px]' : ''}`}></div>
      <div className={`bg-${isDark ? 'white/5' : 'black'} w-[1px] h-full ${isVertical ? 'h-full w-[1px]' : ''}`}></div>
    </div>
  )

  if (!isVertical) return (
    <div className={`flex ${isVertical ? 'flex-row' : 'flex-col'}`}>
      <div className={`bg-${isDark ? 'black' : 'white/5'} w-full h-[1px] ${isVertical ? 'h-full w-[1px]' : ''}`}></div>
      <div className={`bg-${isDark ? 'white/5' : 'black'} w-full h-[1px] ${isVertical ? 'h-full w-[1px]' : ''}`}></div>
    </div>
  )
};

export default Seperator;