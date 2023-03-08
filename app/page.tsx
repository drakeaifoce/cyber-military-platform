import Link from "next/link";

export default function Home() {
  return (
    <main className="text-[#232323]">
      <h2 className="text-3xl font-bold mb-10">Модули</h2>
      <section className="flex flex-col gap-5 w-1/2">
        <Link href={'/'} className='flex flex-row px-3 py-6 items-center gap-5 border border-[#232323] rounded-lg'>
          <span className="text-5xl">1</span>
          Следы и разведка
        </Link>
        <Link href={'/'} className='flex flex-row px-3 py-6 items-center gap-5 border border-[#232323] rounded-lg'>
        <span className="text-5xl">2</span>
          Перечисление
        </Link>
        <Link href={'/'} className='flex flex-row px-3 py-6 items-center gap-5 border border-[#232323] rounded-lg'>
        <span className="text-5xl">3</span>
          Взлом веб-серверов
        </Link>
        <Link href={'/'} className='flex flex-row px-3 py-6 items-center gap-5 border border-[#232323] rounded-lg'>
        <span className="text-5xl">4</span>
          Взлом веб-приложений
        </Link>
        <Link href={'/'} className='flex flex-row px-3 py-6 items-center gap-5 border border-[#232323] rounded-lg'>
        <span className="text-5xl">5</span>
          Обход IDS, брэндмауэров и приманок
        </Link>
        <Link href={'/labs'} className='flex flex-row px-3 py-6 items-center gap-5 border border-[#232323] rounded-lg'>
        <span className="text-5xl">6</span>
          Проверка на проницаемость
        </Link>
      </section>
    </main>
  )
}
