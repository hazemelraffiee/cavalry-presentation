export interface SlideProps {
  isActive?: boolean;
}

export interface Slide {
  id: string;
  component: React.ComponentType<SlideProps>;
}