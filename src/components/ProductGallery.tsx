const PRODUCT_IMAGES = [
  'aguacate.jpeg',
  'aguacates.jpeg',
  'aguacate_2.jpeg',
  'mangos_1.jpeg',
  'mangos_2.jpeg',
  'mangos_4.jpeg',
  'mangos_6.jpeg',
  'pirmiento.jpeg',
  'tomates.jpeg',
  'verdura.jpeg',
  'cajas.jpeg',
  'cajas_2.jpeg',
  'cajas_3.jpeg',
];

export function ProductGallery() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCT_IMAGES.map((image, index) => {
        const src = `${import.meta.env.BASE_URL}images/${image}`;
        const isWide = index === 0 || index === 5;

        return (
          <div
            key={image}
            className={`group relative overflow-hidden rounded-2xl border border-slate/60 bg-white shadow-soft ${
              isWide ? 'sm:col-span-2' : ''
            }`}
            aria-hidden="true"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-60 lg:h-64"
            />
          </div>
        );
      })}
    </div>
  );
}
