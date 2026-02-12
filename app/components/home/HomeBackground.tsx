'use client';
import Ballpit from '@/components/Ballpit';


export function HomeBackground() {
  return (
     <Ballpit
          count={100}
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={false}
          colors={["#5227FF","#7cff67","#ff6b6b"]}
        />
  );
}