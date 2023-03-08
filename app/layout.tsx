import Link from 'next/link'
import './globals.css'
import Image from 'next/image'

export const metadata = {
  title: 'Cyber Polygon',
  description: 'Military department AITU Cyber Polygon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-row'>
        <nav className='flex flex-col justify-between h-screen bg-[#232323] text-white px-24'>
          <div className='flex flex-col'>
            <Link href={'/'} className='font-bold text-3xl mt-24'>
              cybersecurity
            </Link>
            <ul className='flex flex-col gap-7 font-normal text-xl mt-11'>
              <li>
                <Link href={'/'} className='flex flex-row gap-4'>
                  <i className="fi fi-ss-house-chimney"></i>
                  <span>Главное</span>
                </Link>
              </li>
              <li>
                <Link href={'/'} className='flex flex-row gap-4'>
                  <i className="fi fi-ss-users"></i>
                  <span>Студенты</span>
                </Link>
              </li>
              <li>
                <Link href={'/'} className='flex flex-row gap-4'>
                  <i className="fi fi-ss-briefcase"></i>
                  <span>Лабораторные работы</span>
                </Link>
              </li>
            </ul>
          </div>
          <button className='flex flex-row gap-4 font-normal text-xl mb-16'>
            <i className="fi fi-rs-exit"></i>
            <span>Выйти</span>
          </button>
        </nav>
        <div className='mt-24 mx-14 w-full justify-end'>
          <header className='flex flex-row'>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
