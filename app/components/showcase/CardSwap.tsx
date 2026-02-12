import CardSwap, { Card } from '@/components/CardSwap'

interface CardSwapComponentProps {
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
}

export function CardSwapComponent({
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false
}: CardSwapComponentProps) {
  return (
    <div style={{ height: '600px', position: 'absolute', bottom: 0, right: 0 }}>
      <CardSwap
        cardDistance={cardDistance}
        verticalDistance={verticalDistance}
        delay={delay}
        pauseOnHover={pauseOnHover}
      >
        <Card>
          <h3>Card 1</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 2</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 3</h3>
          <p>Your content here</p>
        </Card>
      </CardSwap>
</div>
 );}
