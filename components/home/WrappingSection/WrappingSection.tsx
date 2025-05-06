import { AutoChange } from './img/AutoChange';
import { ChangeImg } from './img/ChangeImg';

export const WrappingSection = () => {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 items-center mb-6">
      <div className="flex items-center justify-center my-5">
        <h2 className="text-muted-foreground">
          綺麗にラッピングしてお届けします。
        </h2>
        <AutoChange />
      </div>
      <div className="flex justify-center px-12">
        <ChangeImg />
      </div>
    </section>
  );
};
